import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TabListItem = ({ id, onClick, title }) => (
  <li
    onClick={onClick}
  >
    <Link to={`/tabs/show/${id}`} >{title}</Link>
  </li>
);

TabListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default TabListItem;
