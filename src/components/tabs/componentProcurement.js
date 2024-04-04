import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { Row, Col, Table } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper, } from './style/wrapperStyle';
import ProtoTypeHeader from './components/protoTypeInfo';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import AddComponent from '../../container/pages/AddComponent';
// import { fetchManufacturingDetailsByVersionIdAPI } from '../../api/api';
import { SessionStorage } from '../../util/SessionStorage';


function ComponentProcurement() {
    const [isAddPage, setIsAddPage] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isView, setIsView] = useState(false);
    const [componentData, setComponentData] = useState([]);
    const componentDetails = useSelector((state) => state.versionInfo.componentDetails);

    // const fetchManufacturingData = async () => {
    //     const response = await fetchManufacturingDetailsByVersionIdAPI({ versionId: "ab5fb012-5796-4774-a184-4add002311fa" })
    //     if (response) {
    //         setComponentData(response);
    //     }
    // }

    useEffect(() => {
        setComponentData(componentDetails);
        // fetchManufacturingData();
    }, [componentDetails, isAddPage])

    // useEffect(() => {
    //     fetchManufacturingData();
    // }, [isAddPage]);

    const dataSource = componentData?.map((data, i) => {
        return {
            key: i + 1,
            name: data.componentName,
            createdOn: data?.createdOn ?
                new Date(data.createdOn).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : '',
            modifiedOn: data?.modifiedOn ? new Date(data?.modifiedOn).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : '',
            status: data.status,
            createdBy: 'Gowtham',
            modifiedBy: 'Gowtham',
            button:
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ marginRight: 10 }}>
                        <Button type="primary" size="small2" onClick={() => { setIsView(true); SessionStorage.setItem('componentId', data.id); setIsAddPage(true) }}>
                            View
                        </Button>
                    </div>
                    <div>
                        <Button type="warning" size="small2" onClick={() => { setIsEdit(true); SessionStorage.setItem('componentId', data.id); setIsAddPage(true) }}>
                            Edit
                        </Button>
                    </div>

                </div>
        }
    });

    const onCancel = () => {
        setIsEdit(false);
        setIsView(false);
        setIsView(false);
    }


    const columns = [
        {
            title: 'SL.No',
            dataIndex: 'key',
            key: 'name',
        },
        {
            title: 'Component Name',
            dataIndex: 'name',
            key: 'status',
        },
        {
            title: 'Created On',
            dataIndex: 'createdOn',
            key: 'createdOn',
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            key: 'createdBy',
        },
        {
            title: 'Modified On',
            dataIndex: 'modifiedOn',
            key: 'modifiedOn',
        },
        {
            title: 'Modified By',
            dataIndex: 'modifiedBy',
            key: 'modifiedBy',
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
                    <AddComponent setIsAddPage={setIsAddPage} setComponentData={setComponentData} isEdit={isEdit} isView={isView} onCancel={onCancel} />
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