import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Alert,
  Container,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class RegisterContainer extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    //IF authenticated
    if (isAuthenticated) {
      //Clear Errors
      this.props.clearErrors();
      this.props.history.push("/dashboard");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    //Create new user
    const newUser = {
      name,
      email,
      password,
    };

    //Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-body">
          <Container>
            <header className="form-header">Register Page</header>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit} className="form">
              <FormGroup style={{ textAlign: "left" }}>
                <Row className="form-row">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="mb-3"
                    onChange={this.onChange}
                  />
                </Row>
                <Row className="form-row">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mb-3"
                    onChange={this.onChange}
                  />
                </Row>
                <Row className="form-row">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="mb-3"
                    onChange={this.onChange}
                  />
                </Row>
                <Row className="form-row">
                  <Button color="success" block>
                    Register
                  </Button>
                </Row>
                <Link to="/login">
                  <span>Already registered? Login</span>
                </Link>
              </FormGroup>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterContainer
);
