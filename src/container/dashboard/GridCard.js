import React, { useState } from 'react';
import {  Tag } from 'antd';
import FeatherIcon from 'feather-icons-react';
import {  NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProjectCard } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { textRefactor } from '../../components/utilities/utilities';
import { Button } from '../../components/buttons/buttons';
import CreateVersion from '../ProjectModal/CreateVersion';

function GridCard({ value }) {
  const {  title, content } = value;

  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  }
  const onSubmit = () => {
    onCancel();
  }

  const VersionData = [{ "id": "NTP01-V_09", className: "early", status: 'Design' },
  { "id": "NTP01-V_08", className: "late", status: 'Manufacturing' },
  { "id": "NTP01-V_07", className: "progress", status: 'Testing' },
  { "id": "NTP01-V_06", className: "complete", status: 'ARCHEIVED' },
  { "id": "NTP01-V_05", className: "complete", status: 'ARCHEIVED' },
  { "id": "NTP01-V_04", className: "complete", status: 'ARCHEIVED' },
  { "id": "NTP01-V_03", className: "complete", status: 'ARCHEIVED' },
  { "id": "NTP01-V_02", className: "complete", status: 'ARCHEIVED' },
  { "id": "NTP01-V_01", className: "complete", status: 'ARCHEIVED' },
  ]

  return (
    <ProjectCard>
      <Cards headless>
        <div className="project-top">
          <div className="project-title">
            <h1>
              {title}
              {/* <Tag className={status}>{status}</Tag> */}
            </h1>
            {/* <Dropdown
              content={
                <>
                  <Link to="#">Total Income</Link>
                  <Link to="#">Total Expense</Link>
                  <Link to="#">Total Tax</Link>
                  <Link to="#">Net Profit</Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={18} />
              </Link>
            </Dropdown> */}
          </div>
          <p className="project-desc">{textRefactor(content, 13)}</p>
          <div className="project-timing">
            <div>
              <span>created Date</span>
              <strong>26 Dec 2019</strong>
            </div>
            {/* <div>
              <span>Deadline</span>
              <strong>18 Mar 2020</strong>
            </div> */}
          </div>
          <div className="project-progress">
            {/* <Progress
              percent={status === 'complete' ? 100 : percentage}
              strokeWidth={5}
              status="primary"
              className="progress-primary"
            /> */}
            <h3>Versions :</h3>
            <Button size="small2" key="2" type="primary" onClick={() => setOpen(true)}>
              <FeatherIcon icon="plus" size={3} />
              Add Version
            </Button>
          </div>
        </div>
        <div className="project-bottom" style={{ overflowY: 'auto', maxHeight: '150px' }}>
          <div className="project-assignees">
            {/* <p>Assigned To</p> */}
            <ul style={{ flexDirection: 'column' }}>
              {
                VersionData.map((ele)=>
                <NavLink to="/versionDetails">
                  <li>
                  <span>{ele.id}</span>
                  <Tag style={{backgroundColor :'#fff'}} className= {ele.className}>{ele.status}</Tag>
                  {/* <span className= {ele.className}>{ele.status}</span> */}
                  {/* <span style={{color : ele.status === "Design" ?'primary-color' : ele.status === "ARCHEIVED" ? 'success-color' : ele.status === "Testing" ?'danger-color' :'warning-color' }}>{ele.status}</span> */}
                </li>
                </NavLink>
                )
              }
            </ul>
          </div>
        </div>
      </Cards>
      <CreateVersion onCancel={onCancel} onSubmit={onSubmit} visible={open} />
    </ProjectCard>
  );
}

GridCard.propTypes = {
  value: PropTypes.object,
  title: PropTypes.any,
  content: PropTypes.any,
};

export default GridCard;
