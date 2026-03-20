export function Preguntas() {
  return (
    <section id="preguntas">
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
        <details style={{ padding: '1rem', background: '#f1f1f1', borderRadius: '5px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>¿Qué artículos no puedo enviar?</summary>
          <p style={{ marginTop: '10px' }}>No transportamos materiales peligrosos, inflamables, dinero en efectivo, ni artículos prohibidos por la ley aduanera.</p>
        </details>
        <details style={{ padding: '1rem', background: '#f1f1f1', borderRadius: '5px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>¿Proporcionan material de empaque?</summary>
          <p style={{ marginTop: '10px' }}>Sí, en nuestras sucursales físicas contamos con cajas y plástico de burbujas a la venta. En recolecciones, el paquete debe estar listo.</p>
        </details>
      </div>
    </section>
  );
}

export default Preguntas;