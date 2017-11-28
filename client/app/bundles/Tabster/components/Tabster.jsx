import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tabsterApp from '../reducers';
import App from '../components/App';

require("../../../../node_modules/marx-css/css/marx.min.css");
require("../../../../node_modules/marx-css/css/marx.styl.min.css");
require("../../../../css/styles.scss");

export default class Tabster extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.store = createStore(tabsterApp, props);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    );
  }
}
