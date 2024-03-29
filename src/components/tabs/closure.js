/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';


function Closure() {

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <ProtoTypeHeader />
                </Cards>
                <Cards headless>
                <Form>
                <Cards title="Disassembly" headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>
                            <Row gutter={25}>
                                <Col xl={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrode-symmetry">Disassembly Observations</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="electrode-symmetry">
                                            <Input placeholder="Electrode Moc" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrode-symmetry">Disassembly Documents</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="electrode-symmetry">
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
                            
                        </Cards>
                        <Cards title="Conclusions" headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>
                            <Row gutter={25}>
                                <Col xl={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrode-symmetry">Conclusions Design</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="electrode-symmetry">
                                            <Input placeholder="Electrode Moc" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} md={24}>
                                    <Row align="middle">                                       
                                        <Col md={14} xs={24}>
                                            <Form.Item name="moc">
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
                            <Row gutter={25}>
                                <Col xl={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrode-symmetry">Conclusions Manufacturing</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="electrode-symmetry">
                                            <Input placeholder="Electrode Moc" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} md={24}>
                                    <Row align="middle">                                       
                                        <Col md={14} xs={24}>
                                            <Form.Item name="moc">
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
                            <Row gutter={25}>
                                <Col xl={12} md={24}>
                                    <Row align="middle">
                                        <Col md={10} xs={24}>
                                            <label htmlFor="electrode-symmetry">Conclusions Electrochemistry</label>
                                        </Col>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="electrode-symmetry">
                                            <Input placeholder="Electrode Moc" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} md={24}>
                                    <Row align="middle">                                       
                                        <Col md={14} xs={24}>
                                            <Form.Item name="moc">
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
                            
                        </Cards>
                    </Form>
                    {/* <Row align="middle">
                        <Col md={6} xs={24}>
                            <label htmlFor="input-date">Conclusion</label>
                        </Col>
                        <Col md={18} xs={24}>
                            <Form.Item name="input-date">
                                <Input.TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row> */}
                </Cards>
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
