import React from "react";

class MiLista extends React.Component {
    state={incidencias:[
        {
            id_incidencias: 1,
            id_usuario: "e71679510d",
            titulo: "Proyecto averiado en el aula 2",
            descripcion: "Proyecto averiado en el aula 2",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B205"
        },

        {
            id_incidencias: 2,
            id_usuario: "e71679510d",
            titulo: "Ordenador no enciende",
            descripcion: "Ordenador no enciende",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B104"
        },

        {
            id_incidencias: 3,
            id_usuario: "e71679510d",
            titulo: "Impresora sin conexion",
            descripcion: "Impresora sin conexion",
            categoria: "Hardware",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B105"
        },

        {
            id_incidencias: 4,
            id_usuario: "e71679510d",
            titulo: "Wifi no disponible",
            descripcion: "Wifi no disponible",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B205" 
        },

        {
            id_incidencias: 4,
            id_usuario: "e71679510d",
            titulo: "Pantalla tactil no responde",
            descripcion: "Pantalla tactil no responde",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B205" 
        },
    ]};

    render(){
    return(
        <div ClassName='lista'>
          <ul>
            {
                this.state.incidencias.map((i)=>(
                    <li>
                       <strong> ID incidencia:</strong> {i.id_incidencias}<br></br>
                       <strong> titulo:</strong> {i.titulos}<br></br>
                       <strong>descripcion:</strong> {i.descripcion}<br></br>
                       <strong>id_usuario:</strong> {i.id_usuario}<br></br>
                       <strong> ubicacion:</strong> {i.ubicacion}<br></br><br></br>
                    </li>
                ))
            }
          </ul>
        </div>
    );
}
}
export default MiLista;