/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {  useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { Row, Col, Form, Select, Input, Table, Upload} from 'antd';
import { Main, BasicFormWrapper, } from './manufacture/styled';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import Manufacture from './components/formForManufacturer';
import VenderModel from './manufacture/venderModel';
// import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
// import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
// import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { DatePicker } from 'antd';


const { Option } = Select;
const { TextArea } = Input;
const dateFormat = 'MM/DD/YYYY';



function Manufacturing() {
    const [ProtoTypeName , setProtoTypeName] = useState('');
  const [ProtoTypeDesc , setProtoTypeDesc] = useState('');
    const [ProtoTypeRemarks , setProtoTypeRemarks] = useState('');
    const [visible , setVisible] = useState(false);

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
      name: 'dfd',
      age: 40,
      address: 'link',
      upload: <Upload beforeUpload={() => false}> 
      <Button type="primary" size="small">
        Upload
      </Button>
    </Upload>
    },
    {
      key: '2',
      name: 'cdf',
      age: 42,
      address: 'link',
      upload: <Upload beforeUpload={() => false}> 
      <Button type="primary" size="small">
        Upload
      </Button>
    </Upload>
    }
  ];

  const columns = [
    {
      title: 'SL.No',
      dataIndex: 'key',
      key: 'name',
    },
    {
      title: 'Vender',
      dataIndex: 'name',
      key: 'age',
    },
    {
      title: 'Quotation',
      dataIndex: 'age',
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
  const onCancel =()=>
  {
    setVisible(false);
    console.log("cancelled");
  }
  const onSubmit =()=>
  {
    notData.push({"id" : "13",
    "title": ProtoTypeName,
    "status": "early",
    "content": ProtoTypeDesc,
      "category": "Web Design",
      "rate": 5,
      "popular": 12,
      "percentage": 3
  });
}
  


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
         <label>PropType ID:</label>              
            </Col>           
           
            <Col md={6} sm={6} xs={12}>
                 <label>PropType ID:</label>  
                 <Form.Item label="Status" name="Select">
                    <Select
                      showSearch
                      placeholder="Please Slelect"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="">Please Select</Option>
                      <Option value="jack">Design</Option>
                      <Option value="lucy">Manufacture</Option>
                      <Option value="tom">Testing</Option>
                    </Select>
                  </Form.Item>          

            </Col>    
               
            </Row>
            <Row gutter={25}>
            <Col md={12} sm={24} xs={24} className="centered-column" >
            <Cards title="Elements of Form" caption="The simplest use of Form">
              <BasicFormWrapper>
                <Form layout="vertical" form={form} name="basicforms" onFinish={handleSubmit}>
                  <Form.Item label="AssemblyComplete_Projection" name="Date">
                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat}  />
                  </Form.Item>
                
                  <Form.Item label="AssemblyComplete_Actual" name="Date">
                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat}  />
                  </Form.Item>

                  <Form.Item label="Component Description" name="textarea">
                    <TextArea />
                  </Form.Item>                 

                  {/* <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item> */}
                  {/* <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!', type: 'number' }]}
                  >
                    <InputNumber />
                  </Form.Item> */}
                  {/* <Form.Item label="Website" name="website">
                    <Input placeholder="http://website.com" />
                  </Form.Item> */}
                  
                  {/* <div className="form-item">
                    <label htmlFor="casecader">Casecader</label>
                    <Cascader onChange={onChangeCascader} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
                  </div> */}                
                 
                </Form>
              </BasicFormWrapper>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24} className="centered-column" >
            <Cards title="Target Information" caption="The simplest use of Form">
              <BasicFormWrapper>
                <Form layout="vertical" form={form} name="basicforms" onFinish={handleSubmit}>                

                  <Form.Item label="Date_Target" name="">
                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat}  />
                  </Form.Item>

                  <Form.Item label="DateTarget_RFQ" name="">
                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat}  />
                  </Form.Item>

                  <Form.Item label="DateTarget_PO" name="">
                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat}  />
                  </Form.Item>

                  <Form.Item label="DateActual_ReadyForAssembly" name="">
                    <Input placeholder="" />
                  </Form.Item>

                  {/* <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item> */}
                  {/* <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!', type: 'number' }]}
                  >
                    <InputNumber />
                  </Form.Item> */}
                  {/* <Form.Item label="Website" name="website">
                    <Input placeholder="http://website.com" />
                  </Form.Item> */}
                  
                  {/* <div className="form-item">
                    <label htmlFor="casecader">Casecader</label>
                    <Cascader onChange={onChangeCascader} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
                  </div> */}

                 
                  <Form.Item>
                    <Button htmlType="submit" size="default" type="primary">
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              </BasicFormWrapper>
            </Cards>
          </Col>
            </Row>  

            <Row>
                <Col md={24}>
                <Button size="small" key="4" type="primary" onClick ={()=> setVisible(true)}>
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
            <VenderModel onCancel={onCancel} onSubmit ={onSubmit} visible={visible}setProtoTypeRemarks={setProtoTypeRemarks} setProtoTypeDesc={setProtoTypeDesc} setProtoTypeName={setProtoTypeName}/>

                <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
                </Col>
            </Row>

            <Row>
                <Col md={24}>
                    <Manufacture title='PO'/>
                </Col>
            </Row>
       
      </Main>
    </>
  );
}

export default Manufacturing;
