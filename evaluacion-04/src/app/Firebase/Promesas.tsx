import { Persona } from "../Interfaces/DatosFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./FirebaseApp";


export const registrarPersona = async(p:Persona)=>{
    
    
    const docRef = await addDoc(collection(db, "personas"), p)

}

export const obtenerPersonas = async()=>{
    const querySnapshot = await getDocs(collection(db, "personas"));
    console.log("CHAOOO")
    console.log(querySnapshot)
    var personas:Persona[] = []
    querySnapshot.forEach((d)=>{
        console.log(d.id)
        console.log(d.data())
        var p:Persona = {
            nombre:d.data().nombre,
            apellido:d.data().apellido,
            edad:parseInt(d.data().edad),
            idPersona:d.id,
            email:d.data().email,
            telefono:parseInt(d.data().telefono),
            pais:d.data().pais,
            ciudad:d.data().ciudad,
            aceptarTerminos:d.data().aceptarTerminos,
        } 
        personas.push(p)
    })
    return personas
}
export const obtenerPersona = async(idPersona:string)=>{
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p:Persona = {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            edad:docSnap.data().edad,
            idPersona:docSnap.id,
            email:docSnap.data().email,
            telefono:docSnap.data().telefono,
            pais:docSnap.data().pais,
            ciudad:docSnap.data().ciudad,
            aceptarTerminos:docSnap.data().aceptarTerminos
        }
        return p
    } else {
    // docSnap.data() will be undefined in this case
        return undefined
    }
}
export const actualizarPersona = async(idPersona:string,p:Persona)=>{
    const docRef = doc(db, "personas", idPersona);

// Set the "capital" field of the city 'DC'
    await updateDoc(docRef, {...p});
}
export const eliminarPersona = async(idPersona:string)=>{
    await deleteDoc(doc(db, "personas", idPersona));
}