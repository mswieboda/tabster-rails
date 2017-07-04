import React, { PropTypes } from 'react'

const Tab = ({ title, tab }) => (
  <div>
    <h1>{title}</h1>
    <pre>{tab}</pre>
  </div>
)

Tab.propTypes = {
  title: PropTypes.string,
  tab: PropTypes.string
}

export default Tab
