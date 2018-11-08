import ChordContainer from "./ChordContainer";
import ChordData from "./ChordData";
import ChordPure from "./ChordPure";
import React from "react";

const Chord = ({ from, notes, presets, loadingParent }) => (
  <ChordContainer presets={presets}>
    {({
      notes,
      addNote,
      removeNote,
      chord,
      setChord,
      hasNext,
      addNext,
      pressKey,
      releaseKey,
      presets,
      preset,
      setPreset,
      fluidity,
      playability,
      setFluidity,
      setPlayability,
      invertedness,
      setInvertedness,
      spread,
      setSpread,
      reach,
      setReach,
      allowOpen,
      setAllowOpen
    }) => (
      <ChordData
        notes={notes}
        from={from}
        fluidity={fluidity}
        playability={playability}
        invertedness={invertedness}
        spread={spread}
        reach={reach}
        allowOpen={allowOpen}
      >
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
            pressKey={pressKey}
            releaseKey={releaseKey}
            presets={presets}
            preset={preset}
            setPreset={setPreset}
            fluidity={fluidity}
            setFluidity={setFluidity}
            playability={playability}
            setPlayability={setPlayability}
            invertedness={invertedness}
            setInvertedness={setInvertedness}
            spread={spread}
            setSpread={setSpread}
            reach={reach}
            setReach={setReach}
            loadingParent={loadingParent}
            allowOpen={allowOpen}
            setAllowOpen={setAllowOpen}
          />
        )}
      </ChordData>
    )}
  </ChordContainer>
);

export default Chord;
