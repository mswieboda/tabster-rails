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

require("style-loader!css-loader!../../../../css/marx.min.css");
require("style-loader!css-loader!../../../../css/marx.styl.min.css");
require("../../../../css/styles.css");

const TabsterApp = ({ props }, _railsContext) => {
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
  <TabsterApp props={props} />,
  document.getElementById('app')
);
