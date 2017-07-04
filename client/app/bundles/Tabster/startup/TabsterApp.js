import React from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tabsterApp from '../reducers'
import App from '../components/App'

const TabsterApp = (props, _railsContext) => {
  // const store = createStore(props);
  const store = createStore(tabsterApp, props);
  const reactComponent = (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
  return reactComponent;
};

// This is how react_on_rails can see the app in the browser.
ReactOnRails.register({ TabsterApp });
