import React from 'react';
import { connect } from 'react-redux';
import { addTab } from '../actions';
import { Link } from 'react-router-dom';

let AddTab = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTab(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Tab
        </button>
        <br />
        <Link to="/tabs">Back to Tabs (hardcoded)</Link>
      </form>
    </div>
  );
}
AddTab = connect()(AddTab);

export default AddTab;
