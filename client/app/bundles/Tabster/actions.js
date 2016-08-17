/*
 * action types
 */

export const ADD_TAB = 'ADD_TAB';
export const SHOW_TAB = 'SHOW_TAB';

/*
 * action creators
 */

export function addTab(title, text) {
  return { type: ADD_TAB, title, text };
}

export function showTab(index) {
  return { type: SHOW_TAB, index };
}
