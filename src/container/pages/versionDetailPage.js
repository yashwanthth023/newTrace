import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { AddUser } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Design from '../../components/tabs/design';
import General from '../../components/tabs/general';
import Manufacturing from '../../components/tabs/manufacturing';
import Testing from '../../components/tabs/testing';
import Closure from '../../components/tabs/closure';


const VersionDetailPage = () => {
    const [tab, setTab] = useState('general');


    const tabToShow = () => {
        switch (tab) {
            case 'design':
                return <Design />;
            case 'general':
                return <General />;
            case 'manufacturing':
                return <Manufacturing />;
            case 'testing':
                return <Testing />;
            case 'closure':
                return <Closure />;
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
                                                    Design
                                                </Button>
                                            </li>
                                            <li>
                                                <Button className={`${tab === 'manufacturing' && 'active'}`} onClick={() => setTab('manufacturing')}>
                                                    Manufacturing
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
