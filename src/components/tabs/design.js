/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, Upload, message,Checkbox, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import ViewElectroChem from './components/viewElectrochem';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import { getVersionByIdAPI, updateVersionById } from '../../api/api';


const { Option } = Select;
// const { TextArea } = Input;
function Design() {
    const [formDetails, setFormDetails] = useState({})
    const [form] = Form.useForm();

    const fetchData = async () => {
        const response = await getVersionByIdAPI({ id: '097d0488-237a-407b-8c3e-098ca8e06717' });
        console.log(response)
        setFormDetails(response);
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (Object.keys(formDetails).length !== 0) {           
            form.setFieldsValue({
                electrodeDimension: formDetails.electrodeDimension,
                electrodeShape: formDetails.electrodeShape,
                electrodeArea: formDetails.electrodeArea,
                electrodeGap: formDetails.electrodeGap,
                electroChemAnode: formDetails.electroChemAnode,
                electroChemCathode: formDetails.electroChemCathode,
                nCell: formDetails.nCell,
                markAsDesignComplete: formDetails.markAsDesignComplete,               
                actualDateDesignComplete: formDetails.actualDateDesignComplete ? moment(formDetails.actualDateDesignComplete) : undefined,                
            });
            
        }
    }, [formDetails, form]);

    const handlePrototypeData = async () => {
        const prototypeData = await form.validateFields()
        const response = await updateVersionById({ id: '7e897fa8-cdb5-4648-95fc-c9b969994964', ...prototypeData });
        console.log("updatedValues", response)
    }


    const [showModal, setShowModal] = useState(false);
    // const [selectedValue, setSelectedValue] = useState('');
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>                 
                   
                   

                    <ProtoTypeHeader />
                    <Form form={form} name="date-form" layout="horizontal" onFinish={handlePrototypeData}>
                    <Row gutter={25}>
                        <Col xl={12} lg={12}> 
                        <Row align="middle" gutter={25}>                          
                                <Col md={10} xs={8}>
                                    {/* <label htmlFor="moc"></label> */}
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="markAsDesignComplete">Mark as Design Complete:</label>
                                </Col>
                                <Col md={4} style={{marginTop : 20}}>
                                    <Checkbox name="markAsDesignComplete" style={{height: 20, width: 20, fontSize: 30}}/>
                                </Col>                                     
                            </Row>                           
                                
                           
                        </Col>
                        <Col  xl={12} lg={12}>
                            <Row align="middle">
                                <Col md={6} xs={12} xl={12} lg={6} >
                                    <label htmlFor="actualDateDesignComplete">Actual Date Design Complete:</label>
                                </Col>
                                <Col md={12} xs={24} align='right'>                                    
                                <Form.Item name="actualDateDesignComplete">
                                    <DatePicker />
                                </Form.Item>                                   
                                </Col>
                            </Row>
                       </Col>
                    </Row>
                                   
                   
                   
                        <Cards title='Electrode Details' headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>
                            
                            <Row gutter={25}>
                                <Col xl={12} lg={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrodeDimension">Dimensions</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                                <Form.Item name="electrodeDimension" rules={[
                                                { required: true, message: 'Dimension value required!' },
                                                { whitespace: true, message: 'Dimension value cannot be empty space!' },
                                                { max: 100, message: 'Dimension value cannot exceed 50 characters!' }
                                            ]}>
                                                <Input placeholder="Electrode Dimension" />
                                            </Form.Item>
                                            
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} lg={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrodeShape">Shape</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="electrodeShape">
                                                <Select size="small" style={{ width: "100%" }}>
                                                    <Option value="1">Rectangular</Option>
                                                    <Option value="2">Circular</Option>
                                                    <Option value="2">Others</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                           
                            <Row gutter={25}>
                                <Col xl={12} lg={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrodeArea">Area</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                        <Form.Item name="electrodeArea" rules={[
                                                { required: true, message: 'Area value required!' },
                                                { whitespace: true, message: 'Area value cannot be empty space!' },
                                                { max: 100, message: 'Area value cannot exceed 50 characters!' }
                                            ]}>
                                                <Input placeholder="Electrode Area" />
                                            </Form.Item>                                           
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} lg={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrodeGap">Gap</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                        <Form.Item name="electrodeGap" rules={[
                                                { required: true, message: 'Gap value required!' },
                                                { whitespace: true, message: 'Gap value cannot be empty space!' },
                                                { max: 100, message: 'Gap value cannot exceed 50 characters!' }
                                            ]}>
                                                <Input placeholder="Electrode Gap" />
                                            </Form.Item>
                                           
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Cards>                   

                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="electroChemAnode">EC Anode Details</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="electroChemAnode">
                                            <Select size="small" style={{ width: "100%" }} >
                                                <Option value="1" key="1">EC 1<div style={{ textAlign: 'right' }}>
                                                    <Button size="small" onClick={() => setShowModal(true)}>
                                                        View
                                                    </Button>
                                                </div></Option>
                                                <Option value="2" key="2">EC 2<div style={{ textAlign: 'right' }}>
                                                    <Button size="small" onClick={() => setShowModal(true)}>
                                                        View
                                                    </Button>
                                                </div></Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="electroChemCathode">EC Cathode Details</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="electroChemCathode">
                                            <Select
                                                size="small"
                                                style={{ width: "100%" }}
                                                labelInValue
                                           
                                            >
                                                <Option value="1" key="1">EC 1<div style={{ textAlign: 'right' }}>
                                                    <Button size="small" onClick={() => setShowModal(true)}>
                                                        View
                                                    </Button>
                                                </div></Option>
                                                <Option value="2" key="2">EC 2<div style={{ textAlign: 'right' }}>
                                                    <Button size="small" onClick={() => setShowModal(true)}>
                                                        View
                                                    </Button>
                                                </div></Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <ViewElectroChem visible={showModal} onCancel={() => setShowModal(false)} />
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="nCell">Number of Cells</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                    <Form.Item name="nCell" rules={[
                                                { required: true, message: 'nCell value required!' },
                                                { whitespace: true, message: 'nCell value cannot be empty space!' },
                                                { max: 100, message: 'nCell value cannot exceed 50 characters!' }
                                            ]}>
                                                <Input placeholder="nCell" />
                                            </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Design Documents</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Upload className="sDash_upload-basic" {...props}>
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
                    </Form>
                    <br />
                    <Form name="sDash_upload" layout="vertical">

                        {/* <br />
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="moc">Integrity Test</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="moc">
                                    <TextArea placeholder="write something." />
                                </Form.Item>
                            </Col>
                        </Row> */}
                        <br />
                        <br />
                        <Row align="middle">
                            <Col md={24} align='right'>
                                <Button size='default' type='primary' style={{ marginRight: 5 }}>
                                    save
                                </Button>
                                <Button size='default' type='light'>
                                    cancel
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Design;
