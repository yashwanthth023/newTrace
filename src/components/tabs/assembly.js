import React from 'react';
import { Row, Col, Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper, } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
// import { Button } from '../buttons/buttons';


function Assembly() {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">

                <Cards headless>
                    <ProtoTypeHeader />
                </Cards>

                <div style={{ display: 'flex' }}>
                    <Cards headless>
                        <Form>
                            <Row align="middle" gutter={25}>
                                <Col lg={24} sm={24}>
                                    <Row align="middle" gutter={25}>
                                        <Col md={6} xs={24} >
                                            {/* eslint-disable-next-line */}
                                            <label id='name' htmlFor='name'>Integrity Tests</label>
                                        </Col>
                                        <Col md={18} xs={24}>
                                            <Form.Item name="name">
                                                <Input.TextArea rows={4} id='name' name='name' />
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
                        </Form>
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
                    </Cards>
                </div>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper >
    );
}

export default Assembly;