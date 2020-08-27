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
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

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
    const { email, password } = this.state;

    //Attempt to login
    this.props.login({ email, password });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-body">
          <Container>
            <header className="form-header">Login Page</header>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit} className="form">
              <FormGroup style={{ textAlign: "left" }}>
                <Row className="form-row">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.onChange}
                  />
                </Row>
                <Row className="form-row">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                </Row>

                <Row className="form-row">
                  <Button color="success" block>
                    Login
                  </Button>
                </Row>
                <Link to="/register">
                  <span>New User? Regsiter Now</span>
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

export default connect(mapStateToProps, { login, clearErrors })(LoginContainer);
