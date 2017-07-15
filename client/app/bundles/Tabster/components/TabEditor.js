const cn = require('classnames');
const _ = require('lodash');

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
const frets = 17;
const dots = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleDots = [12, 24];

let Label = ({ label }) => (
  <span>{label}</span>
);

let StringRow = ({ numString, frets, onClickFretHandler }) => {
  return (
    <Row className="string">
      {_.times(frets + 1, (fret) => {
        const hasDot = _.includes(dots, fret);
        const hasDotTop = hasDot && numString === strings.length / 2;
        const hasDotBottom = hasDot && numString === strings.length / 2 + 1;

        const isTopHigherDoubleDotString = numString === strings.length / 2 - 1;
        const isBotHigherDoubleDotString = numString === strings.length / 2;
        const isTopLowerMiddleString = numString === strings.length / 2 + 1;
        const isBotLowerMiddleString = numString === strings.length / 2 + 2;

        const hasDoubleDot = _.includes(doubleDots, fret);
        const hasDoubleDotTop = hasDoubleDot && (isTopHigherDoubleDotString || isTopLowerMiddleString);
        const hasDoubleDotBottom = hasDoubleDot && (isBotHigherDoubleDotString || isBotLowerMiddleString);

        return (
          <Fret
            key={`s${numString}-f${fret}`}
            numString={numString}
            fret={fret}
            dotTop={hasDotTop || hasDoubleDotTop}
            dotBottom={hasDotBottom || hasDoubleDotBottom}
            onClickFretHandler={onClickFretHandler}
          />
        )}
      )}
    </Row>
  );
};

class Fret extends React.Component {
  static propTypes = {
    fret: PropTypes.number,
    numString: PropTypes.number,
    dotTop: PropTypes.bool,
    dotBottom: PropTypes.bool,
    onClickFretHandler: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.onClickFretHandler(this.props.numString, this.props.fret);
  }

  render() {
    const { fret, dotTop, dotBottom } = this.props;
    const fretClasses = cn({
      'fret': true,
      'open': fret === 0,
      'dot-top': dotTop,
      'dot-bot': dotBottom
    });

    return (
      <Col xs className={fretClasses} onClick={this.onClick}>&nbsp;</Col>
    );
  }
};

export default class TabEditor extends React.Component {
  constructor() {
    super();
    this.onClickFretHandler = this.onClickFretHandler.bind(this);
  }

  onClickFretHandler(numString, fret) {
    console.log(`s${numString}f${fret}`)
  }

  render() {
    return (
      <Grid fluid>
        <Row className="fretboard-container">
          <Col xs={1} className="string-labels">
            {strings.map((string, stringIndex) =>
              <Row end="xs" key={`s${stringIndex + 1}-label`}>
                <Col xs>
                  <Label label={string} />
                </Col>
              </Row>
            )}
          </Col>

          <Col xs={11} className="fretboard">
            {strings.map((string, stringIndex) =>
              <StringRow
                key={`s${stringIndex + 1}`}
                numString={stringIndex + 1}
                frets={frets}
                onClickFretHandler={this.onClickFretHandler}
              />)
            }
          </Col>
        </Row>
        <Row className="fret-labels">
          <Col xsOffset={1} xs={11}>
            <Row>
              {_.times(frets + 1, (fret) => <Col xs key={`s${fret}-label`}><Label label={fret} /></Col>)}
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
};
