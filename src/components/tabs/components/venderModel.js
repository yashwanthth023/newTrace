import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Col, Row, DatePicker, Upload } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../../components/buttons/buttons';
import { Modal } from '../../../components/modals/antd-modals';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';

function VenderModel({ visible, onCancel }) {
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

  //   const handleOk = (e ) => {

  //     e.preventDefault()
  //     form.getFieldsValue((e)=>console.log(e))
  //     form.validateFields((error, values) => {
  //     console.log("called22");
  //         if (error) {
  //           console.log('error while validating')
  //         } 
  //         else if (values) {
  //            console.log('name: ', values.project, 'email: ', values.description)
  //          }
  //     })
  //     // onCancel();
  //   };
  const handleOk = (values) => {
    // Access the form values here
    console.log('Submitted values:', values);
    console.log('Submitted values:', values.project);

    // If you want to access specific fields, you can do so like this:
    const { project, description, remarks, Design, Assembly, Testing } = values;
    console.log('Project:', project);
    console.log('Description:', description);
    console.log('Remarks:', remarks);
    console.log('Design Completion Date:', Design);
    console.log('Assembly Completion Date:', Assembly);
    console.log('Testing Completion Date:', Testing);
  };

  const handleCancel = () => {
    onCancel();
  };

  const options = [
    {
      label: 'Privet',
      value: 'privet',
    },
    {
      label: 'Team',
      value: 'team',
    },
    {
      label: 'Public',
      value: 'public',
    },
  ];

  return (
    <Modal
      type={state.modalType}
      title="Add Vendor"
      visible={state.visible}
      className={"atbd-modal2"}
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" onClick={handleOk}>
            Save
          </Button>
          <Button size="default" type="white" key="back" outlined onClick={handleCancel}>
            Cancel
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="" onFinish={handleOk}>
            <Form.Item name="Vender" label="Vender Name">
              <Input placeholder="Vender Name" />
            </Form.Item>
            <Form.Item name="Quotation" label="Quotation">
              <Input placeholder="Quotation" />
            </Form.Item>
            <Form.Item name="project" label="Remarks">
              <Input placeholder="remarks" />
            </Form.Item>

            <Form.Item name="Testing" label="Upload RFQ Documents">
              <Upload className="sDash_upload-basic">
                <span className="sDash_upload-text">Select File</span>
                <Link to="#" className="sDash_upload-browse">
                  Browse
                </Link>
              </Upload>
            </Form.Item>

          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

// CreateProject.propTypes = {
//   visible: propTypes.bool.isRequired,
//   onCancel: propTypes.func.isRequired,
// };

export default VenderModel;

