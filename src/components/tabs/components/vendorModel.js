import React, { useEffect } from 'react';
import { Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import propTypes from 'prop-types';
import { Button } from '../../buttons/buttons';
import { Modal } from '../../modals/antd-modals';
import { BasicFormWrapper } from '../style/wrapperStyle';

function VendorModal({ visible, onCancel, setVendorList, isEdit, index, vendorData }) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const data = await form.validateFields();
    if (isEdit) {
      setVendorList((list) => {
        list[index] = data;
        return list;
      });
    } else {
      setVendorList((list) => [...list, data]);
    }
    form.resetFields();
    onCancel();
  };

  const fillForm = () => {
    if (vendorData && Object.keys(vendorData).length !== 0) {
      if (isEdit) {
        form.setFieldsValue({
          vendorName: vendorData[index].vendorName,
          quotation: vendorData[index].quotation
        });
      }
    }
  }

  useEffect(() => {
    fillForm();
  }, [vendorData, index, form]);

  const handleCancel = () => {
    form.resetFields();
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
          <Button size="default" htmlType='submit' type="primary" key="submit" onClick={handleSubmit}>
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
            <Form.Item name="rfqDocuments" label="Upload RFQ Documents">
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
  setVendorList: propTypes.func,
  isEdit: propTypes.bool,
  index: propTypes.number,
  vendorData: propTypes.object
};

export default VendorModal;
