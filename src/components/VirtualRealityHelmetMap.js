import React from 'react';
import './VirtualRealityHelmetMap.css'; // Importa el archivo de estilos CSS

const VirtualRealityHelmetMap = () => {
  // Coordenadas de los cascos de realidad virtual
  const helmetCoordinates = [
    { left: 500, top: 200, imageUrl: "/images/casco1.png" },
    { left: 500, top: 400, imageUrl: "/images/casco1.png" },
    // Agrega más coordenadas según sea necesario
  ];

  return (
    
    <div className="virtual-reality-map">
      <img
        src="/images/vista0.png"
        alt="Mapa de Cascos de Realidad Virtual"
        className="background-image"
      />
      {helmetCoordinates.map(({ left, top, imageUrl }, index) => (
        <img
          key={index}
          className="helmet-image"
          src={imageUrl}
          alt={`Casco ${index + 1}`}
          style={{ left, top }}
        />
      ))}
    </div>
  );
};

export default VirtualRealityHelmetMap;
