import React, { useEffect, useState } from "react";
import { Nav, Button, Container, Navbar } from "react-bootstrap";
import {FormattedMessage} from "react-intl";


function Header() {

  const [role, setRole] = useState(localStorage.getItem('role'));
  const [buttonText, setButtonText] = useState(<FormattedMessage id="Iniciar Sesion"/>);

  useEffect(() => {
    if(role === null){
      setButtonText(<FormattedMessage id="Iniciar Sesion"/>);
    }
    else{
      setButtonText('Salir');
    }

  }, [role]);

  const handleButtonClick = () => {
    if(role != null){
      localStorage.setItem('role', null);
      localStorage.setItem('token', null);
      setRole(null);
    }
    else{
      setRole(localStorage.getItem("role"));
    }
  }

    return (
      <div>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#153B84", fontFamily: 'Oxygen' }}>
        <Container fluid className="position-relative">
          <Navbar.Brand className="ms-3 me-5" style={{ color: "#FFFFFF", fontSize: 20 }}>
          <FormattedMessage id="Nombre"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: 14, textTransform: "uppercase" }}>
              {/* Aquí puedes agregar enlaces de navegación si es necesario */}
            </Nav>
            <Nav>
              <Button
                className="btn"
                style={{
                  fontSize: 14,
                  backgroundColor: "#0F0A0A",
                  color: "#FFFFFF",
                  padding: "10px 30px",
                  borderRadius: "25px",
                  borderColor: "#18A0FB",
                  borderWidth: "1px"
                }}
                onClick={handleButtonClick}
              >
                {buttonText}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    );
  }
  
  export default Header;

