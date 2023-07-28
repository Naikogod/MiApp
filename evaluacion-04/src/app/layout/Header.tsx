'use client'
import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <nav>
        <Link to={"/"}>|Inicio|</Link>
        <Link to={"/formulario"}>Formulario</Link>
        <Link to={"/mostrar"}>|Registros|</Link>
        <Link to={"/Intro"}>Introduccion|</Link>
        <Link to={"/Video"}>Video|</Link>
        <Link to={"/Cards"}>Astros|</Link>
        <Link to={"/Zodiaco"}>Zodiaco|</Link>
    </nav>
  )
}
