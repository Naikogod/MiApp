'use client'
import React, { useEffect, useState } from 'react'
import { Persona } from '../Interfaces/DatosFormulario'
import { registrarPersona } from '../Firebase/Promesas'

export const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [pais, setPais] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [errorNombre, setErrorNombre] = useState("")

  
  
  const registrar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }
    else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
        nombre,
        apellido,
        edad:parseInt(edad),
        email,
        telefono:parseInt(telefono),
        pais,
        ciudad,
        aceptarTerminos,
    }
    registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    alert("Registro Realizado Exitosamente Don/ña:"+nombre+" "+apellido);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }
  }
  // Manejador de cambios para el checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAceptarTerminos(e.target.checked);
  };

  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>

        <label>Edad: </label><br/>
        <input type="number"
          onChange={(e)=>setEdad(e.target.value)}
          value={edad}
          /><br/>
        
        <label>E-mail: </label><br/>
        <input type="tex"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          /><br/>

        <label>Telefono: </label><br/>
        <input type="number"
          onChange={(e)=>setTelefono(e.target.value)}
          value={telefono}
          /><br/>

        <label>Pais: </label><br/>
        <input type="text"
          onChange={(e)=>setPais(e.target.value)}
          value={pais}
          /><br/>
        
        <label>Ciudad: </label><br/>
        <input type="text"
          onChange={(e)=>setCiudad(e.target.value)}
          value={ciudad}
          /><br/>
        
        <div>
        <input type="checkbox" checked={aceptarTerminos} onChange={handleCheckboxChange} />
        <label htmlFor="aceptarTerminos">Acepto los términos y condiciones</label>
        </div>
        <button type='button' onClick={registrar}>Registrar</button>
    </form>
  )
}
