import React from 'react'
interface Props{
    nombre:string|number,
    apellido?:string,
}

export const Saludo = (props:Props) => {
  return (
    <div><br></br>Bienvenido a Astro Fans Para mas Detalles Registrese o simplemente navegue por las Estrellas!!</div>
  )
}
