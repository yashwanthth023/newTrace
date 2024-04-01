import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper, } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import AddComponent from '../../container/pages/AddComponent';


function ComponentProcurement() {
    const [isAddPage, setIsAddPage] = useState(false);
    const dataSource = [
        {
            key: '1',
            name: 'dfd',
            createdon: '01-04-2024',
            modifiedon:'03-04-2024',
            status: 'link',
            button:
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ marginRight: 10 }}>
                        <Link to='/addComponent'>
                            <Button type="primary" size="small2">
                                View
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/addComponent'>
                            <Button type="warning" size="small2">
                                Edit
                            </Button>

                        </Link>
                    </div>

                </div>
        },
        {
            key: '2',
            name: 'cdf',
            status: 'link',
            button:
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ marginRight: 10 }}>
                        <Link to='/addComponent'>
                            <Button type="primary" size="small2">
                                View
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/addComponent'>
                            <Button type="warning" size="small2">
                                Edit
                            </Button>

                        </Link>
                    </div>

                </div>

        }
    ];

    const columns = [
        {
            title: 'SL.No',
            dataIndex: 'key',
            key: 'name',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'status',
        },
        {
            title: 'Created On',
            dataIndex: 'createdon',
            key: 'createdon',
        },
        {
            title: 'Modified On',
            dataIndex: 'modifiedon',
            key: 'modifiedon',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'View / Edit',
            dataIndex: 'button',
            key: 'button',
        },
    ];



    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">

                {isAddPage ? <>
                    <AddComponent setIsAddPage={setIsAddPage} />
                </> : <>
                    <Cards headless>
                        <ProtoTypeHeader />
                    </Cards>

                    <div style={{ display: 'flex' }}>
                        <Cards headless>
                            <Row align="right" gutter={25}>
                                <Col align='right' lg={24}>
                                    {/* <Link to="/AddComponent"> */}

                                    <Button type='primary' onClick={() => setIsAddPage(true)}>
                                        <FeatherIcon icon="plus" size={3} />
                                        Add Component
                                    </Button>
                                    {/* </Link> */}
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
                    </div>
                </>
                }


            </HorizontalFormStyleWrap>
        </BasicFormWrapper >
    );
}

export default ComponentProcurement;