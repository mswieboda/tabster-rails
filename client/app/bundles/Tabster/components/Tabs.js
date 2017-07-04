import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import AddTab from '../containers/AddTab';
import VisibleTabList from '../containers/VisibleTabList';
import TabShow from '../containers/TabShow';

const Tabs = ({ match }) => (
  <div>
    <Route exact path={match.url} render={() => (
      <div>
        <VisibleTabList />
        <Link to={`${match.url}/new`}>Add Tab</Link>
      </div>
    )} />
    <Route exact path={`${match.url}/new`} component={AddTab} />
    <Route exact path={`${match.url}/show/:index`} render={({ match }) => (
      <TabShow />
    )} />
  </div>
);

export default Tabs;
