import ChordContainer from "./ChordContainer";
import ChordData from "./ChordData";
import ChordPure from "./ChordPure";
import React from "react";

const Chord = ({ from, notes }) => (
  <ChordContainer>
    {({ notes, addNote, removeNote, chord, setChord, hasNext, addNext }) => (
      <ChordData notes={notes} from={from}>
        {({ loading, error, data }) => (
          <ChordPure
            chord={chord}
            setChord={setChord}
            notes={notes}
            loading={loading}
            data={data}
            error={error}
            addNote={addNote}
            removeNote={removeNote}
            hasNext={hasNext}
            addNext={addNext}
            Chord={Chord}
          />
        )}
      </ChordData>
    )}
  </ChordContainer>
);

export default Chord;
