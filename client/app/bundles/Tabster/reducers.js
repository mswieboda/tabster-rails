import { combineReducers } from 'redux';
import { ADD_TAB, SHOW_TAB } from './actions';

function tabs(state = [], action) {
  switch (action.type) {
    case ADD_TAB:
      return [
        ...state,
        {
          title: action.title,
          tab: action.tab
        }
      ];
    default:
      return state;
  }
}

const initialState = {
  showTab: { title: undefined, text: undefined },
  tabs: []
}

function showTab(state = initialState, action) {
  switch(action.type) {
    case SHOW_TAB:
      const { title, tab } = state.tabs[action.index];
      console.log(`>>> show tab\n${title}\n${tab}`);
      return {
        title,
        tab
      };
    default:
      return state;
  }
}

// TODO: Wish I could do it this way, but can't
//       because showTab uses state.tabs
// const tabsterApp = combineReducers({
//   showTab,
//   tabs
// });

const tabsterApp = function(state = {}, action) {
  return {
    showTab: showTab(state, action),
    tabs: tabs(state.tabs, action)
  };
};

export default tabsterApp;
