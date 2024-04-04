import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AddUser } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Specification from '../../components/tabs/design';
import General from '../../components/tabs/general';
import ComponentProcurement from '../../components/tabs/componentProcurement';
import Testing from '../../components/tabs/testing';
import Closure from '../../components/tabs/closure';
import Assembly from '../../components/tabs/assembly';
import { fetchVersionDetailsAPI } from '../../api/api';
import { setComponentDetails, setVersionDetails } from '../../redux/versionDetails/versionSlice';


const VersionDetailPage = () => {
    const [tab, setTab] = useState('general');
    const dispatch = useDispatch();
    // const userData = useSelector((state) => state.versionInfo.versionDetails)

    const fetchData = async () => {
        const response = await fetchVersionDetailsAPI({ id: 'ab5fb012-5796-4774-a184-4add002311fa' });
        if (response) {
            console.log(response);
            dispatch(setVersionDetails(response.versionDetails));
            dispatch(setComponentDetails(response.manufactureDetails));
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const tabToShow = () => {
        switch (tab) {
            case 'design':
                return <Specification />;
            case 'general':
                return <General />;
            case 'componentProcurement':
                return <ComponentProcurement />;
            case 'testing':
                return <Testing />;
            case 'closure':
                return <Closure />;
            case 'assembly':
                return <Assembly />;
            default:
                return <General />
        }
    }
    useEffect(() => { }, [tab])

    return (
        <>
            <Main>
                <Row >
                    <Col lg={24} xs={24} >
                        <AddUser>
                            <Cards headStyle={{ position: 'relative' }}
                                title={
                                    <div className="card-nav">
                                        <ul>
                                            <li>
                                                <Button className={`${tab === 'general' && 'active'}`} onClick={() => setTab('general')}>
                                                    General
                                                </Button>
                                            </li>
                                            <li>
                                                <Button className={`${tab === 'design' && 'active'}`} onClick={() => setTab('design')}>
                                                    Specification
                                                </Button>
                                            </li>
                                            <li>
                                                <Button className={`${tab === 'componentProcurement' && 'active'}`} onClick={() => setTab('componentProcurement')}>
                                                    Component Procurement
                                                </Button>
                                            </li>
                                            <li>
                                                <Button className={`${tab === 'assembly' && 'active'}`} onClick={() => setTab('assembly')}>
                                                    Assembly
                                                </Button>
                                            </li>
                                            <li>
                                                <Button className={`${tab === 'testing' && 'active'}`} onClick={() => setTab('testing')}>
                                                    Testing
                                                </Button>
                                            </li>
                                            <li>
                                                <Button className={`${tab === 'closure' && 'active'}`} onClick={() => setTab('closure')}>
                                                    Closure
                                                </Button>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            >
                                <div style={{ height: "100%" }}>
                                    {tabToShow()}
                                </div>

                            </Cards>
                        </AddUser>
                    </Col>
                </Row >
            </Main >
        </>
    );
}

export default VersionDetailPage;
