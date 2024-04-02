import React, { useState, useEffect } from 'react';
import { Form, Input, Col, Row, DatePicker } from 'antd';
import moment from 'moment';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

const dateFormat = 'MM/DD/YYYY';

function CreateVersion({ visible, onCancel }) {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    visible,
    modalType: 'primary',
    checked: [],
  });

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  const handleOk = async() => {
    try {
      // Validate form fields
      // console.log(form.getFieldValue('propertyName'));
      // const values = await form.current.validateFields();
      // console.log('Form Values:', values);
      const values = await form.validateFields();
      console.log('Form Values:', values);
    
    } catch (errorInfo) {
      console.log('Validation Failed:', errorInfo);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      type={state.modalType}
      title="Create Version"
      visible={state.visible}
      className="atbd-modal2"
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" onClick={handleOk}>
            Save
          </Button>
          <Button size="default" type="light" key="back" outlined onClick={handleCancel}>
            Cancel
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="createProject" onFinish={handleOk}>
            <Form.Item name="versionId" label="Version ID"
             rules={[
              {
                required: true,
                message: 'Please input the Version ID!',
              },
              {
                max: 15,
                message: 'Version ID cannot be longer than 15 characters.',
              },
            ]}
            >
              <Input placeholder="Version ID" />
            </Form.Item>

            <Form.Item name="reason" label="Reason for Version Changes"
            rules={[
              {
                required: true,
                message: 'Please input the reason for version changes!',
              },
              {
                min: 10,
                message: 'Reason must be at least 10 characters long.',
              },
            ]}
            >
              <Input.TextArea rows={3} placeholder="Description" />
            </Form.Item>
            <Form.Item name="remarks" label="Remarks"
             rules={[
              {
                required: false,
              },
              {
                max: 200,
                message: 'Remarks cannot be longer than 200 characters.',
              },
            ]}
            >
              <Input placeholder="remarks" />
            </Form.Item>
            <Row style={{ display: "flex", flexDirection: 'column' }}>
              <Col md={12} xl={12}>
                <Form.Item name="Design" label="Projected Design Completion Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select the projected design completion date!',
                  },
                  {
                    validator: (_, value) =>
                      value && value.isBefore(moment()) ? Promise.reject(new Error('Date must be in the future')) : Promise.resolve(),
                  },
                ]}
                >
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12} xl={12}>
                <Form.Item name="Assembly" label="Projected Assembly Completion Date"
                 rules={[
                  {
                    required: true,
                    message: 'Please select the projected assembly completion date!',
                  },
                  {
                    validator: (_, value) =>
                      value && value.isBefore(moment()) ? Promise.reject(new Error('Date must be in the future')) : Promise.resolve(),
                  },
                ]}
                >
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12} xl={12}>
                <Form.Item name="Testing" label="Projected Testing Completion Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select the projected testing completion date!',
                  },
                  {
                    validator: (_, value) =>
                      value && value.isBefore(moment()) ? Promise.reject(new Error('Date must be in the future')) : Promise.resolve(),
                  },
                ]}
                >
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

CreateVersion.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default CreateVersion;

