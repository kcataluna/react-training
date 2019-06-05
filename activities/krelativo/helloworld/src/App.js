import React from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Button from "./Buttons";
import Side from "./Side";
import Ending from "./Ending";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: null,
      gif: null
    };
    this.showGood = this.showGood.bind(this);
    this.showBad = this.showBad.bind(this);
  }

  showGood() {
    const side =
      "Kobe is a very handsome man. Girls would do anything to date him but he prefers not to because he's a good guy and a wise man. The Wisest man the world has ever known. He always say never give up on things you love, even though its hard.";
    this.setState({
      side: side,
      gif: "https://media.giphy.com/media/elPiadNl05XWg/giphy.gif"
    });
  }

  showBad() {
    const side = "Nope, he doesn't have one. Sorry to disappoint you.";
    this.setState({
      side: side,
      gif: "https://media.giphy.com/media/VGDF7TITgLm2i5Xfeu/giphy.gif"
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <HelloWorld />
        </div>
        <div>
          <Button definition={"Good side of Kobe"} onClick={this.showGood} />
        </div>
        <div>
          <Button definition={"Bad side of Kobe"} onClick={this.showBad} />
        </div>
        <div>
          <Side side={this.state.side} gif={this.state.gif} />
        </div>
        <div>
          <Ending />
        </div>
      </div>
    );
  }
}

export default App;
