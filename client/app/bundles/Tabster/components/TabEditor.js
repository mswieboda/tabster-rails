const cn = require('classnames');
import React from 'react';
import { Link } from 'react-router-dom';

const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
const frets = [
  { n: 1 },
  { n: 2 },
  { n: 3, dot: true },
  { n: 4 },
  { n: 5, dot: true },
  { n: 6 },
  { n: 7, dot: true },
  { n: 8 },
  { n: 9, dot: true },
  { n: 10 },
  { n: 11 },
  { n: 12, dot: true },
  { n: 13 },
  { n: 14, dot: true },
  { n: 15 },
  { n: 16, dot: true },
  { n: 17 },
];
const dots = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleDots = [12, 24];

let StringLabel = ({ label }) => (
  <div className="label">{label}</div>
);

let StringRow = ({ string, frets }) => {
  return (
    <div className="string">
      {frets.map(fret =>
        <Fret
          key={`s${string}-f${fret.n}`}
          fret={fret}
          dot
          doubleDot
        />
      )}
    </div>
  );
};

let Fret = ({ n }, { dot }, { doubleDot }) => {
  const classes = cn({
    fret: true,
    dot: dot,
    'double-dot': doubleDot
  });

  return (<span className={classes}>&nbsp;</span>);
};

let TabEditor = () => {
  return (
    <div className="fretboard-container">
      <div className="string-labels">
        {strings.map(string => <StringLabel label={string} key={`s${string}-label`} />)}
      </div>

      <div className="fretboard">
        {strings.map(string => <StringRow string={string} frets={frets} key={`s${string}`} />)}
      </div>
    </div>
  );
}

export default TabEditor;
