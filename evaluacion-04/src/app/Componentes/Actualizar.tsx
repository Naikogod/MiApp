// Importar las dependencias necesarias
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/DatosFormulario'
import { actualizarPersona, obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Actualizar = () => {
  // Obtener los parámetros de la URL utilizando el hook useParams()
  const params = useParams();

  // Definir los estados locales para los campos del formulario y sus respectivos setters
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [idPersona, setIdPersona] = useState("");

  // Utilizar el hook useEffect para cargar los datos de una persona existente (si se proporciona un idPersona)
  useEffect(() => {
    if (params.idPersona != undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v != undefined && v.idPersona != undefined) {
          // Cargar los datos obtenidos de la persona en los estados locales correspondientes
          setNombre(v.nombre);
          setApellido(v.apellido);
          setEdad("" + v.edad);
          setEmail(v.email);
          setIdPersona(v.idPersona);
          setTelefono("" + v.telefono);
          setPais(v.pais);
          setCiudad(v.ciudad);
          setAceptarTerminos(v.aceptarTerminos);
        }
      });
    }
    // Este useEffect se ejecutará solo una vez (cuando el componente se monta)
    // ya que el arreglo de dependencias está vacío ([])
  }, []);

  // Función para actualizar los datos de la persona
  const actualizar = () => {
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

    // Llamar a la función actualizarPersona para actualizar los datos en la base de datos
    actualizarPersona(idPersona, p).then(() => {
      // Mostrar un mensaje de alerta indicando que la actualización fue exitosa
      alert("Actualizacion Exitosa Don/ña:" + nombre + " " + apellido);
    });

    // Mostrar los datos ingresados en la consola (esto puede ser útil para propósitos de depuración)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
  };

  // Manejador de cambios para el checkbox "Acepto los términos y condiciones"
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Actualizar el estado de aceptarTerminos según el estado del checkbox
    setAceptarTerminos(e.target.checked);
  };

  // Retornar el JSX que define la estructura del formulario
  return (
    <form>
      <label>Nombre: </label><br />
      <input
        type="text"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      /><br />

      <label>Apellido: </label><br/>
      <input type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
        /><br/>

      <label>Edad: </label><br />
      <input
        type="number"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
      /><br />

      <label>E-mail: </label><br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      /><br />

      <label>Telefono: </label><br />
      <input
        type="number"
        onChange={(e) => setTelefono(e.target.value)}
        value={telefono}
      /><br />

      <label>Pais: </label><br />
      <input
        type="text"
        onChange={(e) => setPais(e.target.value)}
        value={pais}
      /><br />

      <label>Ciudad: </label><br />
      <input
        type="text"
        onChange={(e) => setCiudad(e.target.value)}
        value={ciudad}
      /><br />

      <div>
        <input
          type="checkbox"
          checked={aceptarTerminos}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="aceptarTerminos">Acepto los términos y condiciones</label>
      </div>

      {/* Botón para actualizar los datos, al hacer clic se ejecutará la función actualizar */}
      <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}


