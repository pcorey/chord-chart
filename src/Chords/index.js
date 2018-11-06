import ChordsContainer from "./ChordsContainer";
import ChordsPure from "./ChordsPure";
import React from "react";

export default ({ chords, value, setChord }) => (
  <ChordsContainer>
    {({ open, toggleOpen, onChange, value, setValue }) => (
      <ChordsPure
        chords={chords}
        open={open}
        toggleOpen={toggleOpen}
        setChord={setChord}
      />
    )}
  </ChordsContainer>
);
