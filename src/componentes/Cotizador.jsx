import { useState } from 'react';

function Cotizador() {
  // Estados para capturar los datos del formulario
  const [origen, setOrigen] = useState('Misma ciudad');
  const [peso, setPeso] = useState('');
  const [nivelServicio, setNivelServicio] = useState('estandar');
  const [recoleccion, setRecoleccion] = useState(false);
  const [seguro, setSeguro] = useState(false);
  
  // Estados para mostrar los resultados
  const [costoTotal, setCostoTotal] = useState(0);
  const [tiempoEstimado, setTiempoEstimado] = useState('');

  // Función que se ejecuta al enviar el formulario
  const calcularEnvio = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (peso <= 0 || isNaN(peso)) {
      alert("Por favor, ingresa un peso válido mayor a 0.");
      return;
    }

    // Lógica de negocio (puedes ajustar estas tarifas)
    let costoBase = origen === 'Misma ciudad' ? 25 : origen === 'Otro departamento' ? 45 : 150;
    let costoPorPeso = peso * 5; 
    let recargoServicio = nivelServicio === 'expres' ? 1.5 : 1; // 50% extra por servicio exprés
    
    let costoExtras = 0;
    if (recoleccion) costoExtras += 15;
    if (seguro) costoExtras += 25;

    // Cálculo final
    let subtotal = (costoBase + costoPorPeso) * recargoServicio;
    let total = subtotal + costoExtras;

    setCostoTotal(total.toFixed(2));

    // Determinar tiempo de entrega
    if (nivelServicio === 'expres') {
      setTiempoEstimado('24 a 48 horas');
    } else {
      setTiempoEstimado(origen === 'Internacional' ? '7 a 15 días hábiles' : '3 a 5 días hábiles');
    }
  };

  return (
    <section id="cotizador" className="seccion-cotizador">
      <h2>Cotizador de Envíos AeroPaq</h2>
      
      <form onSubmit={calcularEnvio}>
        <div>
          <label>Origen y Destino:</label>
          <select value={origen} onChange={(e) => setOrigen(e.target.value)}>
            <option value="Misma ciudad">Misma ciudad</option>
            <option value="Otro departamento">Otro departamento</option>
            <option value="Internacional">Internacional</option>
          </select>
        </div>

        <div>
          <label>Peso (libras):</label>
          <input 
            type="number" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
            placeholder="Ej. 10"
          />
        </div>

        <div>
          <label>Nivel de servicio:</label>
          <select value={nivelServicio} onChange={(e) => setNivelServicio(e.target.value)}>
            <option value="estandar">Estándar</option>
            <option value="expres">Exprés</option>
          </select>
        </div>

        <div>
          <label>Servicios Extras:</label>
          <div>
            <input 
              type="checkbox" 
              checked={recoleccion} 
              onChange={(e) => setRecoleccion(e.target.checked)} 
            /> Recolección a domicilio
          </div>
          <div>
            <input 
              type="checkbox" 
              checked={seguro} 
              onChange={(e) => setSeguro(e.target.checked)} 
            /> Seguro contra pérdida
          </div>
        </div>

        <button type="submit">Calcular Tarifa</button>
      </form>

      {/* Resultados condicionales: Solo se muestran si costoTotal es mayor a 0 */}
      {costoTotal > 0 && (
        <div className="resultados-cotizacion">
          <h3>Resumen de Cotización</h3>
          <p><strong>Costo Estimado:</strong> Q{costoTotal}</p>
          <p><strong>Tiempo de Entrega:</strong> {tiempoEstimado}</p>
        </div>
      )}
    </section>
  );
}

export default Cotizador;