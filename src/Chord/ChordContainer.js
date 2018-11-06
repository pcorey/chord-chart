import React from "react";
import _ from "lodash";

export default class extends React.Component {
  state = {
    notes: [],
    chord: undefined,
    hasNext: false
  };

  addNote = (note, without) => {
    this.setState({
      notes: _.chain(this.state.notes)
        .without(without)
        .concat(note)
        .uniq()
        .value()
    });
  };

  removeNote = note => {
    this.setState({
      notes: _.chain(this.state.notes)
        .without(note)
        .value()
    });
  };

  setChord = chord => this.setState({ chord });

  addNext = () => this.setState({ hasNext: true });

  render() {
    return this.props.children({
      removeNote: this.removeNote,
      addNote: this.addNote,
      notes: this.state.notes,
      chord: this.state.chord,
      setChord: this.setChord,
      hasNext: this.state.hasNext,
      addNext: this.addNext
    });
  }
}
