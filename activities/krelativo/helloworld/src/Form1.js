import React from "react";
import { Form, FormGroup, Label, Input, Container, Col } from "reactstrap";
class Form1 extends React.Component {
  elementListener(key, value) {
    this.props.elementListener(key, value);
  }

  render() {
    return (
      <Container className="App">
        <h2>Form 1</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="inputText"
                id="exampleEmail"
                placeholder="myemail@email.com"
                onChange={e =>
                  this.elementListener(e.target.name, e.target.value)
                }
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
                onChange={e =>
                  this.elementListener(e.target.name, e.target.value)
                }
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radioButton"
                  value="1"
                  onChange={e =>
                    this.elementListener(e.target.name, e.target.value)
                  }
                />{" "}
                batig nawng
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radioButton"
                  value="2"
                  onChange={e =>
                    this.elementListener(e.target.name, e.target.value)
                  }
                />{" "}
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
                  onChange={e =>
                    this.elementListener(e.target.name, e.target.checked)
                  }
                />{" "}
                Check me out
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input
                type="file"
                name="fileChosen"
                id="exampleFile"
                onChange={e =>
                  this.elementListener(e.target.name, e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <img src={this.props.imageUrl} />
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Form1;
