import React, { useEffect, useState } from 'react';
import { obtenerPersonas } from '../Firebase/Promesas';
import { Persona } from '../Interfaces/DatosFormulario';
import { Link } from 'react-router-dom';


const getAceptadoTexto = (aceptado: boolean) => {
    return aceptado ? 'Aceptado' : 'Negado';
    };

export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);

    useEffect(() => {
    obtenerPersonas().then((listado) => {
        console.log(listado);
        setPersonas(listado);
    });
    }, []);

    const renderizarDatos = () => {
    return personas.map((p) => (
        <tr key={p.idPersona}>
        <td>{p.nombre}</td>
        <td>{p.apellido}</td>
        <td>{p.edad}</td>
        <td>{p.email}</td>
        <td>{p.telefono}</td>
        <td>{p.pais}</td>
        <td>{p.ciudad}</td>
        <td>{getAceptadoTexto(p.aceptarTerminos)}</td>
        <td>
            <Link to={`/actualizar/${p.idPersona}`}>Actualizar</Link>
        </td>
        <td>
            <Link to={`/eliminar/${p.idPersona}`}>Eliminar</Link>
        </td>
        </tr>
    ));
};

    return (
    <div className="registros-container">
        <h1>Registros</h1>
        <table className="registros-table">
        <thead>
        <tr>
            <th>|Nombre|</th>
            <th>|Apellido|</th>
            <th>|Edad|</th>
            <th>|E-mail|</th>
            <th>|Teléfono|</th>
            <th>|País|</th>
            <th>|Ciudad|</th>
            <th>|Terminos|</th>
            <th>|Editar|</th>
            <th>|Eliminar|</th>
        </tr>
        </thead>
        <tbody>{renderizarDatos()}</tbody>
        </table>
    </div>
    );
};

export default Registros;

