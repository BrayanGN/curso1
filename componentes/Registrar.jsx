import enviarSolicitud from "../src/postApi"
function Registrar(){
    // {estDoc,idCurso}
    const inscribirse = ()=>{
        // const url = "http://localhost/api/inscripcciones"
        // const insObj={
        //     docApre:"234513",
        //     curId:"200"
        // }
        enviarSolicitud()
    }
    return(
        <button onClick={inscribirse}>Registrar</button>
    )
}
export default Registrar