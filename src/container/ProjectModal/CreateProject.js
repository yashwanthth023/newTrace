import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

// const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';
function CreateProject({ visible, onCancel, onSubmit, setProtoTypeDesc, setProtoTypeName }) { 

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

  const handleOk = () => {
    onSubmit();
  };

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
            <Form.Item label="Prototype Name" name="propertyName" rules={[
              { required: true, message: 'Prototype name required!' },
              { whitespace: true, message: 'Prototype name cannot be empty space!' },
              { max: 100, message: 'Prototype name cannot exceed 50 characters!' }
              ]}>
              <Input placeholder="Prototype Name" onChange={(ele) => setProtoTypeName(ele.target.value)} /> 
            </Form.Item>
            {/* <Form.Item name="category" initialValue="" label="">
              <Select style={{ width: '100%' }}>
                <Option value="">Project Category</Option>
                <Option value="one">Project One</Option>
                <Option value="two">Project Two</Option>
              </Select>
            </Form.Item> */}
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} placeholder="Description" onChange={(ele) => setProtoTypeDesc(ele.target.value)}/>
            </Form.Item>
            {/* <Form.Item name="Remarks" label="Remarks" >
              <Input placeholder="Remarks" onChange={(ele) => setProtoTypeRemarks(ele.target.value)} />
            </Form.Item> */}
            {/* <Form.Item name="pricacy" initialValue={['team']} label="Project Privacy">
              <CheckboxGroup options={options} />
            </Form.Item> */}
            {/* <Form.Item name="members" label="Project Members">
              <Input placeholder="Search Members" />
            </Form.Item> */}
            {/* <div className="projects-members mb-30">
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
            </div> */}
            {/* <Row gutter={15}>
              <Col md={12}>
                <Form.Item name="start" label="Start Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item name="end" label="End Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
            </Row> */}
               <Row style={{ display: "flex", flexDirection: 'column' }}>
              <Col md={12} xl={12}>
                <Form.Item name="Design" label="Projected Design Completion Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12} xl={12}>
                <Form.Item name="Assembly" label="Projected Assembly Completion Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12} xl={12}>
                <Form.Item name="Testing" label="Projected Testing Completion Date">
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

CreateProject.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  setProtoTypeDesc: propTypes.func.isRequired,
  setProtoTypeName: propTypes.func.isRequired 
};

export default CreateProject;
