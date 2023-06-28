import axios from 'axios';

// Función para enviar los datos
const enviarDatos = (documento,idCurso) => {
  const url = `http://localhost/api/inscripcciones/${documento}/${idCurso}`;

  axios.get(url)
    .then(response => {
      alert("se regitro su inscripccion")
      console.log('Datos enviados correctamente:', response.data);
      // Realiza las acciones necesarias con la respuesta recibida
    })
    .catch(error => {
      alert("error")
      console.error('Error al enviar los datos:', error);
      // Realiza las acciones necesarias para manejar el error
    });
};
export default enviarDatos
