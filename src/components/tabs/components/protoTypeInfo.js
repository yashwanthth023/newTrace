/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Select } from 'antd';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';

function ProtoTypeHeader() {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                {/* <Cards headless> */}
                <Form name="date-form" layout="horizontal">
                    <Row gutter={25}>
                        <Col xl={12} lg={12}>
                            <Col xl={24} >
                                <Row align="middle" gutter={25}>
                                    {/* <Col md={10} xs={12} xl={6}>
                                        <label htmlFor='design'>Prototype :</label>
                                    </Col> */}
                                    <Col md={24} xs={12}>
                                        <label style={{ fontSize: 18 }}>Lead Acid Fast Charge, NT-PT0111</label>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col xl={24} >
                                <Row align="middle" gutter={25}>
                                    <Col md={10} xs={12} xl={6}>
                                        <label htmlFor='design'>Version :</label>
                                    </Col>
                                    <Col md={14} xs={12}>
                                        <label>NT-PT0111</label>
                                    </Col>
                                </Row>
                            </Col> */}
                        </Col>
                        <Col lg={12} xl={12}>
                            <Row align="middle" gutter={25} justify='end' >
                                <Col md={8} xs={12} xl={6} lg={6} align='right'>
                                    <label htmlFor='design'>Status :</label>
                                </Col>
                                <Col md={16} xs={12} xl={10}>
                                    <Form.Item name="name">
                                        <Select size="small" style={{ width: '100%' }} dropdownAlign='center' dropdownStyle={{ justifySelf: 'flex-start' }} >
                                            <Select.Option value="1">Design</Select.Option>
                                            <Select.Option value="2">Planning</Select.Option>
                                            <Select.Option value="3">Manufacture</Select.Option>
                                            <Select.Option value="4">Testing</Select.Option>
                                            <Select.Option value="5">Archived</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
                {/* </Cards> */}
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default ProtoTypeHeader;
