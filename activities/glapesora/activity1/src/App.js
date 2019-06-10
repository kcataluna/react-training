import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Row, Col, Card, ListGroup, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import './App.css';

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
            <AppForm />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <LikesForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

class LikesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeText: "Food",
      likes: ["Chocolate Cake", "A puppy"],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    alert("fefef");
    this.setState({ [event.target.name]: event.target.value });
    
  }

  handleAdd(event) {
    // if (event.target.value) {
    //   let lists = this.state.likes;
    //   lists.push(event.target.value);
    //   this.setState({ likes: lists });
    // }
    // else {
    //   return;
    // }
  }

  render() {
    return (
      <Card bg="light" border="dark">
        <Card.Header>
          {"Things You Like"}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="A Thing you like"
                  aria-label="A Thing you like"
                  aria-describedby="basic-addon2"
                  name="likeText"
                  type="text"
                  defaultValue={this.state.likeText}
                  onchange={this.handleChange.bind(this)}
                  disabled={true}
                />
                <InputGroup.Append>
                  <Button disabled={true} variant="outline-secondary" onclick={this.handleAdd.bind(this)}>Add</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
          <ListGroup>
            {/* <LikesList likes={this.state.likes} /> */}
            
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

// function LikesList(likes) {

//   if (likes) {
//     const listItems = likes.map(function (like) {
//       return <ListGroup.Item>{like}</ListGroup.Item>;
//     });

//     return (
//       <ListGroup>
//         {listItems}
//       </ListGroup>
//     );
//   }
// }


class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Greg",
      middleName: "Moscare",
      lastName: "Lapesora",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Card bg="light" border="dark">
        <Card.Header>
          Informations
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" value={this.state.firstName} type="text" placeholder="Enter first name" onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <InfoOutput item={"First Name"} value={this.state.firstName} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="middleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control name="middleName" value={this.state.middleName} type="text" placeholder="Enter middle name" onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <InfoOutput item={"MIddle Name"} value={this.state.middleName} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" value={this.state.lastName} type="text" placeholder="Enter last name" onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <InfoOutput item={"Last Name"} value={this.state.lastName} />
            </Col>
          </Row>
          <Row>
            <Col>
              <NameOutput {...this.state} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

const InfoOutput = (props) => {
  return (
    <Form.Group controlId="middleName">
      <Form.Label>{"Set " + props.item}</Form.Label>
      <Form.Control value={props.value} type="text" readOnly={true} />
    </Form.Group>
  );
}

const NameOutput = (props) => {
  return (
    <Form.Group controlId="lastName">
      <Form.Label>{"Your Name"}</Form.Label>
      {
        props.lastName ?
          <Form.Control value={props.lastName + ", " + props.firstName + " " + props.middleName} type="text" readOnly={true} />
          : <Form.Control value={props.firstName + " " + props.middleName} type="text" readOnly={true} />
      }
    </Form.Group>
  );
}

export default App;
