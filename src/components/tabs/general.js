import React from 'react';

import { Row, Col, Form, Input, Upload,message, Button } from 'antd';
import { Link } from 'react-router-dom';

import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';

import DateForm from './components/dateForm';
import { Cards } from '../cards/frame/cards-frame';
// import { Button } from '../buttons/buttons';
// import { fetchPrototypeDetailsAPI } from '../../api/registerApi';
// import { Checkbox } from '../checkbox/checkbox';
const { TextArea } = Input;

function General() {
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
    const [form] = Form.useForm();

    const handlePrototypeData = (data) => {
        console.log(data)
    }
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">

                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Prototype Details' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form form={form} onFinish={handlePrototypeData}>
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="name">Name</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="name">
                                        <Input placeholder="Duran Clayton" />
                                    </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="description">Description</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="description">
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
                                    {/* <button onSubmit={handlePrototypeData} type='submit'>
                                        save
                                    </button> */}
                                    <Button onSubmit={handlePrototypeData} size='default' htmlFor='submit' key="submit" type='primary' style={{ marginRight: 5 }}>
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
                        <Form >
                            <Row align="middle" gutter={25} >
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="name">Name</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="name">
                                        <Input placeholder="Duran Clayton" />
                                    </Form.Item>
                                </Col>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="description">Description / Version Changes</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="description">
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
                        </Form>
                        <Row gutter={25}>
                            <Col lg={12} xs={24}>
                                <DateForm title="Projected Date" />
                            </Col>
                            <Col lg={12} xs={24}>
                                <DateForm title="Actual Date" />
                            </Col>
                        </Row>
                    </Cards>
                </Row>
                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20 }} >
                    <Cards title='Documents' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form >
                            <Row align="middle" gutter={25} >
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="name">Design Documents</label>
                                </Col>
                                <Col md={18} xs={24}>
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
                        </Form>
                       
                    </Cards>
                </Row>
                <Row align="middle" style={{ marginTop: 20 }}>
                    <Col md={24} align='right'>
                        <Button size='default' type='primary' style={{ marginRight: 5 }}>
                            save
                        </Button>
                        <Button size='default' type='light'>
                            cancel
                        </Button>
                    </Col>
                </Row>
              

            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    )
}

export default General