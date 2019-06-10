import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

class ClockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 1000,
      time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
      today: new Date().toLocaleString('en-US', { weekday:'long', month: 'long', day: 'numeric', year: 'numeric'})
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), this.state.interval);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({ 
      time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
      today: new Date().toLocaleString('en-US', { weekday:'long', month: 'long', day: 'numeric', year: 'numeric'})
    });
  }

  render() {
    return (
      <Card bg="primary" text="white">
        <Card.Header> {"Time & Date Now"} </Card.Header>
        <Card.Body>
          <Card.Title>
            {this.state.time}
          </Card.Title>
          <Card.Text>
            {this.state.today}
          </Card.Text>
        </Card.Body >
      </Card >
    );
  }
}
export default ClockCard;