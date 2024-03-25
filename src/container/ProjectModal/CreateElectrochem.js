import React, { useState, useEffect } from 'react';
import { Form, Input, Col, Row , Button as Button2  } from 'antd';
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react'
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

// const { Option } = Select;
// const dateFormat = 'MM/DD/YYYY';

function CreateElectrochem({ visible, onCancel }) {
  const [form] = Form.useForm();

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [show, SetShow] = useState(false);

  const dataSource = [
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
    notData: dataSource,
  });

  const { notData } = state2;
  useEffect(() => { }, [name]);
  const [state, setState] = useState({
    visible,
    modalType: 'primary',
    checked: [],
  });

  // const columns = [
  //   {
  //     title: 'Atribute Name',
  //     dataIndex: 'AtributeName',
  //     key: 'AtributeName',
  //   },
  //   {
  //     title: 'Value',
  //     dataIndex: 'Value',
  //     key: 'Value',
  //   },
  // ];

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  //   const handleOk = (e ) => {

  //     e.preventDefault()
  //     form.getFieldsValue((e)=>console.log(e))
  //     form.validateFields((error, values) => {
  //     console.log("called22");
  //         if (error) {
  //           console.log('error while validating')
  //         }
  //         else if (values) {
  //            console.log('name: ', values.project, 'email: ', values.description)
  //          }
  //     })
  //     // onCancel();
  //   };
  const handleOk = () => {
    // Access the form values here
  };

  const handleCancel = () => {
    onCancel();
  };

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

  // const options = [
  //   {
  //     label: 'Privet',
  //     value: 'privet',
  //   },
  //   {
  //     label: 'Team',
  //     value: 'team',
  //   },
  //   {
  //     label: 'Public',
  //     value: 'public',
  //   },
  // ];
  const deleteRow = (i) => {
    console.log(i);
    const updatedData = notData.filter((word, index) => index !== i);
    setState2({
      ...state2,
      notData: updatedData,
    });
    //  console.log("-----------------------",notData); 
  }
  // console.log('-------notdata--', notData);
  return (
    <Modal
      type={state.modalType}
      title="Create Electrochem"
      visible={state.visible}
      className='atbd-modal2'
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" onClick={handleOk}>
            save
          </Button>
          <Button size="default" type="light" key="back" outlined onClick={handleCancel}>
            Cancel
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="createProject" onFinish={handleOk}>
            {/* <Form.Item name="project" label="ElectroChem Id">
              <Input placeholder="Ec5" value= "Ec5"  style={{color :'black'}}/>
            </Form.Item> */}
            {/* <Input placeholder="Atribute Name" value={'EC5'} style={{ marginTop: '-40px', marginBottom: '20px' }} /> */}
            {/* <Form.Item name="category" initialValue="" label="">
              <Select style={{ width: '100%' }}>
                <Option value="">Project Category</Option>
                <Option value="one">Project One</Option>
                <Option value="two">Project Two</Option>
              </Select>
            </Form.Item> */}

            <Form.Item name="EC Name" label="EC Name">
              <Input placeholder="Name" />
            </Form.Item>
            <Cards headless>
              <Row align="right" gutter={25}>
                <Col align="right" lg={24}>
                  <Button type="primary" onClick={() => SetShow((val) => !val)}>
                    Add
                  </Button>
                </Col>
              </Row>
              {/* <ExperimentModal visible={showModal} onCancel={() => setShowModal(false)} /> */}
              <br />
              <Row align="middle" gutter={25}>
                <Col lg={24}>
                  {/* {notData.map((ele)=>
            <>
        <Row gutter={25}>
            <Col lg={12}>{ele.AtributeName}</Col>
            <Col lg={12}>{ele.Value}</Col>
         </Row>
        <div style={{width :'100%', height :'1px', backgroundColor :'lightgrey'}}></div>
            </>
            )
        } */}
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
                  {/* <Table className="table-responsive" pagination={false} dataSource={notData} columns={columns} /> */}
                </Col>
              </Row>
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
            </Cards>
            {/* <Form.Item name="pricacy" initialValue={['team']} label="Project Privacy">
              <CheckboxGroup options={options} />
            </Form.Item>
            <Form.Item name="members" label="Project Members">
              <Input placeholder="Search Members" />
            </Form.Item> */}
            <div className="projects-members mb-30">
              {/* <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" /> */}
            </div>
            {/* <Row gutter={15} style={{display :"flex" , flexDirection :'column'}}>
              <Col md={12}>
                <Form.Item name="Design" label="Design Completion Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item name="Assembly" label="Assembly Completion Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item name="Testing" label="Testing Completion Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
            </Row> */}
            <Form.Item name="Remarks" label="Remarks">
              <Input.TextArea rows={3} placeholder="Remarks" />
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

CreateElectrochem.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default CreateElectrochem;
