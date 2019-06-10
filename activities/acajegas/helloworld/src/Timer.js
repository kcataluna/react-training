import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date().toLocaleTimeString(),
      name:'',
      email:'',
    }

    this.update = this.update.bind(this);
  }
  
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleTimeString()
      })
    },1000)
  }
  
  update(event) {
    const val = event.target.name;
    this.setState({ val: event.target.val});
  };
  
  
  render() {
    return (
      <div>
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <h2>{this.state.curTime}</h2>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-5 card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" onChange={this.update}/>
                </div>
                <div class="form-group">
                  <label for="emailLabel">Email address</label>
                  <input type="email" class="form-control" id="emailLabel" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>            
                <div class="form-group">
                  <label for="passwordLabel">Password</label>
                  <input type="password" class="form-control" id="passwordLabel" placeholder="Password" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="checkBoxLabel" />
                  <label class="form-check-label" for="checkBoxLabel">Check me out</label>
                </div>
                <div class="form-group">
                  <label for="selectLabel">Example select</label>
                  <select class="form-control" id="selectLabel">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div class="offset-sm-2 col-sm-5 card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="nameLabel">Name</label>
                  <input type="text" class="form-control" id="nameLabel" value={this.state.name} disable/>
                </div>
                <div class="form-group">
                  <label for="emailLabel">Email address</label>
                  <input type="email" class="form-control" id="emailLabel" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>            
                <div class="form-group">
                  <label for="passwordLabel">Password</label>
                  <input type="password" class="form-control" id="passwordLabel" placeholder="Password" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="checkBoxLabel" />
                  <label class="form-check-label" for="checkBoxLabel">Check me out</label>
                </div>
                <div class="form-group">
                  <label for="selectLabel">Example select</label>
                  <select class="form-control" id="selectLabel">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Timer;