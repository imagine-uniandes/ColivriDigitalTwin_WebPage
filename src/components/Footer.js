import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#153B84" }}>
      <Container fluid style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', height: '100%' }}>
        <div style={{ color: "#FFFFFF", textAlign: 'center', maxWidth: '1000px' }}>
          <Box sx={{ my: 2 }} />
          <div style={{ marginBottom: '5px' }}>Universidad de los Andes | Vigilada Mineducación</div>
          <div style={{ marginBottom: '5px' }}>Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de 1964.</div>
          <div style={{ marginBottom: '5px' }}>Reconocimiento personería jurídica: Resolución 28 del 23 de febrero de 1949 Minjusticia</div>
          <div style={{ marginBottom: '5px' }}>Edificio Mario Laserna Cra 1 Este No 19A - 40 Bogotá (Colombia) | Tel: [571] 3394949 Ext: 2860, 2861, 2862 | Fax: [571] 3324325</div>
          <div>© 2019 - Departamento de Ingeniería de Sistemas y Computación</div>
          <Box sx={{ my: 2 }} />
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;

