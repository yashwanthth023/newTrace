import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { Row, Col, Form, Input, Table, Upload, Select, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ManufactureDateForm from '../../components/tabs/components/manufactureDateForm';
import VendorModel from '../../components/tabs/components/vendorModel';
import Manufacture from '../../components/tabs/components/formForManufacturer';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { addManufacturingDetailsAPI, fetchComponentDetailByIdAPI, updateManufacturingDetailsAPI } from '../../api/api';
import { SessionStorage } from '../../util/SessionStorage';
import { setInsertComponentDetails } from '../../redux/versionDetails/versionSlice';

const { TextArea } = Input;

const AddComponent = ({ setIsAddPage, isEdit, setComponentData, isView, onCancel }) => {
    const [formDetails, setFormDetails] = useState({})
    const [vendorList, setVendorList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [editVendor, setEditVendor] = useState(false);
    const [vendorIndex, setVendorIndex] = useState();
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const fetchData = async () => {
        if (isEdit || isView) {
            const response = await fetchComponentDetailByIdAPI({ id: SessionStorage.getItem('componentId') });
            console.log(response)
            setFormDetails(response);
            setVendorList(response?.vendorList ? response.vendorList : [])
        }
    }

    useEffect(() => {
        fetchData();
    }, [isEdit])

    const fillForm = () => {
        if (Object.keys(formDetails).length !== 0) {
            if (isEdit || isView) {
                form.setFieldsValue({
                    componentName: formDetails?.componentName,
                    status: formDetails?.status,
                    componentDescription: formDetails?.componentDescription,
                    targetDate: formDetails?.targetDate ? moment(formDetails.targetDate) : undefined,
                    targetDateRFQ: formDetails?.targetDateRFQ ? moment(formDetails.targetDateRFQ) : undefined,
                    targetDatePO: formDetails?.targetDatePO ? moment(formDetails.targetDatePO) : undefined,
                    targetDateReadyForAssembly: formDetails?.targetDateReadyForAssembly ? moment(formDetails.targetDateReadyForAssembly) : undefined,
                    actualDateRFQ: formDetails?.actualDateRFQ ? moment(formDetails.actualDateRFQ) : undefined,
                    actualDatePO: formDetails?.actualDatePO ? moment(formDetails.actualDatePO) : undefined,
                    actualDateReadyForAssembly: formDetails?.actualDateReadyForAssembly ? moment(formDetails.actualDateReadyForAssembly) : undefined,
                    PONumber: formDetails?.PONumber,
                    PODate: formDetails?.PODate ? moment(formDetails.PODate) : undefined,
                    vendor: formDetails?.vendor.vendorName,
                    deliveryNote: formDetails?.deliveryNote,
                });
                setVendorList(formDetails?.vendorList ? formDetails?.vendorList : []);
            }
        }
    }

    useEffect(() => {
        fillForm();
    }, [formDetails, form]);

    const onDelete = (index) => {
        const deletedVendor = vendorList.filter((_, i) => i !== index);
        setVendorList(deletedVendor);
        form.setFieldValue('vendor', '')
    }

    const dataSource = vendorList.map((list, i) => (
        {
            key: i + 1,
            vendor: list.vendorName,
            quotation: list.quotation,
            upload: <Upload beforeUpload={() => false}>
                <Button type="primary" size="small2">
                    Upload
                </Button>
            </Upload>,
            button: <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <div style={{ marginRight: 10 }}>
                    <Button type="primary" size="small2" onClick={() => { setVendorIndex(i); setEditVendor(true); setVisible(true) }}>
                        Edit
                    </Button>
                </div>
                <div>
                    <Button type="danger" size="small2" onClick={() => onDelete(i)}>
                        Delete
                    </Button>
                </div>
            </div>
        }
    ));

    const columns = [
        {
            title: 'SL.No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Vendor',
            dataIndex: 'vendor',
            key: 'vendor',
        },
        {
            title: 'Quotation',
            dataIndex: 'quotation',
            key: 'quotation',
        },
        {
            title: 'RFQ Document',
            dataIndex: 'rfqDocument',
            key: 'rfqDocument',
        },
        {
            title: 'Edit/Delete',
            dataIndex: 'button',
            key: 'button',
        },
    ];
    const onClose = () => {
        setVisible(false);
        setEditVendor(false);
    }
    const onSubmit = async () => {
        const formData = await form.validateFields();
        formData.vendorList = vendorList;
        const vendorIndex = formData.vendor;
        formData.vendor = vendorList[vendorIndex];
        console.log(isEdit)
        const response = isEdit ? await updateManufacturingDetailsAPI({ id: SessionStorage.getItem('componentId'), ...formData }) : await addManufacturingDetailsAPI({ versionId: 'ab5fb012-5796-4774-a184-4add002311fa', ...formData });
        if (response) {
            console.log(response);
            form.resetFields();
            dispatch(setInsertComponentDetails(response));
            setComponentData((data) => [formData, ...data]);
            setIsAddPage(false);
            onCancel();
        }
    }



    return (
        <Cards headless>
            <Cards title={`${isEdit ? 'Edit' : 'Add'} Component Details`} headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>
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
                                        <Input disabled={isView} />
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
                                    ]} >
                                        <Select disabled={isView} size="small" style={{ width: '100%' }} dropdownAlign='center' dropdownStyle={{ justifySelf: 'flex-start' }} >
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
                                        <TextArea rows={3} disabled={isView} />
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
                                        <DatePicker disabled={isView} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row gutter={25}>
                        <Col md={12} sm={24} xs={24} className="centered-column" >
                            <ManufactureDateForm isView={isView} title='Projected Date' data={["targetDateRFQ", "targetDatePO", "targetDateReadyForAssembly"]} />
                        </Col>
                        <Col md={12} sm={24} xs={24} className="centered-column" >
                            <ManufactureDateForm isView={isView} title='Actual Date' data={["actualDateRFQ", "actualDatePO", "actualDateReadyForAssembly"]} />
                        </Col>
                    </Row>
                    <Row>
                        <>
                            <Col md={12} align='left'>
                                <h2>Vendor List</h2>
                            </Col>

                            {!isView && (
                                <Col md={12} align='right'>
                                    <Button size="small2" type="primary" onClick={() => setVisible(true)}>
                                        <FeatherIcon icon="plus" size={14} />
                                        Add Vendor
                                    </Button>
                                </Col>
                            )}
                        </>
                        <Col md={24} align='right'>
                            <VendorModel onCancel={onClose} onSubmit={onSubmit} visible={visible} setVendorList={setVendorList} isEdit={editVendor} vendorData={vendorList} index={vendorIndex} />
                            <br />
                            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={24}>
                            <Manufacture title='Purchase Order' isView={isView} vendor={vendorList.length > 0 ?
                                vendorList.map((vendor, i) => ({ vendorName: vendor.vendorName, index: i })) : []
                            } />
                        </Col>
                    </Row>
                    <Row align="middle">
                        <Col md={24} align='right'>
                            {!isView && <Button size='small2' htmlType='submit' type='primary' style={{ marginRight: 5 }} >
                                save
                            </Button>}
                            <Button size='small2' type='light' onClick={() => { setIsAddPage(false); onCancel() }}>
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
    setIsAddPage: propTypes.func,
    onCancel: propTypes.func,
    isEdit: propTypes.bool,
    isView: propTypes.bool,
    setComponentData: propTypes.func,
}

AddComponent.defaultProps = {
    setIsAddPage: () => { },
    onCancel: () => { },
    isEdit: false,
    isView: false,
    setComponentData: () => { }
}
export default AddComponent;