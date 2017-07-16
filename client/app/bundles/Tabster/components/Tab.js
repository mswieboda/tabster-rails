import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TabEditor from './TabEditor';

export default class Tab extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    // make sure tab is formatted with types first
    // tab: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
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
    this.handleAddToTab = this.handleAddToTab.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleAddToTab(tabOutput) {
    let { selection, tab } = this.state;
    let { sectionIndex, column } = selection;

    if (tab[sectionIndex].type == "tab") {
      // Replaces the chord at the selected column, with desired chord
      _.forEach(tab[sectionIndex].value, (row, index) => {
        row[column] = tabOutput[index];
      });
    }
    else {
      console.log("not appended, you're selecting text");
    }

    this.setState({ tab: tab });
  }

  tabToString(tab) {
    return tab.map(section => {
      return section.type === "tab" ? this.tabSectionToString(section) : section.value;
    }).join("\n");
  }

  tabSectionToString(section) {
    return section.value.map(row => row.join("")).join("\n");
  }

  render() {
    const { editMode, title, tab } = this.state;
    const { match } = this.props;
    const tabText = this.tabToString(tab);

    return (
      <div>
        <div>
          <h1>{title}</h1>
          <TabEditor handleAddToTab={this.handleAddToTab} />
          <pre>{tabText}</pre>
        </div>
        <Link to="/tabs">Back to Tabs</Link>
      </div>
    );
  }
};
