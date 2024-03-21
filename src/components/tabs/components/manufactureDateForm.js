/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { HorizontalFormStyleWrap } from '../style/formStyle';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Cards } from '../../cards/frame/cards-frame';

function ManufactureDateForm({ title }) {
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards title={title} headStyle={{ textAlign: 'center' }}>
                    <Form name="date-form" layout="horizontal">

                        <Row align="middle">
                            <Col md={10} xs={24}>
                                <label htmlFor='design'>RFQ</label>
                            </Col>
                            <Col md={14} xs={24}>
                                <Form.Item name="design">
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={10} xs={24}>
                                <label htmlFor="assembly">PO</label>
                            </Col>
                            <Col md={14} xs={24}>
                                <Form.Item name="assembly">
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={10} xs={24}>
                                <label htmlFor="test">Ready For Assembly</label>
                            </Col>
                            <Col md={14} xs={24}>
                                <Form.Item name="test">
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

ManufactureDateForm.propTypes = {
    title: propTypes.string
}
export default ManufactureDateForm;
