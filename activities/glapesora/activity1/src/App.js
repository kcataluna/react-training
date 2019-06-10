import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import InfoCard from './InfoCard';
import TodoCard from './TodoCard';
import ClockCard from './ClockCard';

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="light">
          <Navbar.Brand href="#home">
            {'Hello World!'}
          </Navbar.Brand>
        </Navbar>
        <br />
        <Row>
          <Col>
            <InfoCard />
          </Col>
          <Col>
            <ClockCard />
            <br />
            <TodoCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
