// Importar las dependencias necesarias
import React, { useEffect, useState } from 'react';
import { obtenerPersonas } from '../Firebase/Promesas';
import { Persona } from '../Interfaces/DatosFormulario';
import { Link } from 'react-router-dom';

// Función auxiliar para obtener el texto "Aceptado" o "Negado" según el valor de la variable booleana aceptado
const getAceptadoTexto = (aceptado: boolean) => {
    return aceptado ? 'Aceptado' : 'Negado';
};

// Definir el componente funcional Registros
export const Registros = () => {
  // Definir el estado local para almacenar el listado de personas
    const [personas, setPersonas] = useState<Persona[]>([]);

  // Utilizar el hook useEffect para cargar la lista de personas al montar el componente
    useEffect(() => {
    obtenerPersonas().then((listado) => {
        console.log(listado);
        setPersonas(listado);
        });
    }, []);

  // Función para renderizar los datos de las personas en una tabla
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
                {/* Enlace para actualizar los datos de la persona */}
                <Link to={`/actualizar/${p.idPersona}`}>Actualizar</Link>
            </td>
            <td>
                {/* Enlace para eliminar los datos de la persona */}
                <Link to={`/eliminar/${p.idPersona}`}>Eliminar</Link>
            </td>
        </tr>
        ));
    };

  // Retornar el JSX que define la estructura del componente Registros
    return (
    <div className="registros-container">
        {/* Título */}
        <h1>Registros</h1>
      {/* Tabla que muestra los datos de las personas */}
        <table className="registros-table">
            <thead>
                <tr>
                    {/* Encabezados de la tabla */}
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


