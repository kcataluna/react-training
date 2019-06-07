import React from "react";
import "./App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Timer from "./Timer";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      textArea: "",
      checkBox: false,
      radioButton: "",
      fileChosen: null
    };
    this.elementListener = this.elementListener.bind(this);
  }

  elementListener(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const form1Style = {
      float: 'left',
      marginLeft:'200px'
    }
    const form2Style = {
      marginRight: '100px',
      float: 'right'
    }
    return (
      <div className="App">
      <div>
        <Timer/>
        </div>
        <div style={form1Style}>
          <Form1
            elementListener={this.elementListener}
            imageUrl={this.state.fileChosen}
          />
        </div>
        <div style={form2Style}>
          <Form2 {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
