import Chord from "../Chord";
import React from "react";
import _ from "lodash";
import styled from "styled-components";

const Chords = styled.div``;

export default ({
  chords,
  addChord,
  removeChord,
  setChord,
  setNotes,
  setLoading
}) => (
  <Chords>
    {_.chain(chords)
      .map(({ id, notes }, i) => (
        <Chord
          key={id}
          notes={notes}
          from={_.chain(chords)
            .get(i - 1)
            .get("chord")
            .value()}
          addChord={() => addChord(i + 1)}
          removeChord={() => removeChord(i)}
          setChord={chord => setChord(i, chord)}
          setNotes={notes => setNotes(i, notes)}
          setLoading={loading => setLoading(i, loading)}
          loadingParent={_.map(chords, "loading")
            .slice(0, i)
            .reduce((a, b) => a || b, false)}
        />
      ))
      .value()}
  </Chords>
);
