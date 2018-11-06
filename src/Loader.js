// github.com/sindresorhus/cli-spinners/blob/master/spinners.json

import React from "react";
import _ from "lodash";

export default class extends React.Component {
  state = {
    i: 0,
    message: _.chain([
      "Reticulating splines",
      "Loading",
      "Sieving possibilities",
      "Optimizing distances",
      "Permuting note sets",
      "Pondering possibilities",
      "Dotting Is and crossing Ts"
    ])
      .shuffle()
      .first()
      .value(),
    animation: [
      /* { spinner: "/", message: "." },
         * { spinner: "-", message: ".." },
         * { spinner: "\\", message: "..." },
         * { spinner: "|", message: ".." } */
      { spinner: "◜", message: "." },
      { spinner: "◝", message: ".." },
      { spinner: "◞", message: "..." },
      { spinner: "◟", message: ".." }
    ]
  };

  componentDidMount() {
    setInterval(() => this.next(), 150);
  }

  next() {
    this.setState({ i: (this.state.i + 1) % this.state.animation.length });
  }

  render() {
    return (
      <span>
        {this.state.animation[this.state.i].spinner}{" "}
        {this.state.message + this.state.animation[this.state.i].message}
      </span>
    );
  }
}
