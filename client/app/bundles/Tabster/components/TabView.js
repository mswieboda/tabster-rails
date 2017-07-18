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
          <TabText text={section.value} />
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

class TabText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      isEdit: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick(e) {
    this.setState({ isEdit: !this.state.isEdit });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleKeyDown(e) {
    if (this.state.isEdit && (e.key == "Enter" || e.key == "Tab")) {
      e.preventDefault();
      this.setState({ isEdit: false });
    }
  }

  handleBlur(e) {
    this.setState({ isEdit: false });
  }

  render() {
    const { text, isEdit } = this.state;

    return(
      <div>
        {
          !isEdit &&
          <code
            style={{ width: "100%" }}
            onClick={this.handleClick}
          >
            {text}
          </code>
        }
        {
          isEdit &&
          <input
            style={{ width: "100%" }}
            autoFocus
            type="text"
            value={text}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={this.handleBlur}
           />
        }
      </div>
    );
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
