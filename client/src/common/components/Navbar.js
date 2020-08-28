import React from "react";
import {
  NavLink,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

export default ({ user, logout }) => {
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand>Meal Manager</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <span className="navbar-text mr-3">
                <strong>{user ? `Welcome ${user.name}` : ""}</strong>
              </span>
            </NavItem>
            <NavItem>
              <NavLink onClick={logout} href="#">
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
