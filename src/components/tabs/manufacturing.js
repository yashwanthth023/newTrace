/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { Row, Col, Form, Select, Input, Table, Upload, DatePicker } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { Main, BasicFormWrapper, } from './style/wrapperStyle';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import Manufacture from './components/formForManufacturer';
import VendorModel from './components/vendorModel';
import ManufactureDateForm from './components/manufactureDateForm';
import ProtoTypeHeader from './components/protoTypeInfo';



const { Option } = Select;
const { TextArea } = Input;


function Manufacturing() {
    const [ProtoTypeName, setProtoTypeName] = useState('');
    const [ProtoTypeDesc, setProtoTypeDesc] = useState('');
    const [ProtoTypeRemarks, setProtoTypeRemarks] = useState('');
    const [visible, setVisible] = useState(false);


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
        <BasicFormWrapper>
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
                    <ProtoTypeHeader />
                </Cards>
                <Cards headless>

                    <Form>
                        <Row align="middle" gutter={25}>
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Component Description</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <TextArea rows={3} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Cards>


                {/* <Cards title='Assembly Complete Date' headStyle={{ textAlign: 'center' }}>
                    <Form name="date-form" layout="horizontal" >

                        <Row gutter={25} align='middle'>
                            <Col xl={12} md={24}>
                                <Row align="middle" gutter={25}>
                                    <Col md={10} xs={24}>
                                        <label htmlFor="projection">Projection</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="design">
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} md={24}>
                                <Row align="middle" gutter={25}>
                                    <Col md={10} xs={24} >
                                        <label htmlFor="actual">Actual</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="assembly">
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Form>
                </Cards> */}
                <Row gutter={25}>
                    <Col md={12} sm={24} xs={24} className="centered-column" >

                        <ManufactureDateForm title={'Projected Date'} />
                    </Col>
                    <Col md={12} sm={24} xs={24} className="centered-column" >
                        <ManufactureDateForm title={'Actual Date'} />
                    </Col>
                </Row>
                <Cards headless>
                    <Row>
                        <Col md={12} align='left'>
                            <h2>Vendor List</h2>
                        </Col>
                        <Col md={12} align='right'>
                            <Button size="small2" type="primary" onClick={() => setVisible(true)}>
                                <FeatherIcon icon="plus" size={14} />
                                Add Vendor
                            </Button>
                        </Col>
                        <Col md={24} align='right'>
                            <VendorModel onCancel={onCancel} onSubmit={onSubmit} visible={visible} setProtoTypeRemarks={setProtoTypeRemarks} setProtoTypeDesc={setProtoTypeDesc} setProtoTypeName={setProtoTypeName} />

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
            </HorizontalFormStyleWrap>
            {/* </Main> */}
        </BasicFormWrapper>
    );
}

export default Manufacturing;