import NoteContainer from "./NoteContainer";
import NotePure from "./NotePure";
import React from "react";

export default ({
  note: originalNote,
  optional: originalOptional,
  onUpdate,
  onRemove
}) => (
  <NoteContainer note={originalNote} optional={originalOptional}>
    {({
      open,
      toggleOpen,
      note,
      optional,
      octave,
      setNote,
      setOptional,
      setOctave
    }) => (
      <NotePure
        note={note}
        setNote={setNote}
        optional={optional}
        setOptional={setOptional}
        octave={octave}
        setOctave={setOctave}
        open={open}
        onUpdate={onUpdate}
        onRemove={onRemove}
        toggleOpen={toggleOpen}
        originalNote={originalNote}
        originalOptional={originalOptional}
      />
    )}
  </NoteContainer>
);
