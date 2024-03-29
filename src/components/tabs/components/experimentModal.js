import React from 'react';
import { Form, Input, Select, Col, Row, DatePicker, TimePicker} from 'antd';
import propTypes from 'prop-types';
import moment from 'moment';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Modal } from '../../modals/antd-modals';
import { Button } from '../../buttons/buttons';

const { Option } = Select;

function ExperimentModal({ visible, onCancel, onSubmit }) {
    // const props = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //         authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             // console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };
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
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Experiment Title</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="experiment-name">
                                    <Input id='experiment-name' />
                                </Form.Item>
                            </Col>
                        </Row>
                       
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-type">Experiment Type</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-email">
                                    <Select size="small" style={{ width: "100%" }} id='experiment-type'>
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
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Electrolyte</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="experiment-name">
                                    <Input id='experiment-name' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="status">Status</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="input-email">
                                    <Select size="small" style={{ width: "100%" }} id='status'>
                                        <Option value="1">Pass</Option>
                                        <Option value="2">Fail</Option>

                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="Hypothesis">Objective / Hypothesis</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="Hypothesis">
                                    <Input.TextArea id='Hypothesis' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <br />
                        <Row align="middle">
                            <Col xl={12} lg={12} md={24}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-date">Start Date</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="start-date">
                                        <DatePicker id='start-date' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-time">Start Time</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="start-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                        <TimePicker id='start-time' />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>
                        <br />

                        <Row align="middle">
                            <Col xl={12} lg={12} md={24} >
                                <Col md={24} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="end-date">End Date</label>
                                </Col>
                                <Col md={24} xs={24}>
                                    <Form.Item name="end-date">
                                        <DatePicker id='end-date' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="end-time">End Time</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="end-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                        <TimePicker id='end-time' />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>
                        <br />

                       
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Electrolyte Flowrate</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="experiment-name">
                                    <Input id='experiment-name' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Max Current</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="experiment-name">
                                    <Input id='experiment-name' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Max Voltage</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="experiment-name">
                                    <Input id='experiment-name' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Max Voltage</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="Max Voltage">
                                    <Input id='experiment-name' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="temperature">Gas Flowrate</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="temperature">
                                    <Input placeholder='' id='temperature' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="temperature">H2 Absolute Percentage</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="temperature">
                                    <Input placeholder='' id='temperature' />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="temperature">H2 Absolute Impurity Percentage</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="temperature">
                                    <Input placeholder='' id='temperature' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="temperature">O2 Absolute Percentage</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="temperature">
                                    <Input placeholder='' id='temperature' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="temperature">O2 Absolute Impurity Percentage</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="temperature">
                                    <Input placeholder='' id='temperature' />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="remarks">Remarks</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="remarks">
                                    <Input.TextArea id='remarks' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="conclusion">Conclusion</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="conclusion">
                                    <Input.TextArea id='conclusion' />
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
    onSubmit: propTypes.func
};

export default ExperimentModal;
