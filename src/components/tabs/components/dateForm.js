/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Cards } from '../../cards/frame/cards-frame';

function DateForm({ title, data }) {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards title={title} headStyle={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {/* <Form name="date-form" layout="horizontal"> */}

                    <Row align="middle">
                        <Col md={10} xs={24}>
                            <label htmlFor='design'>Design Completion Date</label>
                        </Col>
                        <Col md={14} xs={24}>
                            <Form.Item name={data[0]} rules={[
                                { required: data[0] === 'projectedDesignCompletionDate', message: 'Projection Design Completion Date required!' }
                            ]}>
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row align="middle">
                        <Col md={10} xs={24}>
                            <label htmlFor="assembly">Assembly Completion Date</label>
                        </Col>
                        <Col md={14} xs={24}>
                            <Form.Item name={data[1]} rules={[
                                { required: data[0] === 'projectedAssemblyCompletionDate', message: 'Projection Assembly Completion Date required!' }
                            ]}>
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row align="middle">
                        <Col md={10} xs={24}>
                            <label htmlFor="test">Test Completion Date</label>
                        </Col>
                        <Col md={14} xs={24}>
                            <Form.Item name={data[2]} rules={[
                                { required: data[0] === 'projectedTestCompletionDate', message: 'Projection Test Completion Date required!' }
                            ]}>
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* </Form> */}
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

DateForm.propTypes = {
    title: propTypes.string,
    data: propTypes.array
}
export default DateForm;
