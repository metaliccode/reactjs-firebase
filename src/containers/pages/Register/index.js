import React, { Component } from "react";
import { Label, FormGroup, Input, Card, Button, CardBody } from "reactstrap";
import firebase from "../../../config/firebase";

export class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    // console.log(this.state.email);
    // console.log(this.state.password);
    const { email, password } = this.state;
    console.log("data before : ", email, password);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  render() {
    return (
      <div>
        <Card className="container col-md-4">
          <h1 className="container text-center">Register Halaman</h1>
          <CardBody>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="text"
                name="email"
                id="Email"
                placeholder="Enter Email ..."
                onChange={this.handleChangeText}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="Enter Password ..."
                onChange={this.handleChangeText}
              />
            </FormGroup>
            <div className="mt-3">
              <Button color="primary" onClick={this.handleRegisterSubmit}>
                Submit
              </Button>{" "}
              <Button color="warning">Go to Dashboard</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Register;
