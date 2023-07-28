// Importar React desde la librería de React
import React from 'react';

// Definir la interfaz Props para tipar las propiedades del componente
interface Props {
  nombre: string | number; // Propiedad requerida llamada "nombre" que puede ser de tipo string o number
  apellido?: string; // Propiedad opcional llamada "apellido" que puede ser de tipo string
}

// Definir el componente funcional Saludo
export const Saludo = (props: Props) => {
  // Retornar el JSX que define la estructura del componente Saludo
  return (
    <div>
      <br />
      Bienvenido a Astro Fans Para mas Detalles Registrese o simplemente navegue por las Estrellas!!
      {/* Mensaje de bienvenida personalizado usando la propiedad "nombre" */}
      {/* Si la propiedad "apellido" está definida, se podría agregar al mensaje */}
      {/* Ejemplo: `Bienvenido {props.nombre} {props.apellido} a Astro Fans...` */}
    </div>
  );
};
