import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Form, Input, Table, Upload, Select } from 'antd';
import propTypes from 'prop-types';
// import { HorizontalFormStyleWrap } from '../../components/tabs/style/formStyle';
// import { BasicFormWrapper } from '../styled';
import ManufactureDateForm from '../../components/tabs/components/manufactureDateForm';
import VendorModel from '../../components/tabs/components/vendorModel';
import Manufacture from '../../components/tabs/components/formForManufacturer';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';

const { TextArea } = Input;

const AddComponent = ({ setIsAddPage }) => {
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
            title: 'Vendor',
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
        console.log(ProtoTypeName, ProtoTypeDesc, ProtoTypeRemarks);
    }



    return (

        <Cards headless>

            <Cards title='Add Component Procurement' headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>

                <Form>
                    <Row align="middle" gutter={25}>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label id='name' htmlFor='name'>Name</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="name">
                                        <Input id='name' name='name' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label id='status' htmlFor='status'>Status</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="status">
                                        <Select size="small" style={{ width: '100%' }} dropdownAlign='center' dropdownStyle={{ justifySelf: 'flex-start' }} >
                                            <Select.Option value='1'>PO Process</Select.Option>
                                            <Select.Option value='2'>Proceed</Select.Option>
                                            <Select.Option value='3'>Yet to be delivered</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    {/* <br /> */}
                    <Row align="middle" gutter={25}>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label id='component' htmlFor='component'>Component Description</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="component">
                                        <TextArea rows={3} id='component' name='component' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label id='note' htmlFor='note'>Delivery Note</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="note">
                                        <TextArea rows={3} id='note' name='note' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Form>
            </Cards>
            <Row gutter={25}>
                <Col md={12} sm={24} xs={24} className="centered-column" >

                    <ManufactureDateForm title='Projected Date' />
                </Col>
                <Col md={12} sm={24} xs={24} className="centered-column" >
                    <ManufactureDateForm title='Actual Date' />
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
                    <Button size='small2' type='primary' style={{ marginRight: 5 }} onClick={() => setIsAddPage(false)}>
                        save
                    </Button>
                    <Button size='small2' type='light' onClick={() => setIsAddPage(false)}>
                        cancel
                    </Button>
                </Col>
            </Row>
        </Cards>


    );
}

AddComponent.propTypes = {
    setIsAddPage: propTypes.func
}

AddComponent.defaultProps = {
    setIsAddPage: () => { }
}
export default AddComponent;