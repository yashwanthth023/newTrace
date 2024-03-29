/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input } from 'antd';
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
