import React from 'react';
import logo from './logo.svg';
import Panel from './Panel';
import DisplayImage from './DisplayImage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null,
      description: null,
      gifUrl: null,
      imgUrl: null,
      quote: null
    };

    this.handsome = this.handsome.bind(this);
    this.extra = this.extra.bind(this);
    this.lifeQuote = this.lifeQuote.bind(this);
  }

  extra() {
    return <h6 onClick={this.lifeQuote}>component being a component, living his own life. (bonus click me)</h6>;
  }

  lifeQuote() {
    const quote = "sbren sbeve";
    const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyNxC2xZWfcN9s_svSkdivZK8aSyruo2HNf_tmNxA9r9uVfy_";

    this.setState({ imgUrl: imgUrl, quote: quote });
  }

  handsome() {
    const word = "hand·some /ˈhan(t)səm/";
    const description = "1. hand + some person = handsome.";
    const gifUrl = "https://media.giphy.com/media/HT4IFvKvQwhCE/giphy.gif";

    this.setState({ word: word, description: description, gifUrl: gifUrl });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handsome}>The meaning of handsome</button>
        <br />
        <Panel word={this.state.word} gifUrl={this.state.gifUrl} description={this.state.description} />
        {this.extra()}

        <DisplayImage url={this.state.imgUrl} quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
