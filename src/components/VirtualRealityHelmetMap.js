/*
import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const VirtualRealityHelmetMap = () => {
  useEffect(() => {
    // Coordenadas a graficar
    const coordinates = [
      { x: 11.672990798950195, y: -2.4004416465759277, z: 4.210024356842041 },
    ];

    // Extraer las coordenadas x, y, z
    const xValues = coordinates.map(coord => coord.x);
    const yValues = coordinates.map(coord => coord.y);
    const zValues = coordinates.map(coord => coord.z);

    // Crear el trazo de dispersión 3D
    const trace = {
      type: 'scatter3d',
      mode: 'markers',
      x: xValues,
      y: yValues,
      z: zValues,
      marker: {
        size: 10,
        color: 'blue',
      },
    };

    // Crear el diseño del gráfico
    const layout = {
      scene: {
        aspectmode: 'manual',
        aspectratio: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
      },
    };

    // Configurar la visualización con Plotly
    Plotly.newPlot('cartesian-plot', [trace], layout);
  }, []);

  return (
    <div>
      <h2>Plano Cartesiano 3D</h2>
      <div id="cartesian-plot"></div>
    </div>
  );
};

export default VirtualRealityHelmetMap;
*/
