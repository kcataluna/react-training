import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card, ListGroup, InputGroup, Button, FormControl } from 'react-bootstrap';

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "Code",
      items:
        ["Sleep", "Eat"],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAdd(event) {
    if (this.state.term) {
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
      });
    }
  }

  render() {
    return (
      <Card bg="light" border="warning">
        <Card.Header>
          {"To Do List"}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <InputGroup variant="warning" className="mb-3">
                <FormControl
                  placeholder="Things to do?"
                  name="term"
                  type="text"
                  value={this.state.term}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={this.handleAdd}>Add</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
          <List items={this.state.items} />
        </Card.Body>
      </Card>
    );
  }
}

const List = props => (
  <ListGroup>
    {
      props.items.map((item, index) => <ListGroup.Item variant="warning" key={index}>{item}</ListGroup.Item>)
    }
  </ListGroup>
);

export default TodoCard;