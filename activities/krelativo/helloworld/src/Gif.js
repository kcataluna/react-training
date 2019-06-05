import React from "react";
import GifPlayer from "react-gif-player";
class Gif extends React.Component {
  render() {
    return (
      <div>
        <GifPlayer gif={this.props.gif} autoplay={true} />
      </div>
    );
  }
}

export default Gif;
