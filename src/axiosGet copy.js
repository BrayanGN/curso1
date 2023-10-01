import axios from 'axios';

// Función para enviar los datos
const nuevoEstudiante = (estu,documento,nombre,apellido,fecha,contra) => {
  const url = `http://localhost/api/Estudiantes/${estu}/${documento}/${nombre}/${apellido}/${fecha}/${contra}`;

  axios.get(url)
    .then(response => {
      console.log('Datos enviados correctamente:', response.data);
      alert("usuario creado")
      // Realiza las acciones necesarias con la respuesta recibida
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      // Realiza las acciones necesarias para manejar el error
    });
};
export default nuevoEstudiante
