import React from 'react'
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tabsterApp from './reducers'
import App from './components/App'

let store = createStore(tabsterApp)

const TabsterApp = (props, _railsContext) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  return reactComponent;
};

// This is how react_on_rails can see the app in the browser.
ReactOnRails.register({ TabsterApp });
