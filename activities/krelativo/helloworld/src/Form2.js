import React from "react";
import { Form, FormGroup, Label, Input, Container, Col } from "reactstrap";
class Form2 extends React.Component {
  render() {
    const radioButton1 = this.props.radioButton === "1";
    const radioButton2 = this.props.radioButton === "2";
    const imageStyle = {
      height: '300px',
      width: '500px'
    };
    return (
      <Container className="App">
        <h2>Form 2</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <img src={this.props.fileChosen} style={imageStyle} alt=""/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Input</Label>
              <Input
                type="input"
                name="inputText"
                id="exampleEmail"
                value={this.props.inputText}
                readOnly
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
                readOnly
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radioButton" checked={radioButton1} readOnly/>{" "}
                Gwapa
              </Label>
            </FormGroup>
           </Col> 
           <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radioButton" checked={radioButton2} readOnly/>{" "}
                Gwapo
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
                  readOnly
                />{" "}
                Check me out
              </Label>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Form2;
