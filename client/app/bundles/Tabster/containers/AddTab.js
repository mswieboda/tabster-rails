import React from 'react';
import { connect } from 'react-redux';
import { addTab } from '../actions';
import { Link } from 'react-router-dom';

let AddTab = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form action="/api/tabs/create" method="post">

        <label htmlFor="title">Title</label>
        <div>
          <input name="title" id="title" />
        </div>

        <label htmlFor="tab">Tab</label>
        <div>
          <textarea name="tab"  id="tab"></textarea>
        </div>

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
