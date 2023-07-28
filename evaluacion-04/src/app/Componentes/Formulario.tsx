'use client'
// Importar las dependencias necesarias
import React, { useEffect, useState } from 'react';
import { Persona } from '../Interfaces/DatosFormulario';
import { registrarPersona } from '../Firebase/Promesas';

// Definir el componente funcional Formulario
export const Formulario = () => {
  // Definir los estados locales para los campos del formulario y sus respectivos setters
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [errorNombre, setErrorNombre] = useState('');

  // Función para registrar la persona
  const registrar = () => {
    // Validar el campo del nombre antes de registrar
    if (nombre.trim() === '') {
      setErrorNombre('No valen espacios en blanco');
    } else {
      // Eliminar espacios en blanco al inicio y al final del nombre y luego registrar
      setNombre(nombre.trim());
    }

    // Crear un objeto de tipo Persona con los datos ingresados en el formulario
    const p: Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      email,
      telefono: parseInt(telefono),
      pais,
      ciudad,
      aceptarTerminos,
    };

    // Llamar a la función registrarPersona para realizar el registro de la persona en la base de datos
    registrarPersona(p);

    // Mostrar los datos ingresados en la consola (esto puede ser útil para propósitos de depuración)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);

    // Mostrar un mensaje de alerta indicando que el registro se realizó exitosamente
    alert('Registro Realizado Exitosamente Don/ña:' + nombre + ' ' + apellido);
  };

  // Función para validar el campo del nombre y mostrar el error si es necesario
  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre('Debe tener más de 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  // Manejador de cambios para el checkbox "Acepto los términos y condiciones"
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Actualizar el estado de aceptarTerminos según el estado del checkbox
    setAceptarTerminos(e.target.checked);
  };

  // Retornar el JSX que define la estructura del componente Formulario
  return (
    <form>
      {/* Campos del formulario */}
      <label>Nombre: </label>
      <br />
      <input type="text" onChange={(e) => validarNombre(e.target.value)} value={nombre} />
      <br />

      <label>Apellido: </label>
      <br />
      <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
      <br />

      <label>Edad: </label>
      <br />
      <input type="number" onChange={(e) => setEdad(e.target.value)} value={edad} />
      <br />

      <label>E-mail: </label>
      <br />
      <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      <br />

      <label>Telefono: </label>
      <br />
      <input type="number" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
      <br />

      <label>Pais: </label>
      <br />
      <input type="text" onChange={(e) => setPais(e.target.value)} value={pais} />
      <br />

      <label>Ciudad: </label>
      <br />
      <input type="text" onChange={(e) => setCiudad(e.target.value)} value={ciudad} />
      <br />

      {/* Mostrar mensaje de error si existe */}
      {errorNombre && <p style={{ color: 'red' }}>{errorNombre}</p>}

      {/* Checkbox "Acepto los términos y condiciones" */}
      <div>
        <input type="checkbox" checked={aceptarTerminos} onChange={handleCheckboxChange} />
        <label htmlFor="aceptarTerminos">Acepto los términos y condiciones</label>
      </div>

      {/* Botón para registrar, al hacer clic se ejecutará la función registrar */}
      <button type="button" onClick={registrar}>Registrar</button>
    </form>
  );
};

