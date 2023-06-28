import { datosUsuario } from '../src/Usuario'
import vite from './vite.svg'
import Registrar from '../componentes/botonEstu';
import Start from './Start'
import './css/Curso.css'
import { margin,estrella,contenedorCurso,elementos,elemento,elemento1,fotoDes } from './css/estilos'

function Cursos({nombreCurso,nombreMaestro,docMaestro,idCur}){
    // const [cursoId,setCursoId] = useState(null)
    // const [tipoUsuario,setTipoUsuario] = useState(null)
    // setCursoId(props.Id)

    let userId = ''
    const cargo= (datosUsuario)?datosUsuario.cargo:""
    
    if(cargo!=''){
        if (cargo ==="estudiante") {
            userId = datosUsuario.usu_Identificacion

        }
    }
    
    return(
        <div className='contenedor-curso' style={contenedorCurso}>
            <img src={vite} alt="imagen del curso" style={fotoDes} />
            <div style={elementos}>
                <p style={elemento1}>{nombreCurso}</p>
                <p style={elemento}>{nombreMaestro}</p>
                <div className='con-cali' style={estrella}>
                    <p style={margin}>2,0</p><Start  calificacion={2}/><p style={margin}>(90)</p>
                </div>
                <div className="contenedor-ins">
                    <div className='inscripcion-curso'>
                        
                        <Registrar
                        idCurso= {idCur}
                        documento= {userId}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )

}
export default Cursos