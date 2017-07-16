const cn = require('classnames');
const _ = require('lodash');

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from './Button'

const STRINGS = ['e', 'B', 'G', 'D', 'A', 'E'];
const FRETS = 17;
const DOTS = [3, 5, 7, 9, 15, 17, 19, 21];
const DOUBLE_DOTS = [12, 24];

let Label = ({ label }) => (
  <span>{label}</span>
);

class StringRow extends React.Component {
  static propTypes = {
    numString: PropTypes.number,
    frets: PropTypes.number,
    handleFretClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { selectedFret: null };
    this.handleFretClick = this.handleFretClick.bind(this);
  }

  handleFretClick(numString, fret) {
    if (this.state.selectedFret === fret) {
      this.props.handleFretClick(numString, '-');
      this.setState({ selectedFret: null });
    }
    else {
      this.props.handleFretClick(numString, fret);
      this.setState({ selectedFret: fret });
    }
  }

  render() {
    const { selectedFret } = this.state;
    const { numString, frets } = this.props;

    return (
      <Row className="string">
        {_.times(frets + 1, (fret) => {
          const hasDot = _.includes(DOTS, fret);
          const hasDotTop = hasDot && numString === STRINGS.length / 2;
          const hasDotBottom = hasDot && numString === STRINGS.length / 2 + 1;

          const isTopHigherDoubleDotString = numString === STRINGS.length / 2 - 1;
          const isBotHigherDoubleDotString = numString === STRINGS.length / 2;
          const isTopLowerMiddleString = numString === STRINGS.length / 2 + 1;
          const isBotLowerMiddleString = numString === STRINGS.length / 2 + 2;

          const hasDoubleDot = _.includes(DOUBLE_DOTS, fret);
          const hasDoubleDotTop = hasDoubleDot && (isTopHigherDoubleDotString || isTopLowerMiddleString);
          const hasDoubleDotBottom = hasDoubleDot && (isBotHigherDoubleDotString || isBotLowerMiddleString);

          return (
            <Fret
              key={`s${numString}-f${fret}`}
              numString={numString}
              fret={fret}
              dotTop={hasDotTop || hasDoubleDotTop}
              dotBottom={hasDotBottom || hasDoubleDotBottom}
              handleFretClick={this.handleFretClick}
              selected={fret === selectedFret}
            />
          )}
        )}
      </Row>
    );
  }
};

class Fret extends React.Component {
  static propTypes = {
    fret: PropTypes.number,
    numString: PropTypes.number,
    dotTop: PropTypes.bool,
    dotBottom: PropTypes.bool,
    handleFretClick: PropTypes.func,
    selected: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleFretClick(this.props.numString, this.props.fret);
  }

  render() {
    const { fret, dotTop, dotBottom, selected } = this.props;
    const fretClasses = cn({
      'fret': true,
      'open': fret === 0,
      'dot-top': dotTop,
      'dot-bot': dotBottom,
      'selected': selected
    });

    return (
      <Col xs className={fretClasses} onClick={this.handleClick}>&nbsp;</Col>
    );
  }
};

export default class TabEditor extends React.Component {
  static propTypes = {
    handleAddToTab: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { tabOutput: _.fill(Array(STRINGS.length), '-') };
    this.handleFretClick = this.handleFretClick.bind(this);
    this.handleAddToTab = this.handleAddToTab.bind(this);
  }

  handleFretClick(numString, fret) {
    let { tabOutput } = this.state;

    tabOutput[numString - 1] = fret;

    this.setState({ tabOutput: tabOutput });
  }

  handleAddToTab(e) {
    this.props.handleAddToTab(this.state.tabOutput);
  }

  render() {
    return (
      <Grid fluid className="tabeditor-container">
        <Row className="fretboard-container">
          <Col xs={1}>
            <Row>
              <Col xs={8} className="controls">
                <Button label="Add" onClick={this.handleAddToTab} />
              </Col>
              <Col xs={4} className="string-labels">
                {STRINGS.map((string, stringIndex) =>
                  <Row end="xs" key={`s${stringIndex + 1}-label`}>
                    <Col xs>
                      <Label label={string} />
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </Col>

          <Col xs={11} className="fretboard">
            {STRINGS.map((string, stringIndex) =>
              <StringRow
                key={`s${stringIndex + 1}`}
                numString={stringIndex + 1}
                frets={FRETS}
                handleFretClick={this.handleFretClick}
              />)
            }
          </Col>
        </Row>
        <Row className="fret-labels">
          <Col xsOffset={1} xs={11}>
            <Row>
              {_.times(FRETS + 1, (fret) => <Col xs key={`s${fret}-label`}><Label label={fret} /></Col>)}
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
};
