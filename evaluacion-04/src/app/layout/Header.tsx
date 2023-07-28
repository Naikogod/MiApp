// Importar React desde la librería de React
import React from 'react';
// Importar el componente Link de 'react-router-dom' para habilitar la navegación entre páginas
import { Link } from 'react-router-dom';

// Definir el componente funcional Header
export const Header = () => {
  // Retornar el JSX que define la estructura del componente Header
  return (
    <nav>
      {/* Enlaces de navegación */}
      {/* Cada enlace está envuelto en un componente Link con su ruta especificada en el atributo 'to' */}
      {/* Cuando el usuario haga clic en el enlace, se navegará a la ruta correspondiente */}
      <Link to={"/"}>|Inicio|</Link>
      <Link to={"/formulario"}>Formulario</Link>
      <Link to={"/mostrar"}>|Registros|</Link>
      <Link to={"/Intro"}>Introduccion|</Link>
      <Link to={"/Video"}>Video|</Link>
      <Link to={"/Cards"}>Astros|</Link>
      <Link to={"/Zodiaco"}>Zodiaco|</Link>
    </nav>
  );
};
