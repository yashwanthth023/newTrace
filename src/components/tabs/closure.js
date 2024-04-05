/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Upload ,message} from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';

// import TextArea from 'antd/lib/input/TextArea';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import {  updateVersionByIdAPI} from '../../api/api';
import { SessionStorage } from '../../util/SessionStorage';
import { setVersionDetails } from '../../redux/versionDetails/versionSlice';



const { TextArea } = Input;


function Closure() {
    const [formDetails, setFormDetails] = useState({})
    const [form] = Form.useForm();

    const versionDetails = useSelector((state)=> state.versionInfo.versionDetails)
    const dispatch = useDispatch()

useEffect(() => {
    setFormDetails(versionDetails)
    // fetchData();
}, [versionDetails])

useEffect(() => {
    if (Object.keys(formDetails).length !== 0) {           
        form.setFieldsValue({
            disassemblyObservation: formDetails.disassemblyObservation,
            conclusionsTesting: formDetails.conclusionsTesting,
            conclusionsDesign: formDetails.conclusionsDesign,
            conclusionsManufacturing: formDetails.conclusionsManufacturing,
            conclusionsElectrochemistry: formDetails.conclusionsElectrochemistry,                           
        });
        
    }
}, [formDetails, form]);

const handlePrototypeData = async () => {
    const prototypeData = await form.validateFields();
    console.log(prototypeData);
    const response = await updateVersionByIdAPI( { id: SessionStorage.getItem('versionId') , ...prototypeData });

    
    
    console.log("updatedValues", response)
    if (response) {
        // Checkbox is checked and date is selected
        // Handle successful submission here
        dispatch(setVersionDetails(response));
        message.success('Closure as complete');
    } else {
        // Either checkbox is not checked or date is not selected
        message.error('Please Save before submitting as complete');
    }
}

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <ProtoTypeHeader />
                </Cards>
                <Form form={form} onFinish={handlePrototypeData}>

                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Disassembly' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="disassemblyObservation">Disassembly Observations</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="disassemblyObservation">
                                                <TextArea placeholder="Disassembly Observations" />
                                </Form.Item>
                                   
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="description">Disassembly Documents</label>
                                </Col>
                                <Col md={18} xs={24}>
                                        <Upload className="sDash_upload-basic">
                                            <span className="sDash_upload-text">Select File</span>
                                            <Link to="#" className="sDash_upload-browse">
                                                Browse
                                            </Link>
                                        </Upload>
                                </Col>                              
                            </Row>

                    </Cards>
                </Row>

                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Conclusions' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="conclusionsTesting">Conclusions Testing</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="conclusionsTesting">
                                                <TextArea placeholder="Disassembly Observations" />
                                </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                </Col>
                                <Col md={18} xs={24}>
                                        <Upload className="sDash_upload-basic">
                                            <span className="sDash_upload-text">Select File</span>
                                            <Link to="#" className="sDash_upload-browse">
                                                Browse
                                            </Link>
                                        </Upload>
                                </Col>                              
                            </Row>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="conclusionsDesign">Conclusions Design</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="conclusionsDesign">
                                                <TextArea placeholder="Disassembly Observations" />
                                </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                </Col>
                                <Col md={18} xs={24}>
                                        <Upload className="sDash_upload-basic">
                                            <span className="sDash_upload-text">Select File</span>
                                            <Link to="#" className="sDash_upload-browse">
                                                Browse
                                            </Link>
                                        </Upload>
                                </Col>                              
                            </Row>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="conclusionsManufacturing">Conclusions Manufacturing</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="conclusionsManufacturing" >
                                                <TextArea placeholder="Disassembly Observations" />
                                </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                </Col>
                                <Col md={18} xs={24}>
                                        <Upload className="sDash_upload-basic">
                                            <span className="sDash_upload-text">Select File</span>
                                            <Link to="#" className="sDash_upload-browse">
                                                Browse
                                            </Link>
                                        </Upload>
                                </Col>                              
                            </Row>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="name">Conclusions Electrochemistry</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="conclusionsElectrochemistry" >
                                                <TextArea placeholder="Disassembly Observations" />
                                </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                </Col>
                                <Col md={18} xs={24}>
                                        <Upload className="sDash_upload-basic">
                                            <span className="sDash_upload-text">Select File</span>
                                            <Link to="#" className="sDash_upload-browse">
                                                Browse
                                            </Link>
                                        </Upload>
                                </Col>                              
                            </Row>
                    </Cards>
                </Row>
              
                <Row align="middle" gutter={25}>
                    <Col md={24} align='right'>
                        <Button size='small2' htmlType='submit'  type='primary' style={{ marginRight: 5 }}>
                            Save
                        </Button>
                        <Button size='small2' type='success' style={{ marginRight: 5 }}>
                            Archive
                        </Button>

                    </Col>
                </Row>

                </Form>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Closure;
