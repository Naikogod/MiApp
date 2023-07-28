// Importar React desde la librería de React
import React from 'react';
// Importar Routes y Route de 'react-router-dom' para configurar las rutas y sus componentes asociados
import { Routes, Route } from 'react-router-dom';
// Importar los componentes que se utilizarán como páginas en la aplicación
import { Saludo } from '../Componentes/Saludo';
import { Formulario } from '../Componentes/Formulario';
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar';
import { Eliminar } from '../Componentes/Eliminar';
import { Intro } from '../Componentes/Introduccion';
import { Video } from '../Componentes/Video';
import { Cards } from '../Componentes/Cartas';
import { SignosZ } from '../Componentes/Zodiaco';

// Definir el componente funcional AppRouter
export const AppRouter = () => {
  // Retornar el JSX que define las rutas y los componentes asociados
  return (
    <Routes>
      {/* Rutas y componentes asociados */}
      <Route path='/*' element={<Saludo nombre={"Jose"} />} />
      {/* La ruta '/*' se utilizará como página de inicio, y el componente Saludo se renderizará con el prop nombre="Jose" */}
      <Route path='/formulario' element={<Formulario />} />
      {/* La ruta '/formulario' se asociará al componente Formulario */}
      <Route path='/mostrar' element={<Registros />} />
      {/* La ruta '/mostrar' se asociará al componente Registros */}
      <Route path='/actualizar/:idPersona' element={<Actualizar />} />
      {/* La ruta '/actualizar/:idPersona' se asociará al componente Actualizar, pasando el parámetro idPersona como prop */}
      <Route path='/eliminar/:idPersona' element={<Eliminar />} />
      {/* La ruta '/eliminar/:idPersona' se asociará al componente Eliminar, pasando el parámetro idPersona como prop */}
      <Route path='/Intro' element={<Intro />} />
      {/* La ruta '/Intro' se asociará al componente Intro */}
      <Route path='/Video' element={<Video />} />
      {/* La ruta '/Video' se asociará al componente Video */}
      <Route path='/Cards' element={<Cards />} />
      {/* La ruta '/Cards' se asociará al componente Cards */}
      <Route path='/Zodiaco' element={<SignosZ />} />
      {/* La ruta '/Zodiaco' se asociará al componente SignosZ */}
    </Routes>
  );
};

