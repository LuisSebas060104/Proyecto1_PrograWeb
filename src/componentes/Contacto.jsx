import { useState } from 'react';

function Contacto() {
  const [formulario, setFormulario] = useState({ nombre: '', correo: '', telefono: '', mensaje: '' });
  const [estadoEnvio, setEstadoEnvio] = useState(''); // Para mostrar mensajes de éxito o error

  const manejarCambios = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    // Validaciones
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{8,15}$/; // Solo números, entre 8 y 15 dígitos

    if (formulario.nombre.trim() === '') return alert("El nombre es obligatorio.");
    if (!regexCorreo.test(formulario.correo)) return alert("Ingresa un correo válido (ej. usuario@dominio.com).");
    if (!regexTelefono.test(formulario.telefono)) return alert("El teléfono debe contener solo números.");
    if (formulario.mensaje.trim() === '') return alert("Por favor, escribe un mensaje.");

    setEstadoEnvio('Enviando...');

    try {
      const URL_GOOGLE_SHEETS = 'https://script.google.com/macros/s/AKfycbzHJB-BRxT5ByoG6RzCBX49lt3kBbYmJPiJmExh6bHItNxVq5L_-bLRZ_7ebvCZ1aMl/exec';
      

      await fetch(URL_GOOGLE_SHEETS, {
        method: 'POST',
        body: JSON.stringify(formulario),
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain' }
      });
      
      
      // Simulación temporal para que pruebes la UI
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setEstadoEnvio('¡Mensaje enviado con éxito!');
      setFormulario({ nombre: '', correo: '', telefono: '', mensaje: '' }); // Limpia el formulario
      
    } catch (error) {
      setEstadoEnvio('Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={enviarFormulario}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambios} placeholder="Tu nombre completo" />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" name="correo" value={formulario.correo} onChange={manejarCambios} placeholder="correo@ejemplo.com" />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={formulario.telefono} onChange={manejarCambios} placeholder="Ej. 12345678" />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea name="mensaje" value={formulario.mensaje} onChange={manejarCambios} rows="4" placeholder="¿En qué te podemos ayudar?"></textarea>
        </div>
        
        <button type="submit" disabled={estadoEnvio === 'Enviando...'}>
          Enviar Mensaje
        </button>
        
        {estadoEnvio && <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>{estadoEnvio}</p>}
      </form>
    </section>
  );
}

export default Contacto;