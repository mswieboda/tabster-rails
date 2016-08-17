import React, { PropTypes } from 'react'

const Tab = ({ title, tab }) => (
  <h1>{title}</h1>
  <pre>{tab}</pre>
)

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Tab
