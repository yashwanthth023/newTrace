/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Cards } from '../../cards/frame/cards-frame';

function ManufactureDateForm({ title, data, isView }) {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards title={title} headStyle={{ textAlign: 'center' }}>
                    {/* <Form name="date-form" layout="horizontal"> */}

                    <Row align="middle">
                        <Col md={10} xs={24}>
                            <label htmlFor='design'>RFQ</label>
                        </Col>
                        <Col md={14} xs={24}>
                            <Form.Item name={data[0]} rules={[
                                { required: data[0] === "targetDateRFQ", message: 'RFQ Date is required!' }
                            ]}>
                                <DatePicker disabled={isView} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row align="middle">
                        <Col md={10} xs={24}>
                            <label htmlFor="assembly">PO</label>
                        </Col>
                        <Col md={14} xs={24}>
                            <Form.Item name={data[1]} rules={[
                                { required: data[1] === "targetDatePO", message: 'PO Date is required!' }
                            ]}>
                                <DatePicker disabled={isView} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row align="middle">
                        <Col md={10} xs={24}>
                            <label htmlFor="test">Ready For Assembly</label>
                        </Col>
                        <Col md={14} xs={24}>
                            <Form.Item name={data[2]} rules={[
                                { required: data[2] === "targetDateReadyForAssembly", message: 'Ready For Assembly is required!' }
                            ]}>
                                <DatePicker disabled={isView} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* </Form> */}
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

ManufactureDateForm.propTypes = {
    title: propTypes.string,
    data: propTypes.array,
    isView: propTypes.bool
}
export default ManufactureDateForm;
