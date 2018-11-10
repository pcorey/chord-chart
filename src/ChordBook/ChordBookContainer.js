import React from "react";
import _ from "lodash";

export default class extends React.Component {
  state = {
    open: false,
    drop: 0
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  setDrop = drop => {
    this.setState({
      drop
    });
  };

  render() {
    return this.props.children({
      open: this.state.open,
      toggleOpen: this.toggleOpen,
      drop: this.state.drop,
      setDrop: this.setDrop
    });
  }
}
