import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Form, Input, Table, Upload, Select, DatePicker } from 'antd';
import propTypes from 'prop-types';
import ManufactureDateForm from '../../components/tabs/components/manufactureDateForm';
import VendorModel from '../../components/tabs/components/vendorModel';
import Manufacture from '../../components/tabs/components/formForManufacturer';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { getVersionByIdAPI } from '../../api/api';

const { TextArea } = Input;

const AddComponent = ({ setIsAddPage }) => {
    const [formDetails, setFormDetails] = useState({})
    const [vendorList, setVendorList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const fetchData = async () => {
        const response = await getVersionByIdAPI({ id: 'b5fb012-5796-4774-a184-4add002311fa' });
        console.log(response)
        setFormDetails({});
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (Object.keys(formDetails).length !== 0) {
            form.setFieldsValue({
                componentName: formDetails.componentName,
                status: formDetails.status,
                componentDescription: formDetails.componentDescription,
                targetDate: formDetails.targetDate,
                targetDateRFQ: formDetails.targetDateRFQ,
                targetDatePO: formDetails.targetDatePO,
                targetDateReadyForAssembly: formDetails.targetDateReadyForAssembly,
                actualDateRFQ: formDetails.actualDateRFQ,
                actualDatePO: formDetails.actualDatePO,
                actualDateReadyForAssembly: formDetails.actualDateReadyForAssembly,
                PONumber: formDetails.PONumber,
                PODate: formDetails.PODate,
                vendor: formDetails.vendor,
                deliveryNote: formDetails.deliveryNote,
            });
        }
    }, [formDetails, form]);

    console.log(vendorList)

    const dataSource = [
        {
            key: '1',
            name: 'dfd',
            age: 40,
            address: 'link',
            upload: <Upload beforeUpload={() => false}>
                <Button type="primary" size="small2">
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
                <Button type="primary" size="small2">
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
        {
            title: 'RFQ Document',
            dataIndex: 'upload',
            key: 'upload',
        },
    ];
    const onCancel = () => {
        setVisible(false);
        console.log("cancelled");
    }
    const onSubmit = () => {
        console.log("first")
    }



    return (
        <Cards headless>
            <Cards title='Add Component Details' headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>
                <Form form={form} onFinish={onSubmit}>
                    <Row align="middle" gutter={25}>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="componentName">Component Name</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="componentName" rules={[
                                        { required: true, message: 'Component Name is required!' }
                                    ]}>
                                        <Input />
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
                                    <Form.Item name="status" rules={[
                                        { required: true, message: 'Status is required!' }
                                    ]}>
                                        <Select size="small" style={{ width: '100%' }} dropdownAlign='center' dropdownStyle={{ justifySelf: 'flex-start' }} >
                                            <Select.Option value='PO Process'>PO Process</Select.Option>
                                            <Select.Option value='Yet to be delivered'>Yet to be delivered</Select.Option>
                                            <Select.Option value='Procured'>Procured</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row align="middle" gutter={25}>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor='componentDescription'>Component Description</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="componentDescription" rules={[
                                        { required: true, message: 'Component Description is required!' }
                                    ]}>
                                        <TextArea rows={3} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} sm={24}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24} >
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor='targetDate'>Target date</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="targetDate" rules={[
                                        { required: true, message: 'Target Date is required!' }
                                    ]}>
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row gutter={25}>
                        <Col md={12} sm={24} xs={24} className="centered-column" >
                            <ManufactureDateForm title='Projected Date' data={["targetDateRFQ", "targetDatePO", "targetDateReadyForAssembly"]} />
                        </Col>
                        <Col md={12} sm={24} xs={24} className="centered-column" >
                            <ManufactureDateForm title='Actual Date' data={["actualDateRFQ", "actualDatePO", "actualDateReadyForAssembly"]} />
                        </Col>
                    </Row>
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
                            <VendorModel onCancel={onCancel} onSubmit={onSubmit} visible={visible} setVendorList={setVendorList} />
                            <br />
                            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={24}>
                            <Manufacture title='Purchase Order' />
                        </Col>
                    </Row>
                    <Row align="middle">
                        <Col md={24} align='right'>
                            <Button size='small2' htmlType='submit' type='primary' style={{ marginRight: 5 }} >
                                save
                            </Button>
                            <Button size='small2' type='light' onClick={() => setIsAddPage(false)}>
                                cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Cards>
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