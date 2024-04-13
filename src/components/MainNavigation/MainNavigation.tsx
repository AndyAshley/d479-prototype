import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/taniti.svg";
import { Button } from "react-bootstrap";
const MainNavigation = () => {
  return (
    <Navbar expand="lg border-bottom">
      <Container className="align-items-end">
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand">
            <img
              src="../images/taniti-logo.png"
              alt="Taniti Logo"
              width="125"
              height="132"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="me-auto align-items-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/cuisine"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Cuisine
            </NavLink>
            <NavLink
              to="/lodging"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lodging
            </NavLink>
            <NavLink
              to="/entertainment"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Entertainment
            </NavLink>
            <NavLink
              to="/locations"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Locations
            </NavLink>
            <NavLink
              to="/transportation"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Transportation
            </NavLink>
          </Nav>
          <Button variant="outline-primary">Book Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
