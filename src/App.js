import "./App.css";
import Chord from "./Chord";
import React, { Component } from "react";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: "14px"
        }}
      >
        <Chord chord={[null, 10, 10, 9, 12, null]} name="Cmaj7" />
        <Chord chord={[null, 8, 10, 9, 10, null]} />
        <Chord chord={[null, 8, 9, 7, 10, null]} />
        <Chord chord={[null, 8, 8, 6, 9, null]} />
        <Chord chord={[null, 3, 8, 6, 9, null]} />
        <Chord chord={[null, 3, 2, 0, 1, null]} />
        <Chord chord={[null, 3, 8, 6, 9, null]} />
      </div>
    );
  }
}

export default App;
