import React, { Component } from "react";
import Navbar from "../../common/components/Navbar";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

class DashboardContainer extends Component {
  state = {};

  logout = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    const {
      auth: { user },
    } = this.props;
    return <Navbar user={user} logout={this.logout} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { logout })(DashboardContainer);
