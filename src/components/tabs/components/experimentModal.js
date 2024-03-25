import React from 'react';
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
                        Save
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
                                <label htmlFor="input-date">Experiment Name</label>
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
                                        <Option value="1">Flow Test</Option>
                                        <Option value="2">VI Characteristics</Option>
                                        <Option value="3">Purity</Option>
                                        <Option value="4">Others</Option>
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
                                        <Option value="1">Pass</Option>
                                        <Option value="2">Fail</Option>

                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="Hypothesis">Objective / Hypothesis</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="Hypothesis">
                                    <Input.TextArea />
                                </Form.Item>
                            </Col>
                        </Row>
                        <br />
                        <Row align="middle">
                            <Col xl={12} lg={12} md={24}>
                                <Col md={6} xs={24}>
                                    <label htmlFor="start-date">Start Date</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="start-date">
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    <label htmlFor="start-time">Start Time</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="start-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                        <TimePicker />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>
                        <br />

                        <Row align="middle">
                            <Col xl={12} lg={12} md={24} >
                                <Col md={24} xs={24}>
                                    <label htmlFor="end-date">End Date</label>
                                </Col>
                                <Col md={24} xs={24}>
                                    <Form.Item name="end-date">
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col md={6} xs={24}>
                                    <label htmlFor="end-time">End Time</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="end-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                        <TimePicker />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>
                        <br />

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
                                <label htmlFor="input-date">Temperature</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-date">
                                    <Input placeholder='Eg. 60 degree Celsius' />
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
