import React, { Component, Fragment } from "react";
import Navbar from "../../common/components/Navbar";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import {
  addItem,
  getItems,
  deleteItem,
  editItem,
} from "../../actions/itemActions";
import Table from "./components/Table";

class DashboardContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.getItems();
  }

  logout = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    const {
      auth: { user },
      addItem,
      items,
      deleteItem,
      editItem,
    } = this.props;
    console.log(items, "items");
    return (
      <Fragment>
        <Navbar user={user} logout={this.logout} />
        <Table
          items={items}
          deleteItem={deleteItem}
          addItem={addItem}
          editItem={editItem}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
  items: state.item.items,
});

export default connect(mapStateToProps, {
  addItem,
  getItems,
  deleteItem,
  editItem,
  logout,
})(DashboardContainer);
