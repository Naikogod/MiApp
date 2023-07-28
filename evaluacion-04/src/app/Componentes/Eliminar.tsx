import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

// Definir el componente funcional Eliminar
export const Eliminar = () => {
    // Obtener los parámetros de la URL utilizando el hook useParams()
    const params = useParams();
    // Definir los estados locales para los campos del formulario y sus respectivos setters
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [idPersona, setIdPersona] = useState('');

    // Utilizar el hook useEffect para cargar los datos de una persona existente (si se proporciona un idPersona)
    useEffect(() => {
        if (params.idPersona != undefined) {
            obtenerPersona(params.idPersona).then((v) => {
                if (v != undefined && v.idPersona != undefined) {
                    // Cargar los datos obtenidos de la persona en los estados locales correspondientes
                    setNombre(v.nombre);
                    setApellido(v.apellido);
                    setEdad('' + v.edad);
                    setEmail(v.email);
                    setIdPersona(v.idPersona);
                    setTelefono('' + v.telefono);
                    setPais(v.pais);
                    setCiudad(v.ciudad);
                }
            });
        }
        // Este useEffect se ejecutará solo una vez (cuando el componente se monta)
        // ya que el arreglo de dependencias está vacío ([])
    }, []);

    // Función para eliminar el registro de la persona
    const eliminar = () => {
        // Mostrar una ventana de confirmación para verificar si el usuario realmente desea eliminar el registro
        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
        if (confirmacion) {
            // Llamar a la función eliminarPersona para eliminar el registro de la persona en la base de datos
            eliminarPersona(idPersona).then(() => {
                // Mostrar un mensaje de alerta indicando que el registro se eliminó con éxito
                alert('Se eliminó con éxito');
            });
        }
    };

    return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        disabled // Campo bloqueado
        /><br/>

        <label>Apellido: </label><br/>
        <input type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
        disabled // Campo bloqueado
        /><br/>
            
        <label>Edad: </label><br/>
        <input type="number"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
        disabled // Campo bloqueado
        /><br/>
    
        <label>E-mail: </label><br/>
        <input type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled // Campo bloqueado
        /><br/>
    
        <label>Telefono: </label><br/>
        <input type="number"
        onChange={(e) => setTelefono(e.target.value)}
        value={telefono}
        disabled // Campo bloqueado
        /><br/>
    
        <label>Pais: </label><br/>
        <input type="text"
        onChange={(e) => setPais(e.target.value)}
        value={pais}
        disabled // Campo bloqueado
        /><br/>

        <label>Ciudad: </label><br/>
        <input type="text"
        onChange={(e) => setCiudad(e.target.value)}
        value={ciudad}
        disabled // Campo bloqueado
        /><br/>
    
    <button type='button' onClick={eliminar}>Eliminar</button>
    </form>
    );
};
