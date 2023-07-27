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
    }
    registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    alert("Bienvenido "+nombre+" "+apellido);
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

  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>
        <label>Apellido: </label><br/>
        <input type="text"
          onChange={(e)=>setApellido(e.target.value)}
          value={apellido}
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

        <button type='button' onClick={registrar}>Registrar</button>
    </form>
  )
}
