import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";


function Header() {

    return (
      <div>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#153B84"}}>
        <Container fluid className="position-relative">
          <Navbar.Brand className="ms-3 me-5" style={{ color: "#FFFFFF", fontSize: 20 }}>
          <img src="/images/logo_uniandes_sistemas.png" alt="colivri digital twin" class="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: 14, textTransform: "uppercase" }}>
              {/* Aquí puedes agregar enlaces de navegación si es necesario */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    );
  }
  
  export default Header;

