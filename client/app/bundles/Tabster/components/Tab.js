import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

const Tab = ({ match, title, tab }) => (
  <div>
    <h1>{title}</h1>
    <pre>{tab}</pre>
    <Link to={`${match.url}/../..`}>Back to Tabs (not working)</Link>
    <br />
    <Link to="/tabs">Back to Tabs (hardcoded)</Link>
  </div>
)

Tab.propTypes = {
  title: PropTypes.string,
  tab: PropTypes.string
}

export default Tab
