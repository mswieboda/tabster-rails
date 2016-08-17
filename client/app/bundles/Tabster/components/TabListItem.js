import React, { PropTypes } from 'react';

const TabListItem = ({ onClick, title }) => (
  <li
    onClick={onClick}
  >
    {title}
  </li>
);

TabListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default TabListItem;
