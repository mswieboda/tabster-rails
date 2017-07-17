const cn = require('classnames');

import React from 'react'
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

class TabCol extends React.Component {
  static propTypes = {
    col: PropTypes.string,
    colIndex: PropTypes.number,
    handleColClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleColClick(this.props.colIndex);
  }

  render() {
    const { col, selected } = this.props;
    const classes = cn({
      "tab-col": true,
      selected: selected
    });

    return (
      <span
        onClick={this.handleClick}
        className={classes}
      >
        {col}
      </span>
    );
  }
}

export default class TabView extends React.Component {
  static propTypes = {
    tab: PropTypes.array,
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
    const { tab, selectedColumn } = this.props;
    const tabText = this.tabToString(tab);

    return (
      <div>
        <pre>
          {tabText}
        </pre>
        <div style={{fontFamily: "monospace"}}>
          {tab.map((section, sectionIndex) => {
            return(
              <div key={sectionIndex}>
                { section.type === "text" &&
                  <span>{section.value}</span>
                }
                { section.type === "tab" &&
                  <div>
                    { section.value.map((row, rowIndex) =>
                      <div key={rowIndex}>
                        {row.map((col, colIndex) =>
                          <TabCol
                            key={colIndex}
                            col={col}
                            colIndex={colIndex}
                            selected={colIndex === selectedColumn}
                            handleColClick={this.props.handleSelectColumn}
                          />
                        )}
                      </div>
                    )}
                  </div>
                }
              </div>
            )
          })}
        </div>
      </div>
    );
  }
};
