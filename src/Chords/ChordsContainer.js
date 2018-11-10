import React from "react";
import _ from "lodash";

const newChord = () => ({
  id: Math.random(),
  loading: false
});

export default class extends React.Component {
  state = {
    chords: window.location.hash
      ? JSON.parse(decodeURIComponent(window.location.hash.substr(1)))
      : [newChord()]
  };

  setChords = chords => {
    /* window.location.hash = JSON.stringify(chords); */
    this.setState({ chords });
  };

  addChord = i => {
    this.setChords([
      ...this.state.chords.slice(0, i),
      newChord(),
      ...this.state.chords.slice(i)
    ]);
  };

  removeChord = i => {
    let chords = [
      ...this.state.chords.slice(0, i),
      ...this.state.chords.slice(i + 1)
    ];
    if (_.isEmpty(chords)) {
      chords.push(newChord());
    }
    this.setChords(chords);
  };

  setChord = (i, chord) =>
    this.setChords(_.set(this.state.chords, `${i}.chord`, chord));

  setNotes = (i, notes) =>
    this.setChords(_.set(this.state.chords, `${i}.notes`, notes));

  setLoading = (i, loading) =>
    loading != _.get(this.state.chords, `${i}.loading`) &&
    this.setChords(_.set(this.state.chords, `${i}.loading`, loading));

  render() {
    return this.props.children({
      chords: this.state.chords,
      addChord: this.addChord,
      removeChord: this.removeChord,
      setChord: this.setChord,
      setNotes: this.setNotes,
      setLoading: this.setLoading
    });
  }
}
