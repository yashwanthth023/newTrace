import React, { useEffect } from 'react';
import { Form, Input, Select, Col, Row, DatePicker, TimePicker, Upload} from 'antd';
import propTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Modal } from '../../modals/antd-modals';
import { Button } from '../../buttons/buttons';
import { addExperimentAPI, getExperimentById, updateExperimentById } from '../../../api/api';

const { Option } = Select;

function ExperimentModal({ visible, onCancel , id }) {
    const [form] = Form.useForm();
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

    const addInitialValues = async ()=>
    {
        if(id)
        {
            const formDetails =await getExperimentById({id});
            
            form.setFieldsValue({
                H2AbsoluteImpurityPercentage: formDetails.H2AbsoluteImpurityPercentage,
                H2AbsolutePercentage: formDetails.H2AbsolutePercentage ,
                Hypothesis: formDetails.Hypothesis ? formDetails.Hypothesis : undefined,
                O2AbsolutePercentage: formDetails.O2AbsolutePercentage ,
                O2AbsoluteImpurityPercentage : formDetails.O2AbsoluteImpurityPercentage ,
                conclusion: formDetails.conclusion ,
                electrolyte: formDetails.electrolyte ,
                electrolyteFlowrate: formDetails.electrolyteFlowrate ,
                experimentName: formDetails.experimentName ,
                experimentType: formDetails.experimentType ,
                gasFlowrate: formDetails.gasFlowrate ,
                maximumCurrent: formDetails.maximumCurrent ,
                maximumVoltage: formDetails.maximumVoltage ,
                remarks: formDetails.remarks ,
                status: formDetails.status,
                endDate: formDetails.endDate ? moment(formDetails.endDate) : undefined,
                startDate: formDetails.startDate ? moment(formDetails.startDate) : undefined,
            })
        }
    }



    useEffect(()=>
    {
        addInitialValues();
    })


    const handleSubmit = async()=>
    {
        console.log("called");
        try {
            const values = await form.validateFields();
            let response;
            if(id)
            {
              response =await updateExperimentById({...values,id});
            }
            else
            {
                response = await addExperimentAPI(values);
            }
            if(response)
            {
              onCancel();
            }
          } catch (errorInfo) {
            console.log('Validation Failed:', errorInfo);
          }
    }
    return (
        <Modal
            title="Add Experiment"
            visible={visible}
            footer={[
                <div key="1" className="project-modal-footer">
                    <Button size="default" type="primary" key="submit" htmlType="submit"  form="experiments">
                        Save
                    </Button>
                    <Button size="default" type="white" key="back" outlined onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            ]}
            onCancel={onCancel}
        >
            <div className="project-modal">
                <BasicFormWrapper>
                    <Form name="experiments"  form={form} onFinish={handleSubmit}>
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="experiment-name">Experiment Title</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="experimentName"
                                  rules={[{ required: true, message: 'Please enter the experiment title!' }]}
                                  >
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
                                <Form.Item name="experimentType"
                                 rules={[{ required: true, message: 'Please select the experiment type!' }]}
                                >
                                    <Select size="small" style={{ width: "100%" }} id='experiment-type'>
                                        <Option value="Flow Test">Flow Test</Option>
                                        <Option value="Characteristics">VI Characteristics</Option>
                                        <Option value="Purity">Purity</Option>
                                        <Option value="Others">Others</Option>
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
                                <Form.Item name="electrolyte"
                                 rules={[{ required: true, message: 'Please enter the electrolyte!' }]}
                                >
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
                                <Form.Item name="status"
                                rules={[{ required: true, message: 'Please select the status!' }]}
                                >
                                    <Select size="small" style={{ width: "100%" }} id='status'>
                                        <Option value="Pass">Pass</Option>
                                        <Option value="Fail">Fail</Option>

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
                                <Form.Item name="Hypothesis"
                                rules={[{ required: true, message: 'Please enter the Hypothesis!' }]}
                                >
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
                                    <Form.Item name="startDate"
                                    rules={[{ required: true, message: 'Please select the start date!' }]}
                                    >

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
                                    <Form.Item name="startTime" initialValue={moment('00:00:00', 'HH:mm:ss')}>
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
                                    <Form.Item name="endDate"
                                    rules={[{ required: true, message: 'Please select the end date!' }]}
                                    >
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
                                    <Form.Item name="endTime" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                                        <TimePicker id='end-time' />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>
                        <br />

                        <Row align="middle">
                            <Col xl={12} lg={12} md={24}>
                                <Col md={18} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-date">Electrolyte Flowrate</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="electrolyteFlowrate"
                                    rules={[{ required: true, message: 'Please enter the Electrolyte Flowrate!' },]}
                                    >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-time">Max Current</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="maximumCurrent"
                                rules={[{ required: true, message: 'Please enter the maximum current!' }]}
                                >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col xl={12} lg={12} md={24}>
                                <Col md={18} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-date">Max Voltage</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="maximumVoltage"
                                      rules={[{ required: true, message: 'Please enter the maximum voltage!' }]}
                                    >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-time">Gas Flowrate</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="gasFlowrate"
                                      rules={[{ required: true, message: 'Please enter the gas flowrate!' }]}
                                    >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row> 
                        <Row align="middle">
                            <Col xl={12} lg={12} md={24}>
                                <Col md={18} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-date">H2 Absolute Percentage</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="H2AbsolutePercentage"
                                         rules={[{ required: true, message: 'Please enter the H2 Absolute Percentage!' }]}
                                    >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-time">H2 Absolute Impurity Percentage</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="H2AbsoluteImpurityPercentage"
                                  rules={[{ required: true, message: 'Please enter the H2 Absolute Impurity Percentage!' }]}
                                >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                        </Row>                 
                        <Row align="middle">
                            <Col xl={12} lg={12} md={24}>
                                <Col md={18} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-date">O<sub>2</sub> Absolute Percentage</label>
                                </Col>
                                <Col md={18} xs={24}>
                                    <Form.Item name="O2AbsolutePercentage"
                                    rules={[{ required: true, message: 'Please enter the O2 Absolute Percentage!' }]}
                                    >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor="start-time">O<sub>2</sub> Absolute Impurity Percentage</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="O2AbsoluteImpurityPercentage"
                                rules={[{ required: true, message: 'Please enter the O2 Absolute Percentage!' }]}
                                >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label >Runtime</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="Runtime"
                                >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                            </Col>

                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label >Inlet Pressure</label>
                                </Col>
                                <Col md={16} xs={22}>
                                <Form.Item name="inletPressure"
                                >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                                <Col  md={2} xs={2}>
                                    {/* eslint-disable-next-line */}
                                    <label >bar</label>
                                </Col>
                            </Col>

                            <Col xl={12} lg={12} md={24}>
                                <Col lg={24} md={6} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label >Inlet Temperature Start</label>
                                </Col>
                                <Col md={18} xs={24}>
                                <Form.Item name="inletTemperatureStart"
                                >
                                    <Input id='experiment-name' />
                                    </Form.Item>
                                </Col>
                                <Col  md={24} xs={24}>
                                    {/* eslint-disable-next-line */}
                                    <label >degc</label>
                                </Col>
                            </Col>

                        </Row>            
                            <Row align="middle">
                        <Col md={6} xs={24} xl={6}  lg={6}>
                                {/* eslint-disable-next-line */}
                            <label htmlFor="rfqDocument">Results</label>
                        </Col>
                        <Col md={18} xs={24} xl={18}  lg={18}>
                            <Form.Item name="rfqDocument">
                                <Upload className="sDash_upload-basic">
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
                                <Form.Item name="conclusion"
                                 rules={[{ required: true, message: 'Please enter the conclusion!' }]}
                                >
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
    id : propTypes.string
};

export default ExperimentModal;
