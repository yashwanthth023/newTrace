import React, { useState, useEffect } from 'react';
import { Form, Input, Col, Row } from 'antd';
import propTypes from 'prop-types';
import { BasicFormWrapper } from '../style/wrapperStyle';
import { Modal } from '../../modals/antd-modals';

import { Button } from '../../buttons/buttons';
import { Cards } from '../../cards/frame/cards-frame';

function ViewElectroChem({ visible, onCancel }) {
  const [form] = Form.useForm();

  // const [name, setName] = useState('');
  // const [value, setValue] = useState('');
  // const [show, SetShow] = useState(false);

  // const dataSource = [
  //   {
  //     AtributeName: 'EC1',
  //     Value: 'ElectroChem1',
  //   },
  //   {
  //     AtributeName: 'EC2',
  //     Value: 'ElectroChem2',
  //   },
  //   {
  //     AtributeName: 'EC3',
  //     Value: 'ElectroChem3',
  //   },
  //   {
  //     AtributeName: 'EC4',
  //     Value: 'ElectroChem4',
  //   },
  // ];
  // const [state2, setState2] = useState({
  //   notData: dataSource,
  // });

  // const { notData } = state2;
  // useEffect(() => { }, [name]);
  const [state, setState] = useState({
    visible,
    modalType: 'primary',
    checked: [],
  });


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

  const handleOk = () => {
    // Access the form values here
    // console.log(show, values)
  };

  const handleCancel = () => {
    onCancel();
  };

  // const AddAtribute = () => {
  //   console.log('calling');
  //   if (name != '' && value != '') {
  //     const updatedData = [...notData, { AtributeName: name, Value: value }];
  //     setState2({
  //       ...state2,
  //       notData: updatedData,
  //     });
  //   }


  //   setName('');
  //   setValue('');
  //   SetShow(false);
  // };

  return (
    <Modal
      type={state.modalType}
      title="Electrochem Details"
      visible={state.visible}
      className='atbd-modal2'
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="light" key="back" outlined onClick={handleCancel}>
            close
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="createProject" onFinish={handleOk}>
            {/* <Form.Item name="project" label="ElectroChem Id">
            </Form.Item>
            <Input disabled placeholder="Atribute Name" value={'EC5'} style={{ marginTop: '-40px', marginBottom: '20px' }} /> */}

            <Form.Item name="EC Name" label="EC Name">
              <Input disabled placeholder="Name" />
            </Form.Item>
            <Cards headless>

              <Row align="middle" gutter={25}>
                <Col lg={24}>
                  <table style={{ width: '100%' }}>
                    <thead>
                      <tr style={{ padding: '20px', textAlign: 'left' }}>
                        <th>Attributes</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <>
                        {notData.map((ele, index) => (
                          <tr key={index} style={{ padding: '15px', textAlign: 'left' }}>
                            <td>{ele.AtributeName}</td>
                            <td>{ele.Value}</td>
                          </tr>
                        ))}
                      </> */}
                      <tr style={{ padding: '15px', textAlign: 'left' }}>
                        <td>Atribute 1</td>
                        <td>Value 1</td>
                      </tr>
                      <tr style={{ padding: '15px', textAlign: 'left' }}>
                        <td>Atribute 2</td>
                        <td>Value 2</td>
                      </tr>
                      <tr style={{ padding: '15px', textAlign: 'left' }}>
                        <td>Atribute 3</td>
                        <td>Value 3</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>


            </Cards>
            <Form.Item name="Remarks" label="Remarks">
              <Input.TextArea disabled rows={3} placeholder="Remarks" />
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

ViewElectroChem.propTypes = {
  visible: propTypes.bool,
  onCancel: propTypes.func.isRequired,
};

export default ViewElectroChem;
