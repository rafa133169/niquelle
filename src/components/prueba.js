import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Medicamentos() {
  const [medicina, setMedicina] = useState([]);
  const [medicamentosNight, setMedicamentosNight] = useState([]);
  const [medicamentosMorning, setMedicamentosMorning] = useState([]);
  const [medicamentosMediodia, setMedicamentosMediodia] = useState([]);
  const [medicamentosTarde, setMedicamentosTarde] = useState([]);
  const [tablaMedicamentosToma0, setTablaMedicamentosToma0] = useState([]);
  const [fecha, setFecha] = useState(window.localStorage.getItem('fecha') || null);
  const [hora, setHora] = useState(window.localStorage.getItem('hora') || null);

  useEffect(() => {
    Axios.get(`http://localhost:3001/medicina`)
      .then((respuesta) => {
        setMedicina(respuesta.data.listamedicina);
      })
      .catch((error) => console.error(error));
  }, []);

  const agregarMedicamento = (medicamento) => {
    const fechaActual = new Date();
    let fechaSiguiente = new Date(fechaActual);

    setFecha(fechaActual.toLocaleDateString());

    const toma = parseInt(medicamento.toma, 10) || 1;

    if (toma === 0) {
      const nuevaInstanciaTabla0 = {
        ...medicamento,
        hora: null,
        fecha: null,
      };
      setTablaMedicamentosToma0((prevMedicamentos) => [nuevaInstanciaTabla0, ...prevMedicamentos]);
    } else {
      for (let i = 0; i < 1; i++) {
        const horaIncrementada = (fechaActual.getHours() + i * toma) % 24;

        // Verificar si la hora incrementada sobrepasa la fecha actual
        if (horaIncrementada < fechaActual.getHours()) {
          fechaSiguiente.setDate(fechaActual.getDate() + 1); // Cambiar a la siguiente fecha
        }

        if (horaIncrementada >= 6 && horaIncrementada < 12) {
          // ... (código existente para calcular las horas y fechas)
        } else if (horaIncrementada >= 12 && horaIncrementada < 18) {
          // ... (código existente para calcular las horas y fechas)
        } else if (horaIncrementada >= 18 || horaIncrementada < 0) {
          // ... (código existente para calcular las horas y fechas)
        } else {
          // ... (código existente para calcular las horas y fechas)
        }
      }

      setMedicamentosNight((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosNight]);
      setMedicamentosMorning((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosMorning]);
      setMedicamentosMediodia((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosMediodia]);
      setMedicamentosTarde((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosTarde]);
      setHora(fechaActual.toLocaleTimeString());
    }

    window.localStorage.setItem('medicamentosNight', JSON.stringify([...nuevosMedicamentosNight, ...medicamentosNight] || []));
    window.localStorage.setItem('medicamentosMorning', JSON.stringify([...nuevosMedicamentosMorning, ...medicamentosMorning] || []));
    window.localStorage.setItem('medicamentosMediodia', JSON.stringify([...nuevosMedicamentosMediodia, ...medicamentosMediodia] || []));
    window.localStorage.setItem('medicamentosTarde', JSON.stringify([...nuevosMedicamentosTarde, ...medicamentosTarde] || []));
    window.localStorage.setItem('fecha', fechaActual.toLocaleDateString());
    window.localStorage.setItem('hora', (fechaActual.getHours() + toma >= 18 || fechaActual.getHours() + toma < 6) ? fechaActual.toLocaleTimeString() : null);
  };

  return (
    <>
      <h3>Pendiente...</h3>
      {medicina.map((medicamento) => (
        <div key={medicamento.id_medicina} style={{ display: 'inline-flex', marginRight: 10, marginBottom: 20 }}>
          {medicamentosNight.some((seleccionado) => seleccionado.id_medicina === medicamento.id_medicina) ||
          medicamentosMorning.some((seleccionado) => seleccionado.id_medicina === medicamento.id_medicina) ||
          medicamentosMediodia.some((seleccionado) => seleccionado.id_medicina === medicamento.id_medicina) ||
          medicamentosTarde.some((seleccionado) => seleccionado.id_medicina === medicamento.id_medicina) ? (
            <span></span>
          ) : (
            <button onClick={() => agregarMedicamento(medicamento)}>{medicamento.nombreMedicina}</button>
          )}
        </div>
      ))}

      <h4>Toma 0</h4>
      <table>
        <thead>
          <tr>
            <th>Nombre Medicina</th>
            <th>Dosis</th>
            <th>Comentarios</th>
            <th>Tomar</th>
          </tr>
        </thead>
        <tbody>
          {tablaMedicamentosToma0.map((medicamento, index) => (
            <tr key={index}>
              <td>{medicamento.nombreMedicina}</td>
              <td>{medicamento.dosis}</td>
              <td>{medicamento.comentarios}</td>
              <td>
                {/* Puedes agregar aquí cualquier lógica específica para la toma igual a 0 */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Noche</h4>
      <table>
        {/* ... (código existente) */}
      </table>

      <h4>Mañana</h4>
      <table>
        {/* ... (código existente) */}
      </table>

      <h4>Mediodía</h4>
      <table>
        {/* ... (código existente) */}
      </table>

      <h4>Tarde</h4>
      <table>
        {/* ... (código existente) */}
      </table>
    </>
  );
}

export default Medicamentos;
