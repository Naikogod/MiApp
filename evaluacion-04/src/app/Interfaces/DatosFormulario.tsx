// Interfaz de Persona la cual guarda sus atributo y valor esto es escencial para el codigo y define la estructura de los datos
export interface Persona{
    nombre:string,
    apellido:string,
    edad:number
    idPersona?:string,
    email:string,
    telefono:number,
    pais:string,
    ciudad:string,
    aceptarTerminos: boolean;
}