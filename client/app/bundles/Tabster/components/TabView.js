import React from 'react'
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default class TabView extends React.Component {
  static propTypes = {
    tab: PropTypes.array,
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
    const { tab } = this.props;
    const tabText = this.tabToString(tab);

    return (
      <div>
        <pre>
          {tabText}
        </pre>
        <Grid fluid style={{fontFamily: "monospace"}}>
          {tab.map((section, sectionIndex) => {
            return(
              <Row key={sectionIndex}>
                { section.type === "text" &&
                  <Col xs>{section.value}</Col>
                }
                { section.type === "tab" &&
                  <Grid>
                    { section.value.map((row, rowIndex) =>
                      <Row key={rowIndex}>
                        {row.map((col, colIndex) =>
                          <Col xs key={colIndex}>
                            {col}
                          </Col>
                        )}
                      </Row>
                    )}
                  </Grid>
                }
              </Row>
            )
          })}
        </Grid>
      </div>
    );
  }
};
