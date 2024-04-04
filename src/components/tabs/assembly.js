/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Upload, Checkbox, DatePicker, message, Alert } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper, } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import { updateVersionByIdAPI } from '../../api/api';
import { setVersionDetails } from '../../redux/versionDetails/versionSlice';
import { SessionStorage } from '../../util/SessionStorage';
// import { Button } from '../buttons/buttons';

const { TextArea } = Input;

function Assembly() {

    const [formDetails, setFormDetails] = useState({});
    const [assemblyCompleted, setassemblyCompleted] = useState(false);
    const [assemblyForm] = Form.useForm();
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const data = useSelector((state) => state?.versionInfo?.versionDetails)
    const dispatch = useDispatch();

    // const fetchData = async () => {
    //     const response = await getVersionByIdAPI({ id: '5e63dc36-3f2a-4988-85eb-7fd355030357' });
    //     if (response) {
    //         console.log(response)
    //         setFormDetails(response);
    //     }
    // }

    useEffect(() => {
        setFormDetails(data);
    }, [data])

    useEffect(() => {
        if (Object.keys(formDetails).length !== 0) {
            assemblyForm.setFieldsValue({
                integrityTests: formDetails.integrityTests ? formDetails.integrityTests : undefined,
                actualAssemblyCompletionDate: formDetails.actualAssemblyCompletionDate ? moment(formDetails.actualAssemblyCompletionDate) : undefined,
            });            
            setassemblyCompleted(formDetails.markAsAssemblyComplete && formDetails.markAsAssemblyComplete === true);
        }
    }, [formDetails, assemblyForm]);

    const changeToCompleted = async (e) => {
        const assemblyData = await assemblyForm.validateFields();
        if(assemblyData.actualAssemblyCompletionDate)
        {
            setassemblyCompleted(e.target.checked);
        }
        else
        {
            message.error("Please select completion date!");
        }
    };

    const handleDateChange = (date) => {
        if(!date)
            setassemblyCompleted(false);
    }

    const showSuccessMessage = () => {
        setSuccessMessageVisible(true);
        setTimeout(() => {
            setSuccessMessageVisible(false);
        }, 5000);
    };

    const handleAssemblyData = async () => {
        const updateAssemblyData = await assemblyForm.validateFields();
        const response = await updateVersionByIdAPI({ id: SessionStorage.getItem('versionId'), markAsAssemblyComplete: assemblyCompleted,  ...updateAssemblyData });
        dispatch(setVersionDetails(response));
        showSuccessMessage();        
        console.log(response)
    }

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <div style={{ display: 'flex' }}>
                    <Cards headless>
                        <ProtoTypeHeader />
                        <Form form={assemblyForm} onFinish={handleAssemblyData}>
                            <Row gutter={25}>
                                <Col xl={12} lg={12}>                           
                                    <Row align="middle" gutter={25}>                          
                                        <Col md={10} xs={8}>                                            
                                            <label htmlFor='assemblyCompletedCheck'>Mark as Assembly Complete:</label>
                                        </Col>
                                        <Col md={4} style={{marginTop : 20}}>
                                            {/* <Form.Item name='assemblyCompletedCheck'> */}
                                                <Checkbox style={{height: 20, width: 20, fontSize: 30}} name='assemblyCompletedCheck' checked={assemblyCompleted} onChange={changeToCompleted}/>
                                            {/* </Form.Item> */}
                                        </Col>                                     
                                    </Row>                           
                                </Col>
                                <Col  xl={12} lg={12}>
                                    <Row align="middle">
                                        <Col md={6} xs={12} xl={12} lg={6}>
                                            <label htmlFor='actualAssemblyCompletionDate'>Assembly completion date:</label>
                                        </Col>
                                        <Col md={12} xs={24} align='right'>                                    
                                            <Form.Item name="actualAssemblyCompletionDate">
                                                <DatePicker onChange={handleDateChange} />
                                            </Form.Item>                                   
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row align="middle" gutter={25}>
                                <Col lg={24} sm={24}>
                                    <Row align="middle" gutter={25}>
                                        <Col md={6} xs={24} >
                                            {/* eslint-disable-next-line */}
                                            <label htmlFor='integrityTests'>Integrity Tests</label>
                                        </Col>
                                        <Col md={18} xs={24}>
                                            <Form.Item name="integrityTests">
                                                {/* <Input.TextArea rows={4} id='integrityTests' name='integrityTests' />
                                                < */}
                                                 <TextArea placeholder="write something." />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <Row align="middle" gutter={25}>
                                        <Col md={10} xs={24} >
                                            {/* eslint-disable-next-line */}
                                            <label id='integrityDoc' htmlFor='integrityDoc'>Integrity Documents</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="integrityDoc">
                                                <Upload className="sDash_upload-basic">
                                                    <span className="sDash_upload-text">Select File</span>
                                                    <Link to="#" className="sDash_upload-browse">
                                                        Browse
                                                    </Link>
                                                </Upload>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col lg={12} sm={24}>
                                    <Row align="middle" gutter={25}>
                                        <Col md={10} xs={24} >
                                            {/* eslint-disable-next-line */}
                                            <label id='assemblyDoc' htmlFor='assemblyDoc'>Assembly Documents</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="assemblyDoc">
                                                <Upload className="sDash_upload-basic">
                                                    <span className="sDash_upload-text">Select File</span>
                                                    <Link to="#" className="sDash_upload-browse">
                                                        Browse
                                                    </Link>
                                                </Upload>

                                            </Form.Item>
                                        </Col>
                                    </Row>

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
                </div>
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
        </BasicFormWrapper >
    );
}

export default Assembly;