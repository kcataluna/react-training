import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card, Form } from 'react-bootstrap';

class InfoCard extends Component {
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
            <InfoInput label="First Name" name="firstName" value={this.state.firstName} type="text" placeholder="Enter first name" handleChange={this.handleChange} />
            <InfoOutput item={"First Name"} value={this.state.firstName} />
          </Row>
          <Row>
            <InfoInput label="Middle Name" name="middleName" value={this.state.middleName} type="text" placeholder="Enter middle name" handleChange={this.handleChange} />
            <InfoOutput item={"MIddle Name"} value={this.state.middleName} />
          </Row>
          <Row>
            <InfoInput label="Last Name" name="lastName" value={this.state.lastName} type="text" placeholder="Enter last name" handleChange={this.handleChange} />
            <InfoOutput item={"Last Name"} value={this.state.lastName} />
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

const InfoInput = (props) => {
  return (
    <Col>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control name={props.name} value={props.value} type={props.type}
          placeholder={props.placeholder} onChange={props.handleChange} />
      </Form.Group>
    </Col>
  );
}

const InfoOutput = (props) => {
  return (
    <Col>
      <Form.Group>
        <Form.Label>{"Set " + props.item}</Form.Label>
        <Form.Control value={props.value} type="text" readOnly={true} />
      </Form.Group>
    </Col>
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

export default InfoCard;