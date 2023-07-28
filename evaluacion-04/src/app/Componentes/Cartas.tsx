// Importar las dependencias necesarias
import React from 'react';

// Definir el componente funcional Cards
export const Cards = () => {
  // Retornar el JSX que define la estructura de la tarjeta
    return (
    <div>
      {/* Espaciado */}
        <br />
      {/* Título de la tarjeta */}
        <h1>Astros para que son?</h1>
      {/* Imagen de la tarjeta */}
        <img
        src="https://i0.wp.com/elmundoderegina.com/wp-content/uploads/2019/03/signo.jpg?fit=900%2C500&ssl=1"
        alt="Logo de Google"
        style={{ width: '290px', height: '161px', margin: '20px' }}
        />
      {/* Párrafo de la tarjeta */}
        <p style={{ width: '290px', height: '161px', margin: '20px' }}>
        Los astros son objetos celestes que se encuentran en el universo y que se pueden observar desde la Tierra.
        Estos objetos pueden ser estrellas, planetas, satélites, cometas, asteroides, meteoroides, y cualquier otro cuerpo celeste que se encuentre fuera de nuestro planeta.
        </p>
    </div>
    );
};

