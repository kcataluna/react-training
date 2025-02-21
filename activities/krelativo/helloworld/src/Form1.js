import React from "react";
import { Form, FormGroup, Label, Input, Container, Col } from "reactstrap";
class Form1 extends React.Component {
  elementListener(key, value) {
    this.props.elementListener(key, value);
  }

  imageListener(e){
    var file = e.target.files[0];
    var key = e.target.name;
    var reader = new FileReader();
    reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.props.elementListener(key, [reader.result]);
      }.bind(this);

  }

  render() {
    const imageStyle = {
      height: '100px',
      width: '100px'
    };
    return (
      <Container className="App">
        <h2>Form 1</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Input</Label>
              <Input
                type="input"
                name="inputText"
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
             Gwapa
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
              <Input
                type="file"
                name="fileChosen"
                id="exampleFile"
                onChange={e =>
                  this.imageListener(e)
                }
              />
            </FormGroup>
            <FormGroup>
              <img src={this.props.imageUrl} style={imageStyle} alt=""/>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Form1;
