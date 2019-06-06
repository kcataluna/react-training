import React from "react";
import "./App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      textArea: "",
      checkBox: false,
      radioButton: "1",
      fileChosen: ""
    };
    this.elementListener = this.elementListener.bind(this);
  }

  elementListener(key, value) {
    this.setState({
      [key]: value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Form1
            elementListener={this.elementListener}
            imageUrl={this.state.fileChosen}
          />
        </div>
        <div>
          <Form2 {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
