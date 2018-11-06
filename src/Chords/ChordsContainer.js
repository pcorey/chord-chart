import React from "react";
import _ from "lodash";

export default class extends React.Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return this.props.children({
      open: this.state.open,
      toggleOpen: this.toggleOpen
    });
  }
}
