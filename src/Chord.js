import React from "react";
import _ from "lodash";

const strokeWidth = 0.08;
const fretScale = 1.2;
const fingerSize = 0.8;

const Fret = ({ fret }) => (
  <line
    x1={0}
    y1={fret * fretScale}
    x2={5}
    y2={fret * fretScale}
    stroke="black"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
  />
);

const String = ({ string, frets }) => (
  <line
    x1={string}
    y1={0}
    x2={string}
    y2={(frets - 1) * fretScale}
    stroke="black"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
  />
);

const Finger = ({ fret, string, frets }) => (
  <rect
    x={string - fingerSize / 2}
    y={(fret - fingerSize / 2) * fretScale + strokeWidth}
    width={fingerSize}
    height={fingerSize}
    rx={0.5}
    ry={0.5}
    stroke="black"
    fill="#333"
    strokeWidth={strokeWidth}
  />
);

export default ({ chord }) => {
  let min = _.chain(chord)
    .reject(_.isNull)
    .min()
    .value();
  let max = _.chain(chord)
    .reject(_.isNull)
    .max()
    .value();
  let frets = Math.max(6, max - min + 3);

  return (
    <svg
      viewBox={`-0.5 -0.5 5 ${frets + 1}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ border: "1px solid tomato", flexBasis: "25%" }}
    >
      {_.chain(new Array(frets))
        .fill()
        .map((_, fret) => <Fret key={fret} fret={fret} />)
        .value()}
      <text
        x={-1.25}
        y={1.5}
        style={{ fontSize: "1px", fontFamily: "monospace" }}
      >
        {min}
      </text>
      <String string={0} frets={frets} />
      <String string={1} frets={frets} />
      <String string={2} frets={frets} />
      <String string={3} frets={frets} />
      <String string={4} frets={frets} />
      <String string={5} frets={frets} />
      {_.map(
        chord,
        (fret, string) =>
          fret != null ? <Finger fret={fret - min + 1} string={string} /> : null
      )}
      {/* <Finger fret={2} string_from={4} string_to={5} /> */}
    </svg>
  );
};
