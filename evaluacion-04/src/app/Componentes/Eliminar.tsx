import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Eliminar = () => {
    const params = useParams();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [idPersona, setIdPersona] = useState('');

    useEffect(() => {
        if (params.idPersona != undefined) {
            obtenerPersona(params.idPersona).then((v) => {
                if (v != undefined && v.idPersona != undefined) {
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
    }, []);

    const eliminar = () => {
        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
        if (confirmacion) {
            eliminarPersona(idPersona).then(() => {
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
