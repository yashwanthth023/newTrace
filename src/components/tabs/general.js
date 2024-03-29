import React from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import DateForm from './components/dateForm';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';

const { TextArea } = Input;
function General() {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Row gutter={25}>
                    <Col xl={12} lg={12}>
                        {/* <Col xl={24} >
                            <Row align="middle" gutter={25}>
                                <Col md={10} xs={12} xl={6}>
                                        <label htmlFor='design'>Prototype :</label>
                                    </Col>
                                <Col md={24} xs={12}>
                                    <label style={{ fontSize: 18 }}>Lead Acid Fast Charge, NT-PT0111</label>
                                </Col>
                            </Row>
                        </Col> */}
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
                                {/* eslint-disable-next-line */}
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
                <Row style={{ border: '1px solid #f3eaec', borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 20 }} >
                    <Cards title='Prototype Details' headStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        <Form >
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
                                {/* <Col md={6} xs={24}>
                                <label htmlFor="remarks">Remarks</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="remarks">
                                    <TextArea placeholder="write remarks." />
                                </Form.Item>
                            </Col> */}
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