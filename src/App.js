import "./App.css";
import Chord from "./Chord";
import React, { Component } from "react";
import styled from "styled-components";

const App = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <App>
    <Chord chord={[null, 10, 10, 9, 12, null]} />
    <Chord chord={[null, 8, 10, 9, 10, null]} />
    <Chord chord={[null, 8, 9, 7, 10, null]} />
    <Chord chord={[null, 8, 8, 6, 9, null]} />
    <Chord chord={[null, 3, 8, 6, 9, null]} />
    <Chord chord={[null, 3, 2, 0, 1, null]} />
    <Chord chord={[null, 3, 8, 6, 9, null]} />
    <Chord
      chord={[null, [10, 2], [10, 3], [9, 1], [12, 4], null]}
      name="Cmaj7"
    />
  </App>
);
