import NoteContainer from "./NoteContainer";
import NotePure from "./NotePure";
import React from "react";

export default ({
  note: originalNote,
  option: originalOption,
  onUpdate,
  onRemove
}) => (
  <NoteContainer note={originalNote} option={originalOption}>
    {({
      open,
      toggleOpen,
      note,
      option,
      octave,
      setNote,
      setOption,
      setOctave
    }) => (
      <NotePure
        note={note}
        setNote={setNote}
        option={option}
        setOption={setOption}
        octave={octave}
        setOctave={setOctave}
        open={open}
        onUpdate={onUpdate}
        onRemove={onRemove}
        toggleOpen={toggleOpen}
        originalNote={originalNote}
        originalOption={originalOption}
      />
    )}
  </NoteContainer>
);
