import React from 'react';
import { Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import propTypes from 'prop-types';
import { Button } from '../../buttons/buttons';
import { Modal } from '../../modals/antd-modals';
import { BasicFormWrapper } from '../style/wrapperStyle';

function VendorModal({ visible, onCancel, setVendorList }) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const data = await form.validateFields();
    setVendorList(data);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };


  return (
    <Modal
      type='primary'
      title="Add Vendor"
      visible={visible}
      className="atbd-modal2"
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" onClick={handleSubmit}>
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
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="vendorName" label="Vendor Name">
              <Input placeholder="Vendor Name" />
            </Form.Item>
            <Form.Item name="quotation" label="Quotation">
              <Input placeholder="Quotation" />
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

VendorModal.propTypes = {
  visible: propTypes.bool,
  onCancel: propTypes.func,
  setVendorList: propTypes.func
};

export default VendorModal;

