/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, DatePicker, Input, Select } from 'antd';
import propTypes from 'prop-types';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Cards } from '../../cards/frame/cards-frame';

function ProtoTypeHeader({ title }) {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <Form name="date-form" layout="horizontal">
                        <Row gutter={25}>
                            <Col lg={12} xl={8} sm={12}>
                                <Row align="middle" gutter={25}>
                                    <Col md={10} xs={12}>
                                        <label htmlFor='design'>Prototype ID :</label>
                                    </Col>
                                    <Col md={14} xs={12}>
                                        {/* <Form.Item name="design"> */}
                                        {/* <Input /> */}
                                        <label>NT-PT0111</label>
                                        {/* </Form.Item> */}
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} xl={8}>
                                <Row align="middle">
                                    <Col md={10} xs={12}>
                                        <label htmlFor="assembly">Version ID :</label>
                                    </Col>
                                    <Col md={14} xs={12}>
                                        {/* <Form.Item name="assembly">
                                            <Input value={'hello'} />
                                        </Form.Item> */}
                                        <label>NT-PT0111</label>

                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} xl={8} >
                                <Row align="top" gutter={25}>
                                    <Col md={8} xs={12} >
                                        <label htmlFor='design'>Status :</label>
                                    </Col>
                                    <Col md={16} xs={12}>
                                        {/* <Form.Item name="design">
                                            <Input />
                                        </Form.Item> */}
                                        <Select size="small" style={{ width: '100%' }} >
                                            <Select.Option value="1">Design</Select.Option>
                                            <Select.Option value="2">Manufacture</Select.Option>
                                            <Select.Option value="3">Testing</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* <Row align="middle" gutter={25}>
                           
                        </Row> */}

                    </Form>
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

ProtoTypeHeader.propTypes = {
    title: propTypes.string
}
export default ProtoTypeHeader;
