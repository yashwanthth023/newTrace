/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input, Select, Upload, message } from 'antd';
import { Link } from 'react-router-dom';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import DateForm from './components/dateForm';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';

const { Option } = Select;
const { TextArea } = Input;
function Design() {
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
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <Row className='top_form_card'>
                        <div className='top_form_card_left'>
                            <label className='top_form_card_left_key'>Prototype Name :</label>
                            <label className='top_form_card_left_value'>NT098-PT</label>
                        </div>
                        <Form className='top_form_card_right'>
                            <div className='top_form_card_right_version'>
                                <label className='top_form_card_right_version_key'>Version ID :</label>
                                <label className='top_form_card_right_version_value'>NT098-V1 </label>
                            </div>
                            <div className='top_form_card_right_dropdown'>
                                <label className='top_form_card_right_dropdown_label'>Status :</label>
                                <Select value={'1'} size="small" className='top_form_card_right_dropdown_select' >
                                    <Option value="5">Planned</Option>
                                    <Option value="1">Design</Option>
                                    <Option value="2">Manufacturing</Option>
                                    <Option value="3">Testing</Option>
                                    <Option value="4">Archived</Option>
                                </Select>
                            </div>
                        </Form>
                    </Row>
                    <br />

                    <Form >
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="name">Name</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="name">
                                    <Input placeholder="Duran Clayton" />
                                </Form.Item>
                            </Col>
                            <Col md={6} xs={24}>
                                <label htmlFor="description">Description</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="description">
                                    <TextArea placeholder="write something." />
                                </Form.Item>
                            </Col>
                            <Col md={6} xs={24}>
                                <label htmlFor="remarks">Remarks</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="remarks">
                                    <TextArea placeholder="write remarks." />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>


                    <Row gutter={25}>
                        <Col lg={12} xs={24}>
                            <DateForm title="Projected Date" />
                        </Col>
                        <Col lg={12} xs={24}>
                            <DateForm title="Actual Date" />
                        </Col>
                    </Row>

                    <Form name="input-form" layout="horizontal">
                        <Row gutter={25}>
                            <Col xl={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="electrode-symmetry">Electrode Symmetry</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="electrode-symmetry">
                                            <Select size="small" style={{ width: "100%" }}>
                                                <Option value="1">Symmetrical</Option>
                                                <Option value="2">Asymmetrical</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Moc</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="Electrode Moc" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">EC Anode Details</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="sdfa-sdsa-sdsa-adsa" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">EC Cathode Details</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="sdfa-sdsa-sdsa-adsa" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>

                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Structure</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="Electrode Structure" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Shape</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Select size="small" style={{ width: "100%" }}>
                                                <Option value="1">Rectangular</Option>
                                                <Option value="2">Circular</Option>
                                                <Option value="2">Others</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Thickness</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="2mm" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Length</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="20m" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>

                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Breadth</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="10m" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Diameter</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="50cm" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Area</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="5m.sq" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Electrode Gap</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="5cm" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={25}>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Number of Cells</label>
                                    </Col>
                                    <Col md={14} xs={24}>
                                        <Form.Item name="moc">
                                            <Input placeholder="10" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} lg={12} md={24}>
                                <Row align="middle">
                                    <Col md={10} xs={24}>
                                        <label htmlFor="moc">Uploads</label>
                                    </Col>
                                    <Col md={14} xs={24}>
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
                            </Col>
                        </Row>
                    </Form>
                    <br />
                    <Form name="sDash_upload" layout="vertical">

                        <br />
                        <Row align="middle">
                            <Col md={6} xs={24}>
                                <label htmlFor="moc">Integrity Test</label>
                            </Col>
                            <Col md={18} xs={24}>
                                <Form.Item name="moc">
                                    <TextArea placeholder="write something." />
                                </Form.Item>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row align="middle">
                            <Col md={24} align='right'>
                                <Button size='default' type='primary' style={{ marginRight: 5 }}>
                                    save
                                </Button>
                                <Button size='default' type='light'>
                                    cancel
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Cards>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Design;
