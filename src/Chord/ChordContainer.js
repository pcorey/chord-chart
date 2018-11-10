import React from "react";
import _ from "lodash";
import presets from "../presets";

export default class extends React.Component {
  state = {
    presets,
    preset: this.props.preset || _.first(Object.keys(presets)),
    fluidity: _.chain(presets)
      .get(this.props.preset || _.first(Object.keys(presets)))
      .get("fluidity")
      .value(),
    playability: _.chain(presets)
      .get(this.props.preset || _.first(Object.keys(presets)))
      .get("playability")
      .value(),
    invertedness: _.chain(presets)
      .get(this.props.preset || _.first(Object.keys(presets)))
      .get("invertedness")
      .value(),
    spread: _.chain(presets)
      .get(this.props.preset || _.first(Object.keys(presets)))
      .get("spread")
      .value(),
    reach: _.chain(presets)
      .get(this.props.preset || _.first(Object.keys(presets)))
      .get("reach")
      .value(),
    allowOpen: true,
    notes: [],
    heldNotes: [],
    keysPressed: 0,
    chord: undefined,
    hasNext: false
  };

  toggleAllowOpen = () => this.setState({ allowOpen: !this.state.allowOpen });

  setPreset = preset => {
    this.setState({
      preset: preset,
      fluidity: _.chain(presets)
        .get(preset)
        .get("fluidity")
        .value(),
      playability: _.chain(presets)
        .get(preset)
        .get("playability")
        .value(),
      invertedness: _.chain(presets)
        .get(preset)
        .get("invertedness")
        .value(),
      spread: _.chain(presets)
        .get(preset)
        .get("spread")
        .value(),
      reach: _.chain(presets)
        .get(preset)
        .get("reach")
        .value()
    });
  };

  setFluidity = fluidity => this.setState({ fluidity });
  setPlayability = playability => this.setState({ playability });
  setInvertedness = invertedness => this.setState({ invertedness });
  setSpread = spread => this.setState({ spread });
  setReach = reach => this.setState({ reach });

  pressKey = key => {
    switch (key) {
      case "a":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(0)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "w":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(1)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "s":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(2)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "e":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(3)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "d":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(4)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "f":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(5)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "t":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(6)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "g":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(7)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "y":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(8)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "h":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(9)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "u":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(10)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "j":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(11)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "k":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(0)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "o":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(1)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "l":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(2)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "p":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(3)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case ";":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(4)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      case "'":
        return this.setState({
          heldNotes: _.chain(this.state.heldNotes)
            .concat(5)
            .uniq()
            .value(),
          keysPressed: this.state.keysPressed + 1
        });
      default:
        return undefined;
    }
  };

  releaseKey = () => {
    return this.setState({
      keysPressed: Math.max(0, this.state.keysPressed - 1),
      heldNotes: this.state.keysPressed == 1 ? [] : this.state.heldNotes,
      notes:
        this.state.keysPressed == 1 ? this.state.heldNotes : this.state.notes
    });
  };

  addNote = (note, without) => {
    const getNote = n => (_.isArray(n) ? n[1] % 12 : n % 12);
    let notes = _.chain(this.state.notes)
      .reject(n => getNote(n) == getNote(note))
      .concat([note])
      .uniq()
      .value();
    this.setState({
      notes
    });
    this.props.setNotes(notes);
  };

  removeNote = note => {
    this.setState({
      notes: _.chain(this.state.notes)
        .without(note)
        .value()
    });
  };

  setChord = chord => {
    this.props.setChord(chord);
    this.setState({ chord });
  };

  addNext = () => this.setState({ hasNext: true });

  render() {
    return this.props.children({
      removeNote: this.removeNote,
      addNote: this.addNote,
      notes: this.state.notes,
      chord: this.state.chord,
      setChord: this.setChord,
      hasNext: this.state.hasNext,
      addNext: this.addNext,
      pressKey: this.pressKey,
      releaseKey: this.releaseKey,
      presets: this.state.presets,
      preset: this.state.preset,
      setPreset: this.setPreset,
      fluidity: this.state.fluidity,
      playability: this.state.playability,
      invertedness: this.state.invertedness,
      spread: this.state.spread,
      reach: this.state.reach,
      setFluidity: this.setFluidity,
      setPlayability: this.setPlayability,
      setInvertedness: this.setInvertedness,
      setSpread: this.setSpread,
      setReach: this.setReach,
      allowOpen: this.state.allowOpen,
      setAllowOpen: this.setAllowOpen
    });
  }
}
