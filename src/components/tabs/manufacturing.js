/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { Row, Col, Form, Select, Input, Table, Upload, DatePicker } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { Main, BasicFormWrapper, } from './style/wrapperStyle';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import Manufacture from './components/formForManufacturer';
import VenderModel from './components/venderModel';
import ManufactureDateForm from './components/manufactureDateForm';



const { Option } = Select;
const { TextArea } = Input;


function Manufacturing() {
    const [ProtoTypeName, setProtoTypeName] = useState('');
    const [ProtoTypeDesc, setProtoTypeDesc] = useState('');
    const [ProtoTypeRemarks, setProtoTypeRemarks] = useState('');
    const [visible, setVisible] = useState(false);

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
        // {
        //     title: 'Download',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        {
            title: '',
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
    const onCancel = () => {
        setVisible(false);
        console.log("cancelled");
    }
    const onSubmit = () => {
        notData.push({
            "id": "13",
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
            {/* <Main style={{ background: '#ffffff' }} > */}
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <Row className='top_form_card'>
                        <div className='top_form_card_left'>
                            <label className='top_form_card_left_key'>Prototype Name :</label>
                            <label className='top_form_card_left_value'>NT098-PT</label>
                        </div>
                        <Form className='top_form_card_right'>
                            <div className='top_form_card_right_version'>
                                <label className='top_form_card_right_version_key'>Version ID :</label>
                                <label className='top_form_card_right_version_value'>NT098-V1 </label>
                            </div>
                            <div className='top_form_card_right_dropdown'>
                                <label className='top_form_card_right_dropdown_label'>Status :</label>
                                <Select value={'2'} size="small" className='top_form_card_right_dropdown_select' >
                                    <Option value="5">Planned</Option>
                                    <Option value="1">Design</Option>
                                    <Option value="2">Manufacturing</Option>
                                    <Option value="3">Testing</Option>
                                    <Option value="4">Archived</Option>
                                </Select>
                            </div>
                        </Form>
                    </Row>
                </Cards>
            </HorizontalFormStyleWrap>
            <br />

            <Row gutter={25}>


                <Col md={12} sm={24} xs={24} className="centered-column" >

                    <ManufactureDateForm title={'Target Date'} />
                </Col>
                <Col md={12} sm={24} xs={24} className="centered-column" >
                    <ManufactureDateForm title={'Actual Date'} />
                </Col>
            </Row>
            <Cards headless>
                <Row align="middle" gutter={25}>
                    <Col md={6} xs={24}>
                        <label htmlFor="input-date">Component Description</label>
                    </Col>
                    <Col md={18} xs={24}>
                        <Form.Item name="input-date">
                            <TextArea />
                        </Form.Item>
                    </Col>
                </Row>
            </Cards>

            <Cards headless>
                <Row>
                    <Col md={12} align='left'>
                        <h2>Vender List</h2>
                    </Col>
                    <Col md={12} align='right'>
                        <Button size="small2" type="primary" onClick={() => setVisible(true)}>
                            <FeatherIcon icon="plus" size={14} />
                            Add Vendor
                        </Button>
                    </Col>
                    <Col md={24} align='right'>
                        <VenderModel onCancel={onCancel} onSubmit={onSubmit} visible={visible} setProtoTypeRemarks={setProtoTypeRemarks} setProtoTypeDesc={setProtoTypeDesc} setProtoTypeName={setProtoTypeName} />

                        <br />
                        <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
                    </Col>
                </Row>
            </Cards>
            <br />
            <br />

            <Row>
                <Col md={24}>
                    <Manufacture title='Purchase Order' />
                </Col>
            </Row>
            <br />
            <Row align="middle">
                <Col md={24} align='right'>
                    <Button size='small2' type='primary' style={{ marginRight: 5 }}>
                        save
                    </Button>
                    <Button size='small2' type='light'>
                        cancel
                    </Button>
                </Col>
            </Row>

            {/* </Main> */}
        </>
    );
}

export default Manufacturing;