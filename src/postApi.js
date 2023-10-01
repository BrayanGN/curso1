import axios from "axios";
function enviarSolicitud() {
  const Curso = {
    docApre:"234513",
    curId:"209"
  }
  axios
    .post("http://localhost/api/inscripcciones", Curso)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default enviarSolicitud

