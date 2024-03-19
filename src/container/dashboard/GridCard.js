import React from 'react';
import { Progress, Tag } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProjectCard } from './style';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { textRefactor } from '../../components/utilities/utilities';

function GridCard({ value }) {
  const { id, title, status, content, percentage } = value;
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
          </div>
        </div>
        <div className="project-bottom" style={{overflowY :'auto', maxHeight :'150px'}}>
          <div className="project-assignees">
            {/* <p>Assigned To</p> */}
            <ul style={{flexDirection :'column'}}>
              <li>
                <span>NTP01-V_09</span>
                <Tag className= "early">Design</Tag>
              </li>
              <li>
              NTP01-V_08
                <Tag className="late">Manufacturing</Tag>
              </li>
              <li>
                NTP01-V_07
                <Tag className= "progress">Testing</Tag>
              </li>
              <li>
                NTP01-V_06
                <Tag className= "complete">ARCHEIVED</Tag>
              </li>
              <li>
                NTP01-V_05
                <Tag className= "complete">ARCHEIVED</Tag>
              </li>
              <li>
                NTP01-V_04
                <Tag className= "complete">ARCHEIVED</Tag>
              </li> <li>
                NTP01-V_03
                <Tag className= "complete">ARCHEIVED</Tag>
              </li>
              <li>
                NTP01-V_02
                <Tag className= "complete">ARCHEIVED</Tag>
              </li>
              <li>
                NTP01-V_01
                <Tag className= "complete">ARCHEIVED</Tag>
              </li>
              {/* <li>
                hello
              </li>
              <li>
              hello
                <img src={require(`../../../static/img/users/2.png`)} alt="" />
              </li>
              <li>
              hello
                <img src={require(`../../../static/img/users/3.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/4.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/5.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/6.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/7.png`)} alt="" />
              </li> */}
            </ul>
          </div>
        </div>
      </Cards>
    </ProjectCard>
  );
}

GridCard.propTypes = {
  value: PropTypes.object,
};

export default GridCard;
