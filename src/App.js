import "./App.css";
import Chord from "./Chord";
import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const App = styled.div`
  font-size: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* justify-content: space-around; */
  flex-flow: row wrap;
`;

const randomChord = chord => (
  <Chord
    chord={_.chain(_.range(0, 6))
      .map(string => _.random(-4, 4, false))
      .map(fret => (fret >= 0 ? fret : null))
      .thru(chord => {
        let offset = _.random(0, 7, false);
        return _.map(chord, fret => (fret == null ? fret : fret + offset));
      })
      .tap(console.log)
      .value()}
  />
);

export default () => (
  <App>
    <Chord chord={[null, 10, 10, 9, 12, null]} />
    <Chord chord={[null, 8, 10, 9, 10, null]} />
    <Chord chord={[null, 3, 8, 6, 9, null]} />
    <Chord chord={[null, 3, 2, 0, 1, null]} />
    {/* <Chord
        chord={[null, [10, 2], [10, 3], [9, 1], [12, 4], null]}
        name="Cmaj7"
        /> */}
    {_.chain(200)
      .range()
      .map(() => randomChord())
      .value()}
  </App>
);
