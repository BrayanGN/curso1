import nuevoEstudiante from '../src/axiosGet copy';
import './css/Registro.css'
import { useState } from 'react';

const Registro = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleNombresChange = (event) => {
    setNombres(event.target.value);
  };

  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  };

  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.target.value);
    console.log(fechaNacimiento)
  };

  const handleTipoUsuarioChange = (event) => {
    setTipoUsuario(event.target.value);
    console.log(tipoUsuario);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tipoUsuario=="1") {
        nuevoEstudiante(tipoUsuario,correo,nombres,apellidos,fechaNacimiento,contrasena)
        location.reload()
    }else{
        alert("error")
        location.reload()
    }
  };

  return (
    
    <div className="container">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="container-nombres">
          <div>
          <label htmlFor="nombres" className="label-nombres">Nombres:</label>
          <input
            className="input-field"
            type="text"
            id="nombres"
            value={nombres}
            onChange={handleNombresChange}
          />
          </div>
          <div>
          <label htmlFor="apellidos" className="label-apellidos">Apellidos:</label>
          <input
            className="input-field"
            type="text"
            id="apellidos"
            value={apellidos}
            onChange={handleApellidosChange}
          />
          </div>
        </div>
        <div className="container-fecha-nacimiento">
          <label htmlFor="fechaNacimiento" className="label-fecha-nacimiento">Fecha de Nacimiento:</label>
          <input
            className="input-field"
            type="date"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={handleFechaNacimientoChange}
            style={{ width: '70%' }}
          />
        </div>
        <div className="container-tipo-usuario">
          <label htmlFor="tipoUsuario" className="label-tipo-usuario">Tipo de Usuario:</label>
          <select
            className="input-field"
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={handleTipoUsuarioChange}
            style={{ width: '70%' }}
          >
            <option value="">Seleccione</option>
            <option value="1">Estudiante</option>
            <option value="0">Maestro</option>
          </select>
        </div>
        <div className="container-correo">
          <label htmlFor="correo" className="label-correo">Documento:</label>
          <input
            className="input-field"
            type='text'
            id="documento"
            value={correo}
            onChange={handleCorreoChange}
            style={{ width: '90%' }}
          />
        </div>
        <div className="container-contrasena">
          <label htmlFor="contrasena" className="label-contrasena">Contraseña:</label>
          <input
            className="input-field"
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={handleContrasenaChange}
            style={{ width: '90%' }}
          />
        </div>
        <button type="submit" className="button-submit">Registrarse</button>
      </form>
    </div>
  );
};
export default Registro;