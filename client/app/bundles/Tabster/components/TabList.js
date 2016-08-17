import React, { PropTypes } from 'react'
import TabListItem from './TabListItem'

const TabList = ({ tabs, onTabClick }) => (
  <ul>
    {tabs.map(tab =>
      <TabListItem
        key={tab.id}
        title={tab.title}
        onClick={() => onTabClick(tab.id)}
      />
    )}
  </ul>
)

TabList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default TabList
