import React from "react";
import Gif from "./Gif";
class Side extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <p>{this.props.side}</p>
        </h1>
        <div>
          <Gif gif={this.props.gif} />
        </div>
      </div>
    );
  }
}

export default Side;
