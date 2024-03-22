/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, DatePicker, Input } from 'antd';
import propTypes from 'prop-types';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Cards } from '../../cards/frame/cards-frame';

function Manufacture({ title }) {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards title={title} headStyle={{ textAlign: 'center' }}>
                    <Form name="input-form" layout="horizontal">

                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">PO Number</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Date</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Vender</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Docment_PO</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

Manufacture.propTypes = {
    title: propTypes.string
}
export default Manufacture;
