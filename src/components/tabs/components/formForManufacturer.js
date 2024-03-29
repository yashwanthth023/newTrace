/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, DatePicker, Input, Upload, Select } from 'antd';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Cards } from '../../cards/frame/cards-frame';

const { Option } = Select;
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
                                    <DatePicker placeholder="date" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Vender</label>
                            </Col>
                            <Col md={18} xs={24}>
                                {/* <Form.Item name="input-date"> */}
                                <Form.Item name="electrode-symmetry">
                                    <Select size="small" style={{ width: "100%" }}>
                                        <Option value="1">cfg</Option>
                                        <Option value="2">dfd</Option>
                                    </Select>
                                </Form.Item>
                                {/* </Form.Item> */}
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">PO Document</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Upload className="sDash_upload-basic">
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
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

Manufacture.propTypes = {
    title: propTypes.string
}
export default Manufacture;
