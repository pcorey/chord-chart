import ChordBookContainer from "./ChordBookContainer";
import ChordBookPure from "./ChordBookPure";
import React from "react";

export default ({ chords, value, setChord }) => (
  <ChordBookContainer>
    {({ open, toggleOpen, onChange, drop, setDrop }) => (
      <ChordBookPure
        chords={chords}
        open={open}
        toggleOpen={toggleOpen}
        setChord={setChord}
        drop={drop}
        setDrop={setDrop}
      />
    )}
  </ChordBookContainer>
);
