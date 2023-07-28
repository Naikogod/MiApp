'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Saludo } from '../Componentes/Saludo'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'
import { Intro } from '../Componentes/Introduccion'
import { Video } from '../Componentes/Video'
import { Cards } from '../Componentes/Cartas'
import { SignosZ } from '../Componentes/Zodiaco'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Saludo nombre={"Jose"}/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/eliminar/:idPersona' element={<Eliminar/>}/>
        <Route path='/Intro' element={<Intro/>}/>
        <Route path='/Video' element={<Video/>}/>
        <Route path='/Cards' element={<Cards/>}/>
        <Route path='/Zodiaco' element={<SignosZ/>}/>
    </Routes>
  )
}
