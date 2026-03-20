function Inicio() {
  return (
    <section id="inicio" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <h1>Tus paquetes a tiempo, siempre</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        La solución de paquetería más confiable, rápida y segura para tus envíos nacionales e internacionales.
      </p>
      <button 
        style={{ width: 'auto' }} 
        onClick={() => document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth' })}>
        Cotiza tu envío ahora
      </button>
    </section>
  );
}

export default Inicio;