import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tabsterApp from '../reducers'
import App from '../components/App'

const TabsterApp = (props, _railsContext) => {
  const store = createStore(tabsterApp, props);
  const reactComponent = (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  );
  return reactComponent;
};

ReactDOM.render(
  <TabsterApp />,
  document.getElementById('app')
);
