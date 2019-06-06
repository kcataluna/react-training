import React from "react";
import { Form, FormGroup, Label, Input, Container, Col } from "reactstrap";
class Form2 extends React.Component {
  render() {
    const radioButton1 = this.props.radioButton == "1";
    const radioButton2 = this.props.radioButton == "2";
    return (
      <Container className="App">
        <h2>Form 2</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="inputText"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.props.inputText}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input
                type="textarea"
                name="textArea"
                id="exampleText"
                value={this.props.textArea}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radioButton" checked={radioButton1} />{" "}
                batig nawng
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radioButton" checked={radioButton2} />{" "}
                gwapo
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="checkBox"
                  checked={this.props.checkBox}
                />{" "}
                Check me out
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <img src={this.props.imageUrl} />
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Form2;
