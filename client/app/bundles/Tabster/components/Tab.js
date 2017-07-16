import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TabEditor from './TabEditor';

export default class Tab extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    // make sure tab is formatted with types first
    // tab: PropTypes.string,
    editMode: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      title: this.props.title,
      selection: { sectionIndex: 1, row: 5, column: 3 },
      tab: [
        { type: "text", value: "Test tab:" },
        {
          type: "tab", value: [
            "e|---".split(''),
            "B|---".split(''),
            "G|---".split(''),
            "D|---".split(''),
            "A|---".split(''),
            "E|---".split(''),
          ]
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEditModeClick = this.handleToggleEditModeClick.bind(this);
    this.handleAddToTab = this.handleAddToTab.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleToggleEditModeClick(event) {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  }

  handleAddToTab(tabOutput) {
    let { selection, tab } = this.state;

    if (tab[selection.sectionIndex].type == "tab") {
      _.forEach(tab[selection.sectionIndex].value, (row, index) => {
        row[selection.column] = tabOutput[index];
      });
    }
    else {
      console.log("not appended, you're selecting text");
    }

    this.setState({ tab: tab });
  }

  render() {
    const { editMode, title, tab } = this.state;
    const { match } = this.props;
    const tabText = tab.map(t => {
      return t.type === "tab" ? t.value.map(row => row.join("")).join("\n") : t.value;
    }).join("\n");

    return (
      <div>
        <button onClick={e => this.handleToggleEditModeClick(e)}>
          {editMode ? 'View' : 'Edit'}
        </button>
        {!editMode &&
          <div>
            <h1>{title}</h1>
            <pre>{tabText}</pre>
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
              <TabEditor handleAddToTab={this.handleAddToTab} />
              <textarea
                name="tab"
                value={tabText}
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
