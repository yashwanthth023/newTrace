import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, DatePicker } from 'antd';
import propTypes from 'prop-types';
import moment from 'moment';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';
import { addPrototypeMasterAPI } from '../../api/api';

// const { Option } = Select;
function CreateProject({ visible, onCancel, setProtoTypeDesc, setProtoTypeName }) { 

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
      const values = await form.validateFields();
      console.log('Form Values:', values);

      const result = await addPrototypeMasterAPI(values);
      if(result)
      {
        console.log('result ===', result);
        form.resetFields();
        onCancel();
        // form.setFields([
        //   {
        //     name: 'prototypeName',
        //     errors: ['Prototype name already exists!'],
        //   },
        // ]);
      }


    } catch (errorInfo) {
      console.log('Validation Failed:', errorInfo);
    }
  };
  // const setRandomName = () => {
  //   // Set the value of a specific field
  //   formRef.current.setFieldsValue({ username: `RandomUser${Math.floor(Math.random() * 100)}` });
  // };


  const handleCancel = () => {
    console.log("cancel");
    onCancel();
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // }

  // const options = [
  //   {
  //     label: 'Privet',
  //     value: 'privet',
  //   },
  //   {
  //     label: 'Team',
  //     value: 'team',
  //   },
  //   {
  //     label: 'Public',
  //     value: 'public',
  //   },
  // ];

  return (
    <Modal
      type={state.modalType}
      title="Create Prototype"
      visible={state.visible}
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" htmlType="submit" form="createProject">
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
          <Form form={form} id="createProject" name="createProject" onFinish={handleOk} > { /* onFinish={handleOk} */ }
            <Form.Item label="Prototype Name" name="prototypeName" 
            rules={[
              { required: true, message: 'Prototype name required!' },
              { whitespace: true, message: 'Prototype name cannot be empty space!' },
              { max: 100, message: 'Prototype name cannot exceed 50 characters!' }
              ]}
              >
              <Input placeholder="Prototype Name" onChange={(ele) => setProtoTypeName(ele.target.value)} /> 
            </Form.Item>
            <Form.Item name="description" label="Description"
            rules={[
              {
                required: true,
                message: 'Please input the description!',
              },
            ]}
            >
              <Input.TextArea rows={4} placeholder="Description" onChange={(ele) => setProtoTypeDesc(ele.target.value)}/>
           
            </Form.Item>
            <Form.Item >
              <span>Version ID : V1</span>
              </Form.Item>
               <Row style={{ display: "flex", flexDirection: 'column' }}>
              <Col md={12} xl={12}>
                <Form.Item name="projectedDesignCompletionDate" label="Projected Design Completion Date"
                 rules={[
                  {
                    required: true,
                    message: 'Please select the projected design completion date!',
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || value.isAfter(moment())) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Date must be in the future!'));
                    },
                  }),
                ]}
                >
                  <DatePicker  />
                </Form.Item>
              </Col>
              <Col md={12} xl={12}>
                <Form.Item name="projectedAssemblyCompletionDate" label="Projected Assembly Completion Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select the projected assembly completion date!',
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || value.isAfter(moment())) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Date must be in the future!'));
                    },
                  }),
                ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col md={12} xl={12}>
                <Form.Item name="ProjectedTestingCompletionDate" label="Projected Testing Completion Date"
                 rules={[
                  {
                    required: true,
                    message: 'Please select the projected testing completion date!',
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || value.isAfter(moment())) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Date must be in the future!'));
                    },
                  }),
                ]}
                >
                  <DatePicker/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

CreateProject.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  // onSubmit: propTypes.func.isRequired,
  setProtoTypeDesc: propTypes.func.isRequired,
  setProtoTypeName: propTypes.func.isRequired 
};

export default CreateProject;
