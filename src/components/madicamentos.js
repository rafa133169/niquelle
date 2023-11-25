import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', marginRight: 10, marginBottom: 20 }}>
      <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
        <h4>{title}</h4>
      </div>
      {isOpen && <div>{content}</div>}
    </div>
  );
}

function Medicamentos() {
  const [medicina, setMedicina] = useState([]);
  const [medicamentosNight, setMedicamentosNight] = useState([]);
  const [medicamentosMorning, setMedicamentosMorning] = useState([]);
  const [medicamentosMediodia, setMedicamentosMediodia] = useState([]);
  const [medicamentosTarde, setMedicamentosTarde] = useState([]);
  const [medicamentosRestantes, setMedicamentosRestantes] = useState([]);
  const [tablaMedicamentosToma0, setTablaMedicamentosToma0] = useState([]);
  const [fecha, setFecha] = useState(window.localStorage.getItem('fecha') || null);
  const [hora, setHora] = useState(window.localStorage.getItem('hora') || null);
  
  const acordeones = [
    {
      title: 'Noche',
      toma: 'noche',
      medicamentos: medicamentosRestantes.filter((medicamento) => medicamento.toma === 'noche'),
    },
    {
      title: 'Mañana',
      toma: 'morning',
      medicamentos: medicamentosRestantes.filter((medicamento) => medicamento.toma === 'morning'),
    },
    {
      title: 'Mediodía',
      toma: 'mediodía',
      medicamentos: medicamentosRestantes.filter((medicamento) => medicamento.toma === 'mediodía'),
    },
    {
      title: 'Tarde',
      toma: 'evening',
      medicamentos: medicamentosRestantes.filter((medicamento) => medicamento.toma === 'evening'),
    },
  ];


  useEffect(() => {
    Axios.get(`http://localhost:3001/medicina`)
      .then((respuesta) => {
        setMedicina(respuesta.data.listamedicina);
      })
      .catch((error) => console.error(error));
  }, []);

  // Función para agregar medicamento y actualizar fecha y hora
  const agregarMedicamento = (medicamento) => {
    const fechaActual = new Date();
    let fechaSiguiente = new Date(fechaActual);

    setFecha(fechaActual.toLocaleDateString());

    let nuevosMedicamentosNight = []; // Inicializar la variable como un array
    let nuevosMedicamentosMorning = []; // Inicializar la variable como un array
    let nuevosMedicamentosMediodia = []; // Inicializar la variable como un array
    let nuevosMedicamentosTarde = []; // Inicializar la variable como un array

    const horaActual = fechaActual.getHours() + (medicamento.toma);
    if (horaActual >= 0 || horaActual < 6) {
      // Si la hora está en el rango de noche, agregar a la columna de night
      const toma = parseInt(medicamento.toma, 10) || 1; // Obtener la toma del medicamento como un número entero, por defecto 1 si no se ingresa
      for (let i = 0; i < 1; i++) {
        // Crear cuatro instancias del medicamento con horas incrementadas según la toma
        const horaIncrementada = (horaActual + i * toma) % 24; // Aumentar la hora según la toma y asegurar que no supere las 24 horas

        // Verificar si la hora incrementada sobrepasa la fecha actual
        if (horaIncrementada < horaActual) {
          fechaSiguiente.setDate(fechaActual.getDate() + 1); // Cambiar a la siguiente fecha
        }

        if (horaIncrementada >= 6 && horaIncrementada < 12) {
          const nuevaInstanciaMorning = {
            ...medicamento,
            hora: `${horaIncrementada < 10 ? '0' : ''}${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          nuevosMedicamentosMorning.push(nuevaInstanciaMorning);
        } else if (horaIncrementada >= 12 && horaIncrementada < 18) {
          const nuevaInstanciaMediodia = {
            ...medicamento,
            hora: `${horaIncrementada < 10 ? '0' : ''}${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          nuevosMedicamentosMediodia.push(nuevaInstanciaMediodia);
        } else if (horaIncrementada >= 18 || horaIncrementada < 0) {
          const nuevaInstanciaTarde = {
            ...medicamento,
            hora: `${horaIncrementada < 10 ? '0' : ''}${horaIncrementada}:00:00`, // Formatear la hora (agregar 24 para convertir horas negativas a positivas)
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          nuevosMedicamentosTarde.push(nuevaInstanciaTarde);
        } else {
          const nuevaInstanciaNight = {
            ...medicamento,
            hora: `${horaIncrementada < 10 ? '0' : ''}${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          nuevosMedicamentosNight.push(nuevaInstanciaNight);
        }
      }

      setMedicamentosNight((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosNight]);
      setMedicamentosMorning((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosMorning]);
      setMedicamentosMediodia((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosMediodia]);
      setMedicamentosTarde((prevMedicamentos) => [...prevMedicamentos, ...nuevosMedicamentosTarde]);
      setHora(fechaActual.toLocaleTimeString());
    } else {
      setHora(window.localStorage.getItem('hora') || null);
    }

    window.localStorage.setItem('medicamentosNight', JSON.stringify([...nuevosMedicamentosNight, ...medicamentosNight] || []));
    window.localStorage.setItem('medicamentosMorning', JSON.stringify([...nuevosMedicamentosMorning, ...medicamentosMorning] || []));
    window.localStorage.setItem('medicamentosMediodia', JSON.stringify([...nuevosMedicamentosMediodia, ...medicamentosMediodia] || []));
    window.localStorage.setItem('medicamentosTarde', JSON.stringify([...nuevosMedicamentosTarde, ...medicamentosTarde] || []));
    window.localStorage.setItem('fecha', fechaActual.toLocaleDateString());
    window.localStorage.setItem('hora', (horaActual >= 18 || horaActual < 6) ? fechaActual.toLocaleTimeString() : null);
  };
  useEffect(() => {
    const remainingMedicamentos = [
      ...medicamentosNight.slice(4),
      ...medicamentosMorning.slice(4),
      ...medicamentosMediodia.slice(4),
      ...medicamentosTarde.slice(4),
    ];
    setMedicamentosRestantes(remainingMedicamentos);
  }, [medicamentosNight, medicamentosMorning, medicamentosMediodia, medicamentosTarde]);


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
      
      {/* Mostrar la tabla de night */}
      <h4>Noche</h4>
      <table>
        <thead>
          <tr>
            <th>Nombre Medicina</th>
            <th>Dosis</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Comentarios</th>
            <th>Tomar</th>
            <Accordion
        title="Noche"
        content={
          <div>
            {medicamentosRestantes.map(
              (medicamento, index) =>
                medicamento.toma === 'noche' && (
                  <div key={index}>
                    <p>{medicamento.nombreMedicina}</p>
                    <button onClick={() => agregarMedicamento(medicamento)}>Tomar</button>
                  </div>
                )
            )}
          </div>
        }
      />
          </tr>
        </thead>
        <tbody>
        
    {medicamentosNight.slice(0, 4).map((medicamento, index) => (
      <tr key={index}>
        <td>{medicamento.nombreMedicina}</td>
        <td>{medicamento.dosis}</td>
        <td>{medicamento.hora}</td>
        <td>{medicamento.fecha}</td>
        <td>{medicamento.comentarios}</td>
        <td>{medicamento.toma}</td>
        <td>
          <button onClick={() => agregarMedicamento(medicamento)}>
            Tomar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
      </table>
      {/* Mostrar la tabla de morning */}
      <h4>Mañana</h4>
      <table>
        <thead>
          <tr>
            <th>Nombre Medicina</th>
            <th>Dosis</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Comentarios</th>
            <th>Tomar</th>
          </tr>
        </thead>
        <tbody>
        <Accordion
        title="Mañana"
        content={
          <div>
            {medicamentosRestantes.map(
              (medicamento, index) =>
                medicamento.toma === 'morning' && (
                  <div key={index}>
                    <p>{medicamento.nombreMedicina}</p>
                    <button onClick={() => agregarMedicamento(medicamento)}>Tomar</button>
                  </div>
                )
            )}
          </div>
        }
      />
    {medicamentosMorning.slice(0, 4).map((medicamento, index) => (
      <tr key={index}>
        <td>{medicamento.nombreMedicina}</td>
        <td>{medicamento.dosis}</td>
        <td>{medicamento.hora}</td>
        <td>{medicamento.fecha}</td>
        <td>{medicamento.comentarios}</td>
        <td>{medicamento.toma}</td>
        <td>
          <button onClick={() => agregarMedicamento(medicamento)}>
            Tomar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
      </table>
      {/* Mostrar la tabla de mediodía */}
      <h4>Mediodía</h4>
      <table>
        <thead>
          <tr>
            <th>Nombre Medicina</th>
            <th>Dosis</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Comentarios</th>
            <th>Tomar</th>
            <th></th>
            <th><Accordion
          title="Mediodía"
          content={
            <div>
              {medicamentosRestantes.map(
                (medicamento, index) =>
                  medicamento.toma === 'mediodía' && (
                    <div key={index}>
                      <p>{medicamento.nombreMedicina}</p>
                      <button onClick={() => agregarMedicamento(medicamento)}>Tomar</button>
                    </div>
                  )
              )}
            </div>
          }
        /></th>
          </tr>
        </thead>
        <tbody>
        
    {medicamentosMediodia.slice(0, 4).map((medicamento, index) => (
      <tr key={index}>
        <td>{medicamento.nombreMedicina}</td>
        <td>{medicamento.dosis}</td>
        <td>{medicamento.hora}</td>
        <td>{medicamento.fecha}</td>
        <td>{medicamento.comentarios}</td>
        <td>{medicamento.toma}</td>
        <td>
          <button onClick={() => agregarMedicamento(medicamento)}>
            Tomar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
      </table>
      {/* Mostrar la tabla de tarde */}
      <h4>Tarde</h4>
      <table>
        <thead>
          <tr>
            <th>Nombre Medicina</th>
            <th>Dosis</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Comentarios</th>
            <th>Tomar</th>
          </tr>
        </thead>
        <tbody>
          <Accordion
        title="Tarde"
        content={
          <div>
            {medicamentosRestantes.map(
              (medicamento, index) =>
                medicamento.toma === 'evening' && (
                  <div key={index}>
                    <p>{medicamento.nombreMedicina}</p>
                    <button onClick={() => agregarMedicamento(medicamento)}>Tomar</button>
                  </div>
                )
            )}   
          </div>
        }
      />
    {medicamentosTarde.slice(0, 4).map((medicamento, index) => (
      <tr key={index}>
        <td >{medicamento.nombreMedicina}</td>
        <td>{medicamento.dosis}</td>
        <td>{medicamento.hora}</td>
        <td>{medicamento.fecha}</td>
        <td>{medicamento.comentarios}</td>
        <td>{medicamento.toma}</td>
        <td>
          <button onClick={() => agregarMedicamento(medicamento)}>
            Tomar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
      </table>
      
    </>
  );
}

export default Medicamentos;
