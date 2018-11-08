import React from "react";
import _ from "lodash";

export default class extends React.Component {
  state = {
    open: false,
    value: this.props.value
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  setValue = value => {
    this.setState({
      value
    });
  };

  render() {
    return this.props.children({
      open: this.state.open,
      value: this.state.value,
      toggleOpen: this.toggleOpen,
      setValue: this.setValue
    });
  }
}
