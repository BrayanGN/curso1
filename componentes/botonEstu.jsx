import enviarDatos from "../src/axiosGet"
import './css/InsEstu.css'
function Registrar({documento,idCurso}){
    // {estDoc,idCurso}
    const inscribirse = ()=>{
        enviarDatos(documento,idCurso)
    }
    return(
        <button className="boton-estudiante" onClick={inscribirse} >Inscribirse</button>
    )
}
export default Registrar