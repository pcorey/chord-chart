import ChordsContainer from "./ChordsContainer";
import ChordsPure from "./ChordsPure";
import React from "react";

export default ({ chords, value, setChord }) => (
  <ChordsContainer>
    {({ chords, addChord, removeChord, setChord, setNotes, setLoading }) => (
      <ChordsPure
        chords={chords}
        addChord={addChord}
        removeChord={removeChord}
        setChord={setChord}
        setNotes={setNotes}
        setLoading={setLoading}
      />
    )}
  </ChordsContainer>
);
