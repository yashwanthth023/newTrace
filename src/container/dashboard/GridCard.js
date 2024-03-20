import React, { useState } from 'react';
import { Progress, Tag } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProjectCard } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { textRefactor } from '../../components/utilities/utilities';
import { Button } from '../../components/buttons/buttons';
import CreateVersion from '../ProjectModal/CreateVersion';
import useSelection from 'antd/lib/table/hooks/useSelection';

function GridCard({ value }) {
  const { id, title, status, content, percentage } = value;

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

  const [open, setOpen] = useState(false);
  return (
    <ProjectCard>
      <Cards headless>
        <div className="project-top">
          <div className="project-title">
            <h1>
              <Link to={`/admin/project/projectDetails/${id}`}>{title}</Link>
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
              Add New
            </Button>

          </div>
        </div>
        <div className="project-bottom" style={{ overflowY: 'auto', maxHeight: '150px' }}>
          <div className="project-assignees">
            {/* <p>Assigned To</p> */}
            <ul style={{ flexDirection: 'column' }}>
              {
                VersionData.map((ele, i) =>
                  <NavLink key={i} to="/versionDetails">
                    <li>
                      <span>{ele.id}</span>
                      <Tag className={ele.className}>{ele.status}</Tag>
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
};

export default GridCard;
