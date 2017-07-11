const cn = require('classnames');
const _ = require('lodash');

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
const frets = 17;
const dots = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleDots = [12, 24];

let Label = ({ label }) => (
  <div className="label">{label}</div>
);

let StringRow = ({ numString, frets, onClickFretHandler }) => {
  return (
    <div className="string">
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
    </div>
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
    const dotClass = cn({
      'dot-top': dotTop,
      'dot-bot': dotBottom
    });
    const fretClasses = cn({
      'fret': true,
      'open': fret === 0
    });

    return (
      <span className={fretClasses} onClick={this.onClick}><span className={dotClass}>&nbsp;</span></span>
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
      <div className="fretboard-container">
        <div className="string-labels">
          {strings.map((string, stringIndex) => <Label label={string} key={`s${stringIndex + 1}-label`} />)}
        </div>

        <div className="fretboard">
          {strings.map((string, stringIndex) =>
            <StringRow
              key={`s${stringIndex + 1}`}
              numString={stringIndex + 1}
              frets={frets}
              onClickFretHandler={this.onClickFretHandler}
            />)
          }
        </div>

        <div className="fret-labels">
          <div className="offset-label">&nbsp;</div>
          {_.times(frets + 1, (fret) => <Label label={fret} key={`s${fret}-label`} />)}
        </div>
      </div>
    );
  }
};
