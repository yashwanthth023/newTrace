import React, { useState } from 'react';
import { Row, Col, Table } from 'antd'
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import CreateElectrochem from '../ProjectModal/CreateElectrochem';


const ElectrochemDetailsPage = () => {

    const [visible, setVisible] = useState(false);
    const onCancel = () => {
        setVisible(false);
        console.log("canclel");
    }
    const onSubmit = () => {
        console.log("submit");
        onCancel();
    }
    const dataSource = [
        {
            id: 'EC1',
            name: 'ElectroChem1',
            remarks: 'remarks',
            created_on: '23/08/2002',
            created_by: 'Yashwanth'
        },
        {
            id: 'EC2',
            name: 'ElectroChem2',
            remarks: 'remarks',
            created_on: '23/08/2002',
            created_by: 'Yashwanth'
        },
        {
            id: 'EC3',
            name: 'ElectroChem3',
            remarks: 'remarks',
            created_on: '23/08/2002',
            created_by: 'Yashwanth'
        },
        {
            id: 'EC4',
            name: 'ElectroChem4',
            remarks: 'remarks',
            created_on: '23/08/2002',
            created_by: 'Yashwanth'
        },
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
        }
    ]
    return (
        <div style={{ display: 'flex' }}>
            <Cards headless>
                <Row align="right" gutter={25}>
                    <Col align='right' lg={24}>
                        <Button type='primary' onClick={() => setVisible(true)}>
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
    )
}

export default ElectrochemDetailsPage;