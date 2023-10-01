import "./css/Nav.css"
import { datosUsuario } from "../src/Usuario"

function Nav(){
    console.log(datosUsuario)
    return(
        <>
            <nav className="menu">
                <ul className="ul">
                    <li className="li"><a href="#">Home</a></li>
                    <li className="li"><a href="#">Cursos</a></li>
                    <li className="li"><a href="#">Profesores</a></li>
                </ul>
                <h1 className="logo">
                    {(datosUsuario)?datosUsuario.usu_Nombre :"Logo1"}
                   
                </h1>
                
            </nav>
        </>
        
    )
}
export default Nav
