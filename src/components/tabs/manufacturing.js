/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {  useState } from 'react';
import { Row, Col, Form, Select, Input, InputNumber, Table, Upload} from 'antd';
import { Main, BasicFormWrapper, } from './manufacture/styled';
import { Cards } from '../cards/frame/cards-frame';
import { Cascader } from '../cascader/cascader';
import { Button } from '../buttons/buttons';
// import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
// import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
// import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Option } = Select;
const { TextArea } = Input;


function Manufacturing() {
  const [form] = Form.useForm();
  const [state, setstate] = useState({
    values: {},
    cascaderItem: [],
  });
  const handleSubmit = (values) => {
    setstate({ ...state, values });
  };

  const onChangeCascader = (value) => {
    setstate({ ...state, cascaderItem: value });
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      upload: <Upload beforeUpload={() => false}> 
      <Button type="primary" size="small">
        Uploaded
      </Button>
    </Upload>
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      upload: <Upload beforeUpload={() => false}> 
      <Button type="primary" size="small">
        Uploaded
      </Button>
    </Upload>
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Upload',
      dataIndex: 'upload',
      key: 'upload',
    //   render: (text, record) => (
    //     <Upload beforeUpload={() => false}> 
    //       <Button type="primary" size="small">
    //         {text ? 'Uploaded' : 'Upload'}
    //       </Button>
    //     </Upload>
    //   ),
    },
  ];


  return (
    <>
      {/* <PageHeader
        ghost
        title="Form"
        buttons={[
        //   <div key="1" className="page-header-actions">
        //     <CalendarButtonPageHeader />
        //     <ExportButtonPageHeader />
        //     <ShareButtonPageHeader />
        //     <Button size="small" type="primary">
        //       <FeatherIcon icon="plus" size={14} />
        //       Add New
        //     </Button>
        //   </div>,
        ]}
      /> */}
      <Main style={{background:'#ffffff'}} >
        <Row gutter={25}>
        <Col md={18} sm={18} xs={12}>
         <label>PropTypes:</label>              
            </Col>           
           
            <Col md={6} sm={6} xs={12}>
                 <label>PropTypes:</label>  
                 <div className="form-item">
                    <label htmlFor="casecader">Casecader</label>
                    <Cascader onChange={onChangeCascader} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
                  </div>          

            </Col>    
               
            </Row>
            <Row gutter={25}>
            <Col md={12} sm={24} xs={24} className="centered-column" style={{margin: '0 auto'}}>
            <Cards title="Elements of Form" caption="The simplest use of Form">
              <BasicFormWrapper>
                <Form layout="vertical" form={form} name="basicforms" onFinish={handleSubmit}>
                  <Form.Item label="Username" name="username">
                    <Input placeholder="Username" />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!', type: 'number' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Website" name="website">
                    <Input placeholder="http://website.com" />
                  </Form.Item>
                  <Form.Item label="Textarea" name="textarea">
                    <TextArea />
                  </Form.Item>
                  <div className="form-item">
                    <label htmlFor="casecader">Casecader</label>
                    <Cascader onChange={onChangeCascader} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
                  </div>

                  <Form.Item label="Select" name="Select">
                    <Select
                      showSearch
                      placeholder="Please Slelect"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="">Please Select</Option>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" size="default" type="primary">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </BasicFormWrapper>
            </Cards>
          </Col>
            </Row>  

            <Row>
                <Col md={24}>
                <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />

                </Col>
            </Row>
       
      </Main>
    </>
  );
}

export default Manufacturing;
