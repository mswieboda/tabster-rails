import React, { PropTypes } from 'react'

const TabListItem = ({ onClick, title }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {title}
  </li>
)

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default TabListItem
