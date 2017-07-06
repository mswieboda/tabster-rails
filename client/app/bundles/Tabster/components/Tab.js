import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Tab extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    tab: PropTypes.string,
    editMode: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      title: this.props.title,
      tab: this.props.tab
    };
  }

  handleToggleEditModeClick(event) {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { editMode, title, tab } = this.state;
    const { match } = this.props;

    return (
      <div>
        <button onClick={e => this.handleToggleEditModeClick(e)}>
          {editMode ? 'View' : 'Edit'}
        </button>
        {!editMode &&
          <div>
            <h1>{title}</h1>
            <pre>{tab}</pre>
          </div>
        }
        {editMode &&
          <div>
            <div>
              <input
                name="title"
                type="text"
                value={title}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <textarea
                name="tab"
                value={tab}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
        }
        <Link to={`${match.url}/../..`}>Back to Tabs (not working)</Link>
        <br />
        <Link to="/tabs">Back to Tabs (hardcoded)</Link>
      </div>
    );
  }
};
