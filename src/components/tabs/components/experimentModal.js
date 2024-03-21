import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Col, Row, DatePicker, TimePicker, Upload, message } from 'antd';
import propTypes from 'prop-types';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Modal } from '../../modals/antd-modals';
import { Button } from '../../buttons/buttons';
import moment from 'moment';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const { Option } = Select;

function ExperimentModal({ visible, onCancel, onSubmit }) {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <Modal
            title="Add Experiment"
            visible={visible}
            footer={[
                <div key="1" className="project-modal-footer">
                    <Button size="default" type="primary" key="submit" onClick={onSubmit}>
                        Add Experiment
                    </Button>
                    <Button size="default" type="white" key="back" outlined onClick={onCancel}>
                        Cancel
                    </Button>
                </div>,
            ]}
            onCancel={onCancel}
        >
            <div className="project-modal">
                <BasicFormWrapper>
                    <Form name="experiments" onFinish={onSubmit}>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Experiment Title</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Experiment Type</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-email">
                                    <Select size="small" style={{ width: "100%" }}>
                                        <Option value="1">Type 1</Option>
                                        <Option value="2">Type 2</Option>
                                        <Option value="3">Type 3</Option>
                                        <Option value="4">Type 4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Status</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-email">
                                    <Select size="small" style={{ width: "100%" }}>
                                        <Option value="1">Status 1</Option>
                                        <Option value="2">Status 2</Option>
                                        <Option value="3">Status 3</Option>
                                        <Option value="4">Status 4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="Hypothesis">Obj / Hypothesis</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="Hypothesis">
                                    <Input.TextArea />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Start Date</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-time">Time Start</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                    <TimePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">End Date</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-time">Time End</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                    <TimePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Conclusion</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input.TextArea />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="moc">Flow Test</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="moc">
                                    <Upload className="sDash_upload-basic" {...props}>
                                        <span className="sDash_upload-text">Select File</span>
                                        <Link to="#" className="sDash_upload-browse">
                                            Browse
                                        </Link>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="moc">Power Up Test</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="moc">
                                    <Upload className="sDash_upload-basic" {...props}>
                                        <span className="sDash_upload-text">Select File</span>
                                        <Link to="#" className="sDash_upload-browse">
                                            Browse
                                        </Link>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="moc">Impedance Test</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="moc">
                                    <Upload className="sDash_upload-basic" {...props}>
                                        <span className="sDash_upload-text">Select File</span>
                                        <Link to="#" className="sDash_upload-browse">
                                            Browse
                                        </Link>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="moc">Purity Test</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="moc">
                                    <Upload className="sDash_upload-basic" {...props}>
                                        <span className="sDash_upload-text">Select File</span>
                                        <Link to="#" className="sDash_upload-browse">
                                            Browse
                                        </Link>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Temp_degC</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Run Time</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="input-date">Remarks</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input.TextArea />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </BasicFormWrapper>
            </div>
        </Modal>
    );
}

ExperimentModal.propTypes = {
    visible: propTypes.bool.isRequired,
    onCancel: propTypes.func.isRequired,
};

export default ExperimentModal;
