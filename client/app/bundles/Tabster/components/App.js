import React from 'react';
import { Route, Link } from 'react-router-dom';
import Tabs from './Tabs'
import TabEditor from './TabEditor'

const App = ({match}) => (
  <div>
    <Route path="/" render={() => (
      <div>
        <TabEditor />
        <Link to="/tabs">tabs</Link>
      </div>
    )}/>
    <Route path="/tabs" component={Tabs} />
  </div>
);

export default App;
