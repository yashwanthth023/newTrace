import React, { useState } from 'react';
import { Row, Col, Table, Collapse, Form, Select, Input, Upload, message, Button as Button2 } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
// import { Label } from 'recharts';
import { ProjectCard } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import CreateElectrochem from '../ProjectModal/CreateElectrochem';

const ElectrochemPage = () => {
  const { Option } = Select;
  const { Panel } = Collapse;
  const { TextArea } = Input;

  const [visible, setVisible] = useState(false);

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

    // notData.push({AtributeName: name,
    // Value : value});
    // setState2({
    //     ...state,
    //     notData: notData,
    //   });
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
    //  console.log("-----------------------",notData);
  };

  //-------------------------------------------------------------------------------------------------------------
  const onCancel = () => {
    setVisible(false);
    console.log('canclel');
  };
  const onSubmit = () => {
    console.log('submit');
    onCancel();
  };

  const handleEdit = (record) => {
    // For demonstration: Simply alert the ID of the item to edit
    // In a real app, you might open a modal with the item's data here
    console.log(`Editing item ${record.id}`);
    setShowOption(true);
  };
  

  const dataSource = [
    {
      id: 'EC1', 
      name: 'ElectroChem1',
      remarks: 'remarks',
      created_on: '23/08/2002',
      created_by: 'Yashwanth',
      render: (_, record) => (
        <Button onClick={() => handleEdit(record)} type="primary">
          Edit
        </Button>
      ),
      
    },
    {
      id: 'EC2',
      name: 'ElectroChem2',
      remarks: 'remarks',
      created_on: '23/08/2002',
      created_by: 'Yashwanth',
      render: (_, record) => (
        <Button onClick={() => handleEdit(record)} type="primary">
          Edit
        </Button>
      ),
    },
    {
      id: 'EC3',
      name: 'ElectroChem3',
      remarks: 'remarks',
      created_on: '23/08/2002',
      created_by: 'Yashwanth',
      render: (_, record) => (
        <Button onClick={() => handleEdit(record)} type="primary">
          Edit
        </Button>
      ),
    },
    // {
    //   id: 'EC4',
    //   name: 'ElectroChem4',
    //   remarks: 'remarks',
    //   created_on: '23/08/2002',
    //   created_by: 'Yashwanth',
    //   render: (_, record) => (
    //     <Button onClick={() => handleEdit(record)} type="primary">
    //       Edit
    //     </Button>
    //   ),
    // },
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
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
        key: 'action',
        render: (_, record) => (
          <Button onClick={() => handleEdit(record)} type="primary">
            Edit
          </Button>
        ),
      }
  ];
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
          <div style={{ display: 'flex', margin: '5px', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={() => setShowOption(false)}>
              close
            </Button>
          </div>
          <Collapse defaultActiveKey={['1']} accordion>
            <Panel header="General" key="1">
              {/* <Col xl={12} md={24}> */}
              <Cards headless>
                <Form>
                  <Row align="middle" gutter={25}>
                    <Col lg={12} sm={24}>
                      <Row gutter={25} align="middle">
                        <Col md={8} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">Application</label>
                        </Col>
                        <Col md={16} xs={24}>
                          <Select size="small" style={{ width: '100%' }}>
                            <Option value="1">Anode</Option>
                            <Option value="2">Cathode</Option>
                            <Option value="3">Both</Option>
                          </Select>
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={3} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">%</label>
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
                          <Select size="small" style={{ width: '100%' }}>
                            <Option value="1">Solid</Option>
                            <Option value="2">Mesh</Option>
                            <Option value="2">Felt</Option>
                            <Option value="2">Foam</Option>
                            <Option value="2">Other</Option>
                          </Select>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={12} sm={24}>
                      <Row gutter={25} align="middle">
                        <Col md={8} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">Electrode Pore Dia Max</label>
                        </Col>
                        <Col md={13} xs={24}>
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={3} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">um</label>
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
                          <label htmlFor="electrode-symmetry">Electrode Structure</label>
                        </Col>
                        <Col md={16} xs={24}>
                          <Select size="small" style={{ width: '100%' }}>
                            <Option value="1">Solid</Option>
                            <Option value="2">Mesh</Option>
                            <Option value="2">Felt</Option>
                            <Option value="2">Foam</Option>
                            <Option value="2">Other</Option>
                          </Select>
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={3} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">x10^-12 m^2</label>
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
                          <Input placeholder="Value" value="" />
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={3} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">m^2/g</label>
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
                </Form>
              </Cards>
              
              {/* <div className="project-timing">
              <div>
              <span>Created on</span>
              <strong>26 Dec 2019</strong>
            </div>
            <div>
              <span>Created By</span>
              <strong>Yashwanth</strong>
            </div>
          </div>
          <div className="project-timing">
              <div>
              <span>Modified on</span>
              <strong>26 Dec 2019</strong>
            </div>
            <div>
              <span>Modified By</span>
              <strong>Yashwanth</strong>
            </div>
          </div> */}
              {/* </Col> */}
              <Cards headless>
                <Row gutter={25} align="middle">
                  <Col md={4} xs={24}>
                    {/* eslint-disable-next-line */}
                    <label htmlFor="electrode-symmetry">Remarks</label>
                  </Col>
                  <Col md={20} xs={24}>
                    <TextArea placeholder="Value" value="" />
                  </Col>
                </Row>
              </Cards>
            </Panel>
            <Panel header="Catalyst" key="2">
              <Cards headless>
                <Form>
                  <Row align="middle" gutter={25}>
                    <Col lg={12} sm={24}>
                      <Row gutter={25} align="middle">
                        <Col md={8} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">Plating Temperature</label>
                        </Col>
                        <Col md={14} xs={24}>
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">degC</label>
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">nm</label>
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
                          <Input placeholder="Value" value="" />
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">pH</label>
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
                          <Input placeholder="Value" value="" />
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">hr</label>
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">min</label>
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">ASD</label>
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
                          <Input placeholder="Value" value="" />
                        </Col>
                        <Col md={2} xs={24}>
                          {/* eslint-disable-next-line */}
                          <label htmlFor="electrode-symmetry">V</label>
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
                </Form>
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
          <div style={{ display: 'flex',flexDirection :'row', margin: '5px', alignItems: 'flex-end', justifyContent: 'flex-end',gap :"10px" }}>
            <Button type="primary" onClick={() => setShowOption(false)}>
              save
            </Button>
            <Button size="default" type="light" key="back" onClick={() => setShowOption(false)}>
              cancel
            </Button>
          </div>
          <br />
        </Cards>
      </div>
    </div>
    </ProjectCard>
  );
};

export default ElectrochemPage;
