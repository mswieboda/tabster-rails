import React from 'react';
import { Route, Link } from 'react-router-dom';
import Tabs from './Tabs'

const App = ({match}) => (
  <div>
    <Route path="/" render={() => (
      <Link to="/tabs">tabs</Link>
    )}/>
    <Route path="/tabs" component={Tabs} />
  </div>
);

export default App;
