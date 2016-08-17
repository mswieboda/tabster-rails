import React, { PropTypes } from 'react';
import TabListItem from './TabListItem';

const TabList = ({ tabs, onTabClick }) => (
  <ul>
    {tabs.map((tab,id) =>
      <TabListItem
        key={id}
        title={tab.title}
        onClick={() => onTabClick(id)}
      />
    )}
  </ul>
);

TabList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    // id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // tab: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default TabList;
