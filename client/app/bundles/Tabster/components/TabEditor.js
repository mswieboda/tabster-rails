const cn = require('classnames');
const _ = require('lodash');

import React from 'react';
import { Link } from 'react-router-dom';

const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
const frets = 17;
const dots = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleDots = [12, 24];

let StringLabel = ({ label }) => (
  <div className="label">{label}</div>
);

let StringRow = ({ numString, frets }) => {
  return (
    <div className="string">
      {_.times(frets, (fretIndex) => {
        const fret = fretIndex + 1;

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
            key={`s${numString}-f${fretIndex + 1}`}
            fret={fret}
            dotTop={hasDotTop || hasDoubleDotTop}
            dotBottom={hasDotBottom || hasDoubleDotBottom}
          />
        )}
      )}
    </div>
  );
};

let Fret = ({ fret, dotTop, dotBottom }) => {
  const dotClass = cn({
    'dot-top': dotTop,
    'dot-bot': dotBottom
  });

  return (
    <span className="fret"><span className={dotClass}>&nbsp;</span></span>
  );
};

let TabEditor = () => {
  return (
    <div className="fretboard-container">
      <div className="string-labels">
        {strings.map((string, stringIndex) => <StringLabel label={string} key={`s${stringIndex + 1}-label`} />)}
      </div>

      <div className="fretboard">
        {strings.map((string, stringIndex) =>
          <StringRow numString={stringIndex + 1} frets={frets} key={`s${stringIndex + 1}`} />)
        }
      </div>
    </div>
  );
}

export default TabEditor;
