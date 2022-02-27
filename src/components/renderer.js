import React, { PureComponent } from "react";
import moose from "../assets/moose-one.png";

class Moose extends PureComponent {
  render() {
    // Game sprite
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;

    // Actual game sprite
    return (
      <img
        src={moose}
        alt="An actual moose"
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y,
        }}
      />
    );
  }
}

export { Moose };
