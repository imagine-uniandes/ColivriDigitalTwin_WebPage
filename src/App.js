import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ControlMenu from './components/controlMenu/ControlMenu';
import Home from './components/Home';
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function App() {

  const [role, setRole] = useState(null);



  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [role]);


  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/menu" element={<Home/>}/>
            <Route path="/" element={<ControlMenu/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

// 1. Docker: correr instancia, docker dentro servidor. (Preguntar si ya lo tienen para el py)
// 2. Subiendo el build, a bucket s3 para que sea un web static page. Se agrega un cloud-front que apunte al s3 y ese cloud-front tiene una url DNS Router 53 se apunta al cloud-front.
// 3. Montar un nginx en el servidor de pablo. En vez de s3 apunte a carpeta de datos.
// 4. Usar en aws amplify configura git hub y escucha el master y va actualizando la pagina web. => Continuos integration continuos delivery (CICD): estrategia de subir cosas a producción automatizado