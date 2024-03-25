import React from 'react';
import { Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Div } from './header-search-style';
import { headerSearchAction } from '../../redux/headerSearch/actionCreator';
import { Popover } from '../popup/popup';

const HeaderSearch = ({ darkMode }) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.headerSearchData);
  const rtl = useSelector(state => state.ChangeLayoutMode.rtlData);

  const search = e => {
    dispatch(headerSearchAction(e.target.value));
  };

  const content = (
    <div>
      {searchData.length ? (
        searchData.map(group => {
          const { title, count, id } = group;
          return (
            <NavLink key={id} to="#">
              {title}
              <span className="certain-search-item-count">{count} people</span>
            </NavLink>
          );
        })
      ) : (
        <NavLink to="#">Data Not found....</NavLink>
      )}
    </div>
  );

  return (
    <>
      <Div className="certain-category-search-wrapper" style={{ width: '100%' }} darkMode={darkMode}>
        <Row className="ant-row-middle" style={{ display: 'none' }}>
          <Col md={2} xs={1} className={rtl ? 'text-left' : 'text-right'}>
            <span className="certain-category-icon">
              <FeatherIcon icon="search" size={16} />
            </span>
          </Col>
          <Col md={22} xs={23}>
            <Popover
              placement={!rtl ? 'bottomLeft' : 'bottomRight'}
              content={content}
              title="Search List"
              action="focus"
            >
              <Input placeholder="Search..." onInput={search} />
            </Popover>
          </Col>
        </Row>
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/Prototype"> <span style={{ color: 'rgb(90, 95, 125)' }}>Prototypes</span></NavLink>
          <NavLink to="electroChem"> <span style={{ color: 'rgb(90, 95, 125)' }}>EC Details</span></NavLink>
          <div style={{ cursor: 'pointer', color: 'rgb(90, 95, 125)' }} ><span>Settings</span></div>
          {/* <Button   size="default" key="4" type="primary" >Add Electrochem</Button> */}
        </div>
      </Div>
    </>
  );
};

HeaderSearch.propTypes = {
  darkMode: PropTypes.bool,
};

export default HeaderSearch;
