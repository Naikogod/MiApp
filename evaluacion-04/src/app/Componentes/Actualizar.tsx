import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/DatosFormulario'
import { actualizarPersona, obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [aceptarTerminos, setAceptarTerminos] = useState(false);
    const [idPersona,setIdPersona] = useState("")
  useEffect(()=>{
    if(params.idPersona!=undefined){
      obtenerPersona(params.idPersona).then((v)=>{
        if(v!=undefined && v.idPersona!= undefined){
            setNombre(v.nombre)
            setApellido(v.apellido)
            setEdad(""+v.edad)
            setEmail(v.email)
            setIdPersona(v.idPersona)
            setTelefono(""+v.telefono)
            setPais(v.pais)
            setCiudad(v.ciudad)
            setAceptarTerminos(v.aceptarTerminos)
        }
      })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const actualizar = ()=>{
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
    //actualizar
    actualizarPersona(idPersona,p).then(()=>{
      alert("Actualizacion Exitosa Don/ña:"+nombre+" "+apellido);
    })
    //registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
  }

  // Manejador de cambios para el checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAceptarTerminos(e.target.checked);
  };

  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>setNombre(e.target.value)}
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
        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}

