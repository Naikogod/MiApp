// Importar las dependencias necesarias
import { Persona } from "../Interfaces/DatosFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./FirebaseApp";

// Función para registrar una persona en la base de datos
export const registrarPersona = async (p: Persona) => {
  // Agregar un nuevo documento (registro) a la colección "personas" en Firestore
    const docRef = await addDoc(collection(db, "personas"), p);
};

// Función para obtener todas las personas registradas en la base de datos
export const obtenerPersonas = async () => {
  // Obtener una instantánea de todos los documentos (registros) de la colección "personas" en Firestore
    const querySnapshot = await getDocs(collection(db, "personas"));
    console.log("CHAOOO");
    console.log(querySnapshot);
    var personas: Persona[] = [];

  // Recorrer cada documento y mapearlos a objetos Persona
    querySnapshot.forEach((d) => {
    console.log(d.id);
    console.log(d.data());
    var p: Persona = {
        nombre: d.data().nombre,
        apellido: d.data().apellido,
        edad: parseInt(d.data().edad),
        idPersona: d.id,
        email: d.data().email,
        telefono: parseInt(d.data().telefono),
        pais: d.data().pais,
        ciudad: d.data().ciudad,
        aceptarTerminos: d.data().aceptarTerminos,
    };
    personas.push(p);
    });

    return personas;
};

// Función para obtener una persona específica por su ID en la base de datos
export const obtenerPersona = async (idPersona: string) => {
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    const p: Persona = {
        nombre: docSnap.data().nombre,
        apellido: docSnap.data().apellido,
        edad: docSnap.data().edad,
        idPersona: docSnap.id,
        email: docSnap.data().email,
        telefono: docSnap.data().telefono,
        pais: docSnap.data().pais,
        ciudad: docSnap.data().ciudad,
        aceptarTerminos: docSnap.data().aceptarTerminos,
    };
    return p;
    } 
    else {
    // Si el documento no existe, retornar "undefined"
    return undefined;
    }
};

// Función para actualizar los datos de una persona en la base de datos
export const actualizarPersona = async (idPersona: string, p: Persona) => {
    const docRef = doc(db, "personas", idPersona);
    // Actualizar el documento (registro) en Firestore con los nuevos datos de la persona
    await updateDoc(docRef, { ...p });
};

// Función para eliminar una persona de la base de datos por su ID
export const eliminarPersona = async (idPersona: string) => {
    // Eliminar el documento (registro) de Firestore con la ID proporcionada
    await deleteDoc(doc(db, "personas", idPersona));
};
