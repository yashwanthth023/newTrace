/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Select, Input } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import ExperimentModal from './components/experimentModal';

const Option = { Select };

function Closure() {

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <Row className='top_form_card'>
                        <div className='top_form_card_left'>
                            <label className='top_form_card_left_key'>Prototype ID </label>
                            <label className='top_form_card_left_value'>NT098-PT</label>
                        </div>
                        <Form className='top_form_card_right'>
                            <div className='top_form_card_right_version'>
                                <label className='top_form_card_right_version_key'>Version </label>
                                <label className='top_form_card_right_version_value'>NT098-V1 </label>
                            </div>
                            <div className='top_form_card_right_dropdown'>
                                <label className='top_form_card_right_dropdown_label'>Status </label>
                                <Select size="small" className='top_form_card_right_dropdown_select' >
                                    <Option value="1">Design</Option>
                                    <Option value="2">Manufacture</Option>
                                    <Option value="3">Testing</Option>
                                </Select>
                            </div>
                        </Form>
                    </Row>
                </Cards>
                <Cards headless>
                    <Row align="middle">
                        <Col md={6} xs={24}>
                            <label htmlFor="input-date">Conclusion</label>
                        </Col>
                        <Col md={18} xs={24}>
                            <Form.Item name="input-date">
                                <Input.TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Cards>
                <Row align="middle">
                    <Col md={24} align='right'>
                        <Button size='default' type='primary' style={{ marginRight: 5 }}>
                            save
                        </Button>

                    </Col>
                </Row>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Closure;
