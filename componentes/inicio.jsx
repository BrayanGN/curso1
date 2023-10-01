import Cursos from '../componentes/Curso'
import Nav from '../componentes/Nav';
import Login from '../componentes/Login';
import { useFech } from '../src/useFetch';
import { useState } from 'react';
import { localStorageGet } from '../src/localStore';

function inicio(){
    const {data} = useFech('http://localhost/api/cursos')
    const maestro = localStorageGet("maestro")

    return(
        <>

            <Nav/>
            
            <div className="contenedor-principal">
            {
            (maestro === 0.1)
            ?
            <div className="contenedor-login">
                <Login/>
            </div>
            :
            alert("Registrad@")
            }
            <br /><br /><br /><br />
            <h2>Cursos disponibles</h2>
            <div className='contenedor-cursos'>
                {data?.cursos.map((curso) => (
                    <Cursos
                    key={curso.cur_Id}
                    idCur={curso.cur_Id}
                    nombreMaestro={curso.maestro.usu_Nombre}
                    nombreCurso={curso.cur_Nom}
                    docMaestro  ={curso.maestro.usu_Identificacion}
                />
                ))}
            </div>
            <div className="contenedor-prueba"></div>
        </div>

        </>
    )
}
export default inicio