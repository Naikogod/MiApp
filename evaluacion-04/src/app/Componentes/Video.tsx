// Importar React desde la librería de React
import React from 'react';

// Definir el componente funcional Video
export const Video = () => {
  // Retornar el JSX que define la estructura del componente Video
    return (
    <div style={{ margin: '20px' }}>
        {/* Espaciado */}
        <br />
        {/* Título */}
        <label><h1>Explicacion Horoscopo</h1></label>
        {/* Espaciado */}
        <br />
        <br />
        {/* Elemento de video */}
        <video width="800" height="400" controls>
        {/* Fuente del video */}
        <source src="/vid/video.mp4" type="video/mp4" />
        </video>
    </div>
    );
};




