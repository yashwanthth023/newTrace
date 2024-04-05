import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Collapse, Form, Select, Input, Upload, message, Button as Button2 } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
// import { Label } from 'recharts';
import { ProjectCard } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import CreateElectrochem from '../ProjectModal/CreateElectrochem';
import { HorizontalFormStyleWrap } from '../../components/tabs/style/formStyle';
import { BasicFormWrapper } from '../../components/tabs/style/wrapperStyle';
import { addEcDetailsAPI, fetchEcDetailsAPI, updateEcDetailsAPI } from '../../api/api';
// import { SessionStorage } from '../../util/SessionStorage';

const ElectrochemPage = () => {
  const [ecDetails, setEcDetails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [ec, setEc] = useState({});
  const { Option } = Select;
  const { Panel } = Collapse;
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    const response = await fetchEcDetailsAPI();
    setEcDetails(response);
    console.log(ecDetails)
  }

  useEffect(() => { fetchData() }, [ec])

  useEffect(() => {
    if (isEdit) {
      if (Object.keys(ec).length !== 0) {
        form.setFieldsValue({
          electroChemId: ec?.electroChemId,
          description: ec?.description,
          electrodeStructure: ec?.electrodeStructure,
          application: ec?.application,
          electrodePorosity: ec?.electrodePorosity,
          maxPoreDiameter: ec?.maxPoreDiameter,
          remarks: ec?.remarks,
          electrodeSurfaceArea: ec?.electrodeSurfaceArea,
          electrodeMechanicalParams: ec?.electrodeMechanicalParams,
          electrodePermeability: ec?.electrodePermeability,
          electrodeSubstrate: ec?.electrodeSubstrate,
          cellActivity: ec?.cellActivity,
          density: ec?.density,
          time: ec?.time,
          solutionBathLife: ec?.solutionBathLife,
          solution: ec?.solution,
          pH: ec?.pH,
          composition: ec?.composition,
          thickness: ec?.thickness,
          temperature: ec?.temperature,
        });
      }
    }
  }, [isEdit, ec])

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

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [show, SetShow] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const dataSource2 = [
    {
      AtributeName: 'EC1',
      Value: '20',
    },
    {
      AtributeName: 'EC2',
      Value: '10',
    },
  ];

  const [state2, setState2] = useState({
    notData: dataSource2,
  });

  const { notData } = state2;

  const AddAtribute = () => {
    console.log('calling');
    if (name !== '' && value !== '') {
      const updatedData = [...notData, { AtributeName: name, Value: value }];
      setState2({
        ...state2,
        notData: updatedData,
      });
    }
    setName('');
    setValue('');
    SetShow(false);
  };

  const deleteRow = (i) => {
    console.log(i);
    const updatedData = notData.filter((word, index) => index !== i);
    setState2({
      ...state2,
      notData: updatedData,
    });
  };

  const onCancel = () => {
    setVisible(false);
    console.log('cancel');
  };
  const onSubmit = () => {
    console.log('submit');
    onCancel();
  };

  const handleEdit = (record) => {
    setEc(record);
    setIsEdit(true);
    setShowOption(true);
  };


  const dataSource = ecDetails.map((ec, i) => ({
    slNo: i + 1,
    id: ec.electroChemId,
    created_on: new Date(ec?.createdOn).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    created_by: 'Gowtham',
    button:
      <Button type="warning" size="small2" onClick={() => handleEdit(ec)}>
        Edit
      </Button>

  }));

  const columns = [
    {
      title: 'SL NO',
      dataIndex: 'slNo',
      key: 'slNo',
    },
    {
      title: 'ElectroChem ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Created On',
      dataIndex: 'created_on',
      key: 'created_on',
    },
    {
      title: 'Created By',
      dataIndex: 'created_by',
      key: 'created_by',
    },
    {
      title: 'Action',
      dataIndex: 'button',
      key: 'button',

    }
  ];

  const handleSubmit = async () => {
    const formData = await form.validateFields();
    const response = isEdit ? await updateEcDetailsAPI({ id: ec.id, ...formData }) : await addEcDetailsAPI(formData);
    if (response) {
      setEcDetails((ecDetail) => {
        if (isEdit) {
          return [...ecDetail.filter((detail) => ec.id !== detail.id), response]
        }
        return [...ecDetail, response];
      });
      setShowOption(false);
      form.resetFields();
      setIsEdit(false);
    }
  }

  return (
    <ProjectCard>
      <div>
        <div style={{ display: showOption ? 'none' : 'flex' }}>
          <Cards headless>
            <Row align="right" gutter={25}>
              <Col align="right" lg={24}>
                <Button type="primary" onClick={() => setShowOption(true)}>
                  <FeatherIcon icon="plus" size={3} />
                  Add EC Details
                </Button>
              </Col>
            </Row>
            {/* <ExperimentModal visible={showModal} onCancel={() => setShowModal(false)} /> */}
            <br />
            <Row align="middle" gutter={25}>
              <Col lg={24}>
                <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
              </Col>
            </Row>
          </Cards>
          <CreateElectrochem onCancel={onCancel} onSubmit={onSubmit} visible={visible} />
        </div>

        <div style={{ display: showOption ? 'flex' : 'none' }}>
          <Cards title="Add EC Details">
            <Form form={form} onFinish={handleSubmit}>

              <div style={{ display: 'flex', margin: '5px', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Button type="primary" onClick={() => { setShowOption(false); form.resetFields(); setIsEdit(false) }}>
                  close
                </Button>
              </div>
              <BasicFormWrapper>
                <HorizontalFormStyleWrap className="sDash_input-form">
                  <Collapse defaultActiveKey={['1']} >
                    <Panel header="General" key="1">
                      {/* <Col xl={12} md={24}> */}
                      <Cards headless>
                        {/* <Form> */}
                        <Row gutter={25} align="middle">
                          <Col lg={12} xs={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">ElectroChem ID</label>
                              </Col>
                              <Col md={16} xs={24} >
                                <Form.Item name="electroChemId" rules={[
                                  { required: true, message: 'ElectroChem ID required!' },
                                  { whitespace: true, message: 'ElectroChem ID cannot be empty space!' },
                                  { max: 100, message: 'ElectroChem ID cannot exceed 50 characters!' }
                                ]}>
                                  <Input placeholder="Enter EC Chem ID" />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} xs={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Description</label>
                              </Col>
                              <Col md={16} xs={24}>
                                <Form.Item name="description" rules={[
                                  { required: true, message: 'Description required!' },
                                  { whitespace: true, message: 'Description cannot be empty space!' }]}>
                                  <TextArea placeholder="Value" />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>

                        </Row>
                        <Row align="middle" gutter={25}>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Application</label>
                              </Col>
                              <Col md={16} xs={24}>
                                <Form.Item name='application' rules={[
                                  { required: true, message: 'Application required!' },
                                  { whitespace: true, message: 'Application cannot be empty space!' },]}>
                                  <Select size="small" style={{ width: '100%' }}>
                                    <Option value="Anode">Anode</Option>
                                    <Option value="Cathode">Cathode</Option>
                                    <Option value="Both">Both</Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Electrode Porosity</label>
                              </Col>
                              <Col md={13} xs={24}>
                                <Form.Item name='electrodePorosity' rules={[
                                  { required: true, message: 'Electrode Porosity required!' },
                                  { whitespace: true, message: 'Electrode Porosity cannot be empty space!' }]}>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={3} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">%</label>
                              </Col>
                            </Row>
                          </Col>
                          <br />
                          <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Electrode Structure</label>
                              </Col>
                              <Col md={16} xs={24}>
                                <Form.Item name='electrodeStructure' rules={[
                                  { required: true, message: 'Electrode Structure required!' },
                                  { whitespace: true, message: 'Electrode Structure cannot be empty space!' }]}>
                                  <Select size="small" style={{ width: '100%' }}>
                                    <Option value="Solid">Solid</Option>
                                    <Option value="Mesh">Mesh</Option>
                                    <Option value="Felt">Felt</Option>
                                    <Option value="Foam">Foam</Option>
                                    <Option value="Other">Other</Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Maximum Electrode Pore Diameter</label>
                              </Col>
                              <Col md={13} xs={24}>
                                <Form.Item name='maxPoreDiameter' >
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={3} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">&mu;m</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Electrode Substrate</label>
                              </Col>
                              <Col md={16} xs={24}>
                                <Form.Item name='electrodeSubstrate'>
                                  <Select size="small" style={{ width: '100%' }}>
                                    <Option value="A">A</Option>
                                    <Option value="B">B</Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Electrode Permeability</label>
                              </Col>
                              <Col md={13} xs={24}>
                                <Form.Item name='electrodePermeability'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={3} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">x10<sup>-12</sup> m<sup>2</sup></label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Electrode Mechanical Params</label>
                              </Col>
                              <Col md={16} xs={24}>
                                <Form.Item name='electrodeMechanicalParams'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Electrode Surface Area BET</label>
                              </Col>
                              <Col md={13} xs={24}>
                                <Form.Item name='electrodeSurfaceArea'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={3} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">m<sup>2</sup>/g</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                        </Row>
                        <br />
                        <Row align="middle" gutter={25}>
                          <Col xl={24} lg={24} md={24}>
                            <Row gutter={25} align="middle">
                              <Col md={4} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="moc">Specifications</label>
                              </Col>
                              <Col md={20} xs={24}>
                                {/* <Form.Item name="moc"> */}
                                <Upload className="sDash_upload-basic" {...props}>
                                  <span className="sDash_upload-text">Select File</span>
                                  <Link to="#" className="sDash_upload-browse">
                                    Browse
                                  </Link>
                                </Upload>
                                {/* </Form.Item> */}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        {/* </Form> */}
                      </Cards>
                      <Cards headless>
                        <Row gutter={25} align="middle">
                          <Col md={4} xs={24}>
                            {/* eslint-disable-next-line */}
                            <label htmlFor="electrode-symmetry">Remarks</label>
                          </Col>
                          <Col md={20} xs={24}>
                            <Form.Item name='remarks'>
                              <TextArea placeholder="Value" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Cards>
                    </Panel>
                    <Panel header="Catalyst" key="2">
                      <Cards headless>
                        {/* <Form> */}
                        <Row align="middle" gutter={25}>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating Temperature</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='temperature'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24} style={{ marginLeft: '-10px !important' }}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">&deg;C</label>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating Thickness</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='thickness'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">nm</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating Composition</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='composition'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating PH</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='pH'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">pH</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating Solution</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='solution'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating Solution Bath Life</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='solutionBathLife'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">hr</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Plating Time</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='time'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">min</label>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Current Density</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='density'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">ASD</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                          <Col lg={12} sm={24}>
                            <Row gutter={25} align="middle">
                              <Col md={8} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="electrode-symmetry">Average Half Cell Activity</label>
                              </Col>
                              <Col md={14} xs={24}>
                                <Form.Item name='cellActivity'>
                                  <Input placeholder="Value" />
                                </Form.Item>
                              </Col>
                              <Col md={2} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label className='units' htmlFor="electrode-symmetry">V</label>
                              </Col>
                            </Row>
                          </Col>
                          <br /> <br />
                          <br />
                          <br />
                        </Row>

                        <Row align="middle" gutter={25}>
                          <Col xl={24} lg={24} md={24}>
                            <Row gutter={25} align="middle">
                              <Col md={4} xs={24}>
                                {/* eslint-disable-next-line */}
                                <label htmlFor="moc">Plating Profile</label>
                              </Col>
                              <Col md={20} xs={24}>
                                {/* <Form.Item name="moc"> */}
                                <Upload className="sDash_upload-basic" {...props}>
                                  <span className="sDash_upload-text">Select File</span>
                                  <Link to="#" className="sDash_upload-browse">
                                    Browse
                                  </Link>
                                </Upload>
                                {/* </Form.Item> */}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        {/* </Form> */}
                      </Cards>
                    </Panel>
                    <Panel header="Others" key="3">
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="primary" onClick={() => SetShow((val) => !val)}>
                          Add
                        </Button>
                      </div>
                      <table style={{ width: '100%' }}>
                        <thead>
                          <tr style={{ padding: '20px', textAlign: 'left' }}>
                            <th>Attributes</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {notData.map((ele, index) => (
                              <tr key={index} style={{ padding: '15px', textAlign: 'left' }}>
                                <td>{ele.AtributeName}</td>
                                <td>{ele.Value}</td>
                                {/* <td> */}
                                <Button2 onClick={() => deleteRow(index)}>
                                  <FeatherIcon size={16} icon="trash-2" />
                                </Button2>
                              </tr>
                            ))}
                          </>
                        </tbody>
                      </table>
                      <div>
                        <div
                          style={{
                            display: show ? 'flex' : 'none',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Input placeholder="Atribute Name" value={name} onChange={(event) => setName(event.target.value)} />
                          <Input placeholder="Value" value={value} onChange={(event) => setValue(event.target.value)} />
                          <Button size="small2" type="primary" key="submit" onClick={AddAtribute}>
                            Save
                          </Button>
                        </div>
                      </div>

                    </Panel>
                  </Collapse>
                </HorizontalFormStyleWrap>
              </BasicFormWrapper>

              <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', alignItems: 'flex-end', justifyContent: 'flex-end', gap: "10px" }}>
                <Button type="primary" htmlType='submit'>
                  save
                </Button>
                <Button size="default" type="light" key="back" onClick={() => { setShowOption(false); form.resetFields(); setIsEdit(false); }}>
                  cancel
                </Button>
              </div>
              <br />
            </Form>
          </Cards>
        </div>
      </div>
    </ProjectCard>
  );
};

export default ElectrochemPage;
