import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Upload, Alert } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import DateForm from './components/dateForm';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import { updatePrototypeDetailsAPI, updateVersionByIdAPI } from '../../api/api';
import { setPrototypeDetails, setVersionDetails } from '../../redux/versionDetails/versionSlice';
import { SessionStorage } from '../../util/SessionStorage';
// import { SessionStorage } from '../../util/SessionStorage';

const { TextArea } = Input;

function General() {
    const [formDetails, setFormDetails] = useState({})
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const data = useSelector((state) => state?.versionInfo?.versionDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        setFormDetails(data);
    }, [data])

    useEffect(() => {
        if (Object.keys(formDetails).length !== 0) {
            form1.setFieldsValue({
                prototypeName: formDetails.prototypeName,
                description: formDetails.prototypeDescription,
                remarks: formDetails.prototypeRemarks ? formDetails.prototypeRemarks : undefined,
            });
            form2.setFieldsValue({
                versionName: formDetails.versionName,
                description: formDetails.description ? formDetails.description : undefined,
                remarks: formDetails.remarks ? formDetails.remarks : undefined,
                projectedDesignCompletionDate: formDetails.projectedDesignCompletionDate ? moment(formDetails.projectedDesignCompletionDate) : undefined,
                projectedAssemblyCompletionDate: formDetails.projectedAssemblyCompletionDate ? moment(formDetails.projectedAssemblyCompletionDate) : undefined,
                projectedTestCompletionDate: formDetails.projectedTestCompletionDate ? moment(formDetails.projectedTestCompletionDate) : undefined,
                actualDesignCompletionDate: formDetails.actualDesignCompletionDate ? moment(formDetails.actualDesignCompletionDate) : undefined,
                actualAssemblyCompletionDate: formDetails.actualAssemblyCompletionDate ? moment(formDetails.actualAssemblyCompletionDate) : undefined,
                actualTestCompletionDate: formDetails.actualTestCompletionDate ? moment(formDetails.actualTestCompletionDate) : undefined,
            })
        }
    }, [formDetails, form1, form2]);

    const showSuccessMessage = () => {
        setSuccessMessageVisible(true);
        setTimeout(() => {
            setSuccessMessageVisible(false);
        }, 5000);
    };

    const handlePrototypeData = async () => {
        const prototypeData = await form1.validateFields()
        const response = await updatePrototypeDetailsAPI({ id: SessionStorage.getItem('prototypeId'), ...prototypeData });
        showSuccessMessage();
        dispatch(setPrototypeDetails(response));
        console.log("updatedValues", response)
    }
    const handleVersionData = async () => {
        const versionData = await form2.validateFields();
        const response = await updateVersionByIdAPI({ id: SessionStorage.getItem('versionID'), ...versionData });
        dispatch(setVersionDetails(response));
        showSuccessMessage();
        console.log(response)
    }

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Prototype Details' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form form={form1} onFinish={handlePrototypeData}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="prototypeName">Name</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="prototypeName" rules={[
                                        { required: true, message: 'Prototype name required!' },
                                        { whitespace: true, message: 'Prototype name cannot be empty space!' },
                                        { max: 100, message: 'Prototype name cannot exceed 50 characters!' }
                                    ]}>
                                        <Input placeholder="Duran Clayton" />
                                    </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="description">Description</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="description" rules={[
                                        { required: true, message: 'Prototype description required!' },
                                        { whitespace: true, message: 'Prototype description cannot be empty space!' },
                                        { min: 2, message: 'Prototype description should have minimum 2 characters!' }
                                    ]}>
                                        <TextArea placeholder="write something." />
                                    </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="remarks">Remarks</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="remarks">
                                        <TextArea placeholder="write remarks." />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row align="middle" >
                                <Col md={24} align='right'>
                                    <Button size='default' htmlType='submit' key="submit" type='primary' style={{ marginRight: 5 }}>
                                        save
                                    </Button>
                                    <Button size='default' type='light'>
                                        cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Form>

                    </Cards>
                </Row>
                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20 }} >
                    <Cards title='Version Details' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form form={form2} onFinish={handleVersionData}>
                            <Row align="middle" gutter={25} >
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="versionName">Name</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="versionName" rules={[
                                        { required: true, message: 'Version name required!' },
                                        { whitespace: true, message: 'Version name cannot be empty space!' },
                                        { max: 100, message: 'Version name cannot exceed 50 characters!' }
                                    ]}>
                                        <Input placeholder="Duran Clayton" />
                                    </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="description">Description / Version Changes</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="description" rules={[
                                        { required: true, message: 'Version description required!' },
                                        { whitespace: true, message: 'Version description cannot be empty space!' },
                                        { max: 100, message: 'Version description cannot exceed 50 characters!' }
                                    ]}>
                                        <TextArea placeholder="write something." />
                                    </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="remarks">Remarks</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="remarks">
                                        <TextArea placeholder="write remarks." />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row align="middle" gutter={25} >
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="file">Design Documents</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="file">
                                        <Upload className="sDash_upload-basic">
                                            <span className="sDash_upload-text">Select File</span>
                                            <Link to="#" className="sDash_upload-browse">
                                                Browse
                                            </Link>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={25}>
                                <Col lg={12} xs={24}>
                                    <DateForm title="Projected Date" data={["projectedDesignCompletionDate", "projectedAssemblyCompletionDate", "projectedTestCompletionDate"]} />
                                </Col>
                                <Col lg={12} xs={24}>
                                    <DateForm title="Actual Date" data={["actualDesignCompletionDate", "actualAssemblyCompletionDate", "actualTestCompletionDate"]} />
                                </Col>
                            </Row>
                            <Row align="middle">
                                <Col md={24} align='right'>
                                    <Button size='default' htmlType='submit' key="submit" type='primary' style={{ marginRight: 5 }}>
                                        save
                                    </Button>
                                    <Button size='default' type='light'>
                                        cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Cards>
                </Row>
                {successMessageVisible && (
                    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
                        <Alert
                            type='success'
                            message="Success"
                            showIcon
                            closable
                            onClose={() => setSuccessMessageVisible(false)}
                        />
                    </div>
                )}
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    )
}

export default General