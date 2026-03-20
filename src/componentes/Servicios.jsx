function Servicios() {
  return (
    <section id="servicios">
      <h2>Nuestros Servicios</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <h3>Envíos Nacionales</h3>
          <p>Cobertura en todo el país con tiempos de entrega inmejorables.</p>
        </div>
        <div style={{ padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <h3>Envíos Internacionales</h3>
          <p>Llegamos a más de 150 países asegurando el cuidado de tu mercancía.</p>
        </div>
        <div style={{ padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <h3>Recolección a Domicilio</h3>
          <p>No salgas de casa o la oficina, nosotros pasamos por tu paquete.</p>
        </div>
        <div style={{ padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <h3>Servicio Exprés</h3>
          <p>Para aquellos paquetes urgentes que deben llegar en tiempo récord.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;