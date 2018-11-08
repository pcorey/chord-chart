import React from "react";
import _ from "lodash";

export default class extends React.Component {
  state = {
    open: false,
    note: this.props.note || 0,
    optional: this.props.optional || false,
    octave: Math.floor((this.props.note || 0) / 12)
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  setNote = note =>
    this.setState({
      note: this.state.octave == "Any" ? note : this.state.octave * 12 + note
    });
  setOptional = optional => this.setState({ optional });
  setOctave = octave =>
    this.setState({
      octave,
      note:
        octave == "Any"
          ? this.state.note % 12
          : this.state.note % 12 + 12 * (parseInt(octave) + 1)
    });

  render() {
    return this.props.children({
      open: this.state.open,
      toggleOpen: this.toggleOpen,
      note: this.state.note,
      setNote: this.setNote,
      optional: this.state.optional,
      setOptional: this.setOptional,
      octave: this.state.octave,
      setOctave: this.setOctave
    });
  }
}
