/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState ,useEffect } from 'react';
import moment from 'moment';
import { Row, Col, Table, DatePicker, Checkbox, Form, message } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import ExperimentModal from './components/experimentModal';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import { fetchAllExperiments, getVersionByIdAPI, updateVersionByIdAPI} from '../../api/api';
import { DateFormat } from '../../util/utils';
import { SessionStorage } from '../../util/SessionStorage';

function Testing() {
    const [showModal, setShowModal] = useState(false);
    const [ formDetails, setFormDetails] = useState();
    const [ records, setRecords] = useState();
    const [testingCompleted ,setTestingCompleted] = useState(false);

    const [form] = Form.useForm();
    // const [checkBoxValue ,setCheckBoxValue] = useState(false);

    const fetchData = async () => {
        const versionId = SessionStorage.getItem("versionId");
        const response = await fetchAllExperiments({versionId});
        console.log("---------------------------------");
        console.log(response);
        if (response) {
            setFormDetails(response);
            // console.log("formDetails ---------",new Date(formDetails[0]?.createdTs),);
        }

      const formDetails = await getVersionByIdAPI({id :"28c28acb-05df-4f62-aa36-ed5cadff80fb"});
      if(formDetails)
      {
        setTestingCompleted(formDetails?.MarkAsTestingComplete);
          form.setFieldsValue({
              ActualTestingCompletionDate: formDetails?.ActualTestingCompletionDate ? moment(formDetails?.ActualTestingCompletionDate) : undefined,  
        });
      }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onRowClick = (record) => {
        return {
          onClick: () => {
              setRecords(record.id);
              setShowModal(true);
            // You can do various actions here. For example, navigate to a different page or display a modal.
          },
        };
      };


    const dataSource = formDetails?.map((item, i)=>
    {
        return {
            key: i+1,
            id : item.id,
            experimentName: item.experimentName,
            experimentType: item.experimentType,
            status: item.status,
            createdTs: DateFormat(item?.createdTs),
            created_by: 'Yashwanth',
            updatedTs :DateFormat(item?.updatedTs),
            modified_by : 'Yashwanth'
        }
    })

    const columns = [
        {
            title: 'Experiment Name',
            dataIndex: 'experimentName',
            key: 'experimentName',
        },
        {
            title: 'Type',
            dataIndex: 'experimentType',
            key: 'experimentType',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Created On',
            dataIndex: 'createdTs',
            key: 'createdTs',
        },
        {
            title: 'Created By',
            dataIndex: 'created_by',
            key: 'created_by',
        },
        {
            title: 'Modified On',
            dataIndex: 'updatedTs',
            key: 'updatedTs',
        },
        {
            title: 'Modified By',
            dataIndex: 'modified_by',
            key: 'modified_by',
        }
    ];


    
    const handleDateChange = (date) => {
        if(!date)
        {
            updateVersionByIdAPI({id :"28c28acb-05df-4f62-aa36-ed5cadff80fb" , ActualTestingCompletionDate : null ,MarkAsTestingComplete : false});
            setTestingCompleted(false);
        }
    }

    const changeToCompleted = async (e) => {
        const values = await form.validateFields();
        console.log(values);
        if(values.ActualTestingCompletionDate)
        {
            setTestingCompleted(e.target.checked);
            updateVersionByIdAPI({id :"28c28acb-05df-4f62-aa36-ed5cadff80fb" , ...values ,MarkAsTestingComplete : true });
            message.success('testing status updated successfully');
        }
        else
        {
            message.error("Please select completion date!");
        }
    };

    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
               
                    <ProtoTypeHeader />
                    <Form name="date-form" layout="horizontal" form={form}>
                    <Row gutter={25}>
                        <Col xl={12} lg={12}>                           
                            <Row align="middle" gutter={25}>                          
                                <Col md={10} xs={8}>
                                    {/* <label htmlFor="moc"></label> */}
                                    {/* eslint-disable-next-line */}
                                    <label htmlFor='MarkAsTestingComplete'>Mark as Testing Complete:</label>
                                </Col>
                                <Col md={4} style={{marginTop : 20}}>
                                    <Checkbox style={{height: 20, width: 20, fontSize: 30}}  name='MarkAsTestingComplete'  checked={testingCompleted} onChange={changeToCompleted}/>
                                </Col>                                     
                            </Row>                              
                        </Col>
                        <Col  xl={12} lg={12}>
                        <Row align="middle">
                            <Col md={6} xs={12} xl={12} lg={6}>
                                {/* <label htmlFor="moc"></label> */}
                                    {/* <Form.Item
                                    label="Actual Date Test Complete:"
                                    name="ActualTestingCompletionDate"
                                    htmlFor="ActualTestingCompletionDate"
                                    rules={[{ required: true, message: 'Please select a date' }]}>
                                <label>Actual Date Design Complete:</label>
                                <DatePicker id="assembly" />
                            </Form.Item> */}
                            </Col>
                            <Col md={12} xs={24} align='right'>                                    
                                <Form.Item label="Actual Date Test Complete:" htmlFor="ActualTestingCompletionDate" name="ActualTestingCompletionDate">
                                    <DatePicker   onChange={handleDateChange}/>
                                </Form.Item>                                   
                            </Col>
                        </Row>

                       </Col>
                    </Row>
                </Form>
                </Cards>
                <Cards headless>
                    <Row align="right" gutter={25}>
                        <Col align='right' lg={24}>
                            <Button type='primary' onClick={() => setShowModal(true)}>
                                Add Experiment
                            </Button>
                        </Col>
                    </Row>
                    <ExperimentModal visible={showModal} id ={records}
                     onCancel={() => setShowModal(false)} />
                    <br />
                    <Row align="middle" gutter={25}>
                        <Col lg={24}>
                            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} onRow={onRowClick} />
                        </Col>
                    </Row>

                </Cards>
                {/* <Row align="middle">
                    <Col md={24} align='right'>
                        <Button size='default' type='primary' style={{ marginRight: 5 }}>
                            save
                        </Button>
                        <Button size='default' type='light'>
                            cancel
                        </Button>
                    </Col>
                </Row> */}
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Testing;
