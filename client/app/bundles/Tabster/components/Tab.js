import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TabEditor from './TabEditor';
import TabView from './TabView';

export default class Tab extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    // make sure tab is formatted with types first
    // as an array
    // tab: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      selection: { section: 1, row: 5, column: 3 },
      tab: [
        { type: "text", value: "Test tab:" },
        {
          type: "tab", value: [
            "e|---------------".split(''),
            "B|---------------".split(''),
            "G|---------------".split(''),
            "D|---------------".split(''),
            "A|---------------".split(''),
            "E|---------------".split(''),
          ]
        },
        { type: "text", value: "More text, blah blah blah" },
        { type: "text", value: "Even more text, blah!" },
        {
          type: "tab", value: [
            "e|---------------".split(''),
            "B|---------------".split(''),
            "G|---------------".split(''),
            "D|---------------".split(''),
            "A|---------------".split(''),
            "E|---------------".split(''),
          ]
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddToTab = this.handleAddToTab.bind(this);
    this.handleSelectColumn = this.handleSelectColumn.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleAddToTab(tabOutput) {
    let { selection, tab } = this.state;
    let { section, column } = selection;

    if (tab[section].type == "tab") {
      // Replaces the chord at the selected column, with desired chord
      _.forEach(tab[section].value, (row, index) => {
        row[column] = tabOutput[index].toString();
      });

      const nextSelectionColumn = selection.column + 1;

      if (nextSelectionColumn + 1 > tab[section].value.length) {
        _.forEach(tab[section].value, (row, index) => {
          row[nextSelectionColumn] = '-';
        });
      }

      this.setState({
        ...this.state,
        selection: {
          ...this.state.selection,
          column: nextSelectionColumn
        }
      });
    }
    else {
      console.log("not appended, you're selecting text");
    }

    this.setState({ tab: tab });
  }

  handleSelectColumn(section, noteIndex) {
    const { selection } = this.state;

    if (selection && section == selection.section && noteIndex === selection.column) {
      this.setState({ selection: { section: undefined, row: undefined, column: undefined }});
    }
    else {
      this.setState({ selection: { ...this.state.selection, section: section, column: noteIndex }});
    }
  }

  render() {
    const { title, tab, selection } = this.state;

    return (
      <div>
        <div>
          <h1>{title}</h1>
          <TabEditor handleAddToTab={this.handleAddToTab} />
          <TabView
            tab={tab}
            selectedSection={selection.section}
            selectedColumn={selection.column}
            handleSelectColumn={this.handleSelectColumn}
          />
        </div>
        <Link to="/tabs">Back to Tabs</Link>
      </div>
    );
  }
};
