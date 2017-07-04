import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddTab from '../containers/AddTab';
import VisibleTabList from '../containers/VisibleTabList';

const Tabs = ({match}) => (
  <div>
    <Route path={match.url} render={() => (
      <div>
        <VisibleTabList />
        <Link to={`${match.url}/new`}>Add Tab</Link>
      </div>
    )}/>
    <Route path={`${match.url}/new`} component={AddTab} />
  </div>
);

export default Tabs;