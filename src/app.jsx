import React from 'react';

import Navegacion from './componentes/Navegacion';
import Inicio from './componentes/Inicio';
import Servicios from './componentes/Servicios';
import Funcionamiento from './componentes/Funcionamiento';
import Cobertura from './componentes/Cobertura';
import Cotizador from './componentes/Cotizador';
import Nosotros from './componentes/Nosotros';
import Preguntas from './componentes/Preguntas';
import Contacto from './componentes/Contacto';

function App() {
  return (
    <div className="contenedor-principal">
      <Navegacion />

      <main>
        <Inicio />
        <Servicios />
        <Funcionamiento />
        <Cobertura />
        
        <Cotizador />
        
        <Nosotros />
        <Preguntas />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
