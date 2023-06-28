import './App.css' 
import inicio from '../componentes/inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from '../componentes/registro';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={inicio} />
          <Route path='/regis' Component={Registro} />

        </Routes>
      </Router>
    </>
  );
}

export default App
