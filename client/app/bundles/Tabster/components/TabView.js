const cn = require('classnames');

import React from 'react'
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

class TabSection extends React.Component {
  static propTypes = {
    section: PropTypes.object,
    sectionIndex: PropTypes.number,
    selectedColumn: PropTypes.number,
    handleSelectColumn: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleSelectColumn = this.handleSelectColumn.bind(this);
  }

  handleSelectColumn(noteIndex) {
    this.props.handleSelectColumn(this.props.sectionIndex, noteIndex);
  }

  render() {
    const { section, sectionIndex, selected, selectedColumn } = this.props;

    return(
      <div>
        { section.type === "text" &&
          <code>{section.value}</code>
        }
        { section.type === "tab" &&
          <div>
            { section.value.map((tabString, tabStringIndex) =>
              <div key={tabStringIndex}>
                {tabString.map((noteValue, noteIndex) =>
                  <TabNote
                    key={noteIndex}
                    value={noteValue}
                    noteIndex={noteIndex}
                    selected={selected && noteIndex === selectedColumn}
                    handleSelectColumn={this.handleSelectColumn}
                  />
                )}
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

class TabNote extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    noteIndex: PropTypes.number,
    handleSelectColumn: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleSelectColumn(this.props.noteIndex);
  }

  render() {
    const { value, selected } = this.props;
    const classes = cn({
      "tab-note": true,
      selected: selected
    });

    return (
      <code
        onClick={this.handleClick}
        className={classes}
      >
        {value}
      </code>
    );
  }
}

export default class TabView extends React.Component {
  static propTypes = {
    tab: PropTypes.array,
    selectedSection: PropTypes.number,
    selectedColumn: PropTypes.number,
    handleSelectColumn: PropTypes.func,
  };

  constructor(props) {
    super(props);
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
    const { tab, selectedColumn, selectedSection, handleSelectColumn } = this.props;
    const tabText = this.tabToString(tab);

    return (
      <div>
        <div style={{fontFamily: "monospace"}}>
          {tab.map((section, sectionIndex) =>
            <TabSection
              key={sectionIndex}
              section={section}
              sectionIndex={sectionIndex}
              selected={sectionIndex === selectedSection}
              selectedColumn={selectedColumn}
              handleSelectColumn={handleSelectColumn}
            />
          )}
        </div>
      </div>
    );
  }
};
