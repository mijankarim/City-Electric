import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  const { userName, email } = loggedInUser;
 
  return (
    <div>
      <Container className="py-2">
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" variant="light">
              <Navbar.Brand>
                <Link to="/">City Electric</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex justify-content-center">
                  <Link to="/">Home</Link>
                  <Link to="/orders">Orders</Link>
                  <Link to="/admin">Admin</Link>
                  <Link to="/login" className="city-btn border-radius-2">
                    {loggedInUser.email ? (
                      <>
                        <FontAwesomeIcon icon={faUser} /> {userName || email}
                      </>
                    ) : (
                      " Login"
                    )}
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;