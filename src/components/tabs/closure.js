/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';
// import TextArea from 'antd/lib/input/TextArea';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';

const { TextArea } = Input;

function Closure() {

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <ProtoTypeHeader />
                </Cards>
                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Disassembly' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form >
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="name">Disassembly Observations</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="name">
                                    <TextArea placeholder="write something." />
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
                        </Form>

                    </Cards>
                </Row>

                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Conclusions' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form >
                            <Row align="middle" gutter={25}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="name">Disassembly Observations</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="name">
                                    <TextArea placeholder="write something." />
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
                                    <label htmlFor="name">Conclusions Manufacturing</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="name">
                                    <TextArea placeholder="write something." />
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
                                    <Form.Item name="name">
                                    <TextArea placeholder="write something." />
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
                        </Form>

                    </Cards>
                </Row>
              
                <Row align="middle" gutter={25}>
                    <Col md={24} align='right'>
                        <Button size='small2' type='primary' style={{ marginRight: 5 }}>
                            Save
                        </Button>
                        <Button size='small2' type='success' style={{ marginRight: 5 }}>
                            Archive
                        </Button>

                    </Col>
                </Row>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Closure;
