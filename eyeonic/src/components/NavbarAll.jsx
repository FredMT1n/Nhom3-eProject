import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Component.css";
import { useCart } from "react-use-cart";


export default function NavbarAll() {
  const { totalUniqueItems } = useCart();
  return (
    <Navbar expand="lg" className="navbar-1" fluid>
      <Container fluid>
        <Navbar.Brand as={Link} to="/Nhom3-eProject/home"><Link to='/Nhom3-eProject/home'>
          <img src={process.env.PUBLIC_URL + '/images/EyeonicLogo.png'} alt="Website Logo" className='logo-container' />
        </Link><span className='namebrand'>Eyeonic</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/Nhom3-eProject/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Nhom3-eProject/product">Product</Nav.Link>
            {/* <Link to='/Nhom3-eProject/product'>
              <NavDropdown title="Product" id="navbarScrollingDropdown" renderMenuOnMount={true} >
                <NavDropdown.Item href="#action3">1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">3</NavDropdown.Item>
              </NavDropdown>
            </Link> */}
            <Nav.Link as={Link} to="/Nhom3-eProject/sale">Sale</Nav.Link>
            <Nav.Link as={Link} to="/Nhom3-eProject/about">About</Nav.Link>
            <Nav.Link as={Link} to="/Nhom3-eProject/contact">Contact</Nav.Link>
          </Nav>
          <Form className="form-container-nav">
            <div>
              <Form.Control type="search" placeholder="Search" className="control-1" aria-label="Search" style={{ textAlign: "left" }} />
            </div>
            <div className="user-icons">
              <a href="/Nhom3-eProject/user">
                <FontAwesomeIcon icon="fa-solid fa-user" className='fa-xl' />
              </a>
              <a href='/Nhom3-eProject/cart' style={{position: "relative"}}>
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='fa-xl' />
                <div className={(totalUniqueItems > 0) ? "rounded-circle" : "rounded-circle hidden1"}>
                  {totalUniqueItems}
                </div>
              </a>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}