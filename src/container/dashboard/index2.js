import { Row, Col, Spin, Select } from 'antd';
import FeatherIcon from 'feather-icons-react';
import React, { useState, Suspense } from 'react';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import { ProjectHeader, ProjectSorting } from './style';
import { Main } from '../styled';
// import { useSelector, useDispatch } from 'react-redux';
// import propTypes from 'prop-types';
import { PageHeader } from '../../components/page-headers/page-headers';
// import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Dashboard = () => {

  const [state, setState] = useState({
    // notData: searchData,
    notData: 0,
    visible: false,
    categoryActive: 'all',
  });
  const onChangeCategory = (value) => {
    console.log("calling");
    setState({
      ...state,
      categoryActive: value,
    });
    // dispatch(filterProjectByStatus(value));
  };

  return (
    <>
    <ProjectHeader>
      <PageHeader
        ghost
        title="Prototypes"
        buttons={[
          <div key="6" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
        />
        </ProjectHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className="project-sort-bar">
                <div className="project-sort-nav">
                  <nav>
                    <ul>
                      <li className={state.categoryActive === 'all' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('all')} to="#">
                          All
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'progress' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('progress')} to="#">
                          In Progress
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'complete' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('complete')} to="#">
                          Complete
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'late' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('late')} to="#">
                          Late
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'early' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('early')} to="#">
                          Early
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="project-sort-search">
                  <AutoComplete onSearch={handleSearch} dataSource={notData} placeholder="Search projects" patterns />
                </div>
                <div className="project-sort-group">
                  <div className="sort-group">
                    <span>Sort By:</span>
                    <Select onChange={onSorting} defaultValue="category">
                      <Select.Option value="category">Project Category</Select.Option>
                      <Select.Option value="rate">Top Rated</Select.Option>
                      <Select.Option value="popular">Popular</Select.Option>
                      <Select.Option value="time">Newest</Select.Option>
                      <Select.Option value="price">Price</Select.Option>
                    </Select>
                    <div className="layout-style">
                      <NavLink to={`${path}/grid`}>
                        <FeatherIcon icon="grid" size={16} />
                      </NavLink>
                      <NavLink to={`${path}/list`}>
                        <FeatherIcon icon="list" size={16} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectSorting>
            <div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={path} component={Grid} exact />
                  <Route path={`${path}/grid`} component={Grid} />
                  <Route path={`${path}/list`} component={List} />
                </Suspense>
              </Switch>
            </div>
          </Col>
        </Row>
        <CreateProject onCancel={onCancel} visible={visible} />
      </Main>
      {/* <Main>
        <Row gutter={25}>
          <Col lg={24} xs={24}>
            <Cards headless>
              <div style={{ minHeight: 'calc(100vh - 320px)' }}>
                <h2>Welcome to StrikingDash</h2>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main> */}
    </>
  );
}

export default Dashboard;
