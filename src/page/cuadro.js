import React, { useState, useEffect } from "react";
import Axios from "axios";
import Home from "./home";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        marginRight: 10,
        marginBottom: 20,
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={handleToggle}>
        <h4>{title}</h4>
      </div>
      {isOpen && <div>{content}</div>}
    </div>
  );
}

function Cuadro() {
  const [medicina, setMedicina] = useState([]);
  const [medicamentosNight, setMedicamentosNight] = useState([]);
  const [medicamentosMorning, setMedicamentosMorning] = useState([]);
  const [medicamentosMediodia, setMedicamentosMediodia] = useState([]);
  const [mediodiaMedicamento, setMediodiaMedicamento] = useState([]);
  const [medicamentosTarde, setMedicamentosTarde] = useState([]);
  const [medicamentosRestantes, setMedicamentosRestantes] = useState([]);
  const [morningMedicamento, setMorningMedicamento] = useState([]);
  const [nocheMedicamento, setNocheMedicamento] = useState([]);
  const [tardeMedicamento, setTardeMedicamento] = useState([]);
  const [cualquieraMedicamento, setCualquieraMedicamento] = useState([]);
  const [tablaMedicamentosToma0, setTablaMedicamentosToma0] = useState([]);
  const [fecha, setFecha] = useState(
    window.localStorage.getItem("fecha") || null
  );
  const [hora, setHora] = useState(window.localStorage.getItem("hora") || null);

  useEffect(() => {
    Axios.get(`http://localhost:3001/medicina`)
      .then((respuesta) => {
        setMedicina(respuesta.data.listamedicina);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    try {
      // Tu código Axios aquí
      Axios.get(`http://localhost:3001/mediodia`)
        .then((respuesta) => {
          setMediodiaMedicamento(respuesta.data.listamediodia);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.error("Error de respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió una respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
  }, []);
  useEffect(() => {
    try {
      // Tu código Axios aquí
      Axios.get(`http://localhost:3001/morning`)
        .then((respuesta) => {
          setMorningMedicamento(respuesta.data.listamorning);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.error("Error de respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió una respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
  }, []);

  useEffect(() => {
    try {
      // Tu código Axios aquí
      Axios.get(`http://localhost:3001/cualquiera`)
        .then((respuesta) => {
          setCualquieraMedicamento(respuesta.data.listacualquiera);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.error("Error de respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió una respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
  }, []);

  useEffect(() => {
    try {
      // Tu código Axios aquí
      Axios.get(`http://localhost:3001/tarde`)
        .then((respuesta) => {
          setTardeMedicamento(respuesta.data.listatarde);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.error("Error de respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió una respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
  }, []);

  useEffect(() => {
    try {
      // Tu código Axios aquí
      Axios.get(`http://localhost:3001/noche`)
        .then((respuesta) => {
          setNocheMedicamento(respuesta.data.listaNoche);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.error("Error de respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió una respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
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

    const horaActual = fechaActual.getHours() + medicamento.toma;
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
        if (medicamento.estatus === 1) {
          const nuevaInstanciaCualquiera = {
            ...medicamento,
            hora: `${
              horaIncrementada < 10 ? "0" : ""
            }${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };

          Axios.post("http://localhost:3001/cualquiera", {
            id_medic: nuevaInstanciaCualquiera.id_medicina,
            estatus: 1, // Aquí estás enviando el estado actual del checkbox
          }).then(() => {
            console.log("Medicamento agregado");
          });
        } else if (horaIncrementada >= 6 && horaIncrementada < 12) {
          const nuevaInstanciaMorning = {
            ...medicamento,
            hora: `${
              horaIncrementada < 10 ? "0" : ""
            }${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          Axios.post("http://localhost:3001/morning", {
            id_medic: nuevaInstanciaMorning.id_medicina,
            hora: nuevaInstanciaMorning.hora,
            fecha: nuevaInstanciaMorning.fecha,
            estatus: 0, // Aquí estás enviando el estado actual del checkbox
          }).then(() => {
            console.log("Medicamento agregado");
          });
          nuevosMedicamentosMorning.push(nuevaInstanciaMorning);

          alert(nuevosMedicamentosMorning);
        } else if (horaIncrementada >= 12 && horaIncrementada < 18) {
          const nuevaInstanciaMediodia = {
            ...medicamento,
            hora: `${
              horaIncrementada < 10 ? "0" : ""
            }${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          console.log(nuevaInstanciaMediodia.fecha);
          const fechaMySQL = new Date().toISOString().slice(0, 10);
          Axios.post("http://localhost:3001/mediodia", {
            id_medic: nuevaInstanciaMediodia.id_medicina,
            hora: `${
              horaIncrementada < 10 ? "0" : ""
            }${horaIncrementada}:00:00`,
            fecha: fechaMySQL,
            estatus: 0, // Aquí estás enviando el estado actual del checkbox
          }).then(() => {
            console.log("Medicamento agregado");
          });
          nuevosMedicamentosMediodia.push(nuevaInstanciaMediodia);
        } else if (horaIncrementada >= 18 || horaIncrementada < 20) {
          const nuevaInstanciaTarde = {
            ...medicamento,
            hora: `${
              horaIncrementada < 10 ? "0" : ""
            }${horaIncrementada}:00:00`, // Formatear la hora (agregar 24 para convertir horas negativas a positivas)
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          Axios.post("http://localhost:3001/tarde", {
            id_medic: nuevaInstanciaTarde.id_medicina,
            hora: nuevaInstanciaTarde.hora,
            fecha: nuevaInstanciaTarde.fecha,
            estatus: 0, // Aquí estás enviando el estado actual del checkbox
          }).then(() => {
            console.log("Medicamento agregado");
          });
          nuevosMedicamentosTarde.push(nuevaInstanciaTarde);
        } else {
          const nuevaInstanciaNight = {
            ...medicamento,
            hora: `${
              horaIncrementada < 10 ? "0" : ""
            }${horaIncrementada}:00:00`, // Formatear la hora
            fecha: fechaSiguiente.toLocaleDateString(), // Actualizar la fecha si es necesario
          };
          Axios.post("http://localhost:3001/noche", {
            id_medic: nuevaInstanciaNight.id_medicina,
            hora: nuevaInstanciaNight.hora,
            fecha: nuevaInstanciaNight.fecha,
            estatus: 0, // Aquí estás enviando el estado actual del checkbox
          }).then(() => {
            console.log("Medicamento agregado");
          });
          nuevosMedicamentosNight.push(nuevaInstanciaNight);
        }
      }

      setMedicamentosNight((prevMedicamentos) => [
        ...prevMedicamentos,
        ...nuevosMedicamentosNight,
      ]);
      setMedicamentosMorning((prevMedicamentos) => [
        ...prevMedicamentos,
        ...nuevosMedicamentosMorning,
      ]);
      setMedicamentosMediodia((prevMedicamentos) => [
        ...prevMedicamentos,
        ...nuevosMedicamentosMediodia,
      ]);
      setMedicamentosTarde((prevMedicamentos) => [
        ...prevMedicamentos,
        ...nuevosMedicamentosTarde,
      ]);
      setHora(fechaActual.toLocaleTimeString());
    } else {
      setHora(window.localStorage.getItem("hora") || null);
    }

    window.localStorage.setItem(
      "medicamentosNight",
      JSON.stringify([...nuevosMedicamentosNight, ...medicamentosNight] || [])
    );
    window.localStorage.setItem(
      "medicamentosMorning",
      JSON.stringify(
        [...nuevosMedicamentosMorning, ...medicamentosMorning] || []
      )
    );
    window.localStorage.setItem(
      "medicamentosMediodia",
      JSON.stringify(
        [...nuevosMedicamentosMediodia, ...medicamentosMediodia] || []
      )
    );
    window.localStorage.setItem(
      "medicamentosTarde",
      JSON.stringify([...nuevosMedicamentosTarde, ...medicamentosTarde] || [])
    );
    window.localStorage.setItem("fecha", fechaActual.toLocaleDateString());
    window.localStorage.setItem(
      "hora",
      horaActual >= 18 || horaActual < 6
        ? fechaActual.toLocaleTimeString()
        : null
    );
  };
  useEffect(() => {
    const remainingMedicamentos = [
      ...medicamentosNight.slice(4),
      ...medicamentosMorning.slice(4),
      ...medicamentosMediodia.slice(4),
      ...medicamentosTarde.slice(4),
    ];
    setMedicamentosRestantes(remainingMedicamentos);
  }, [
    medicamentosNight,
    medicamentosMorning,
    medicamentosMediodia,
    medicamentosTarde,
  ]);

  return (
    <>
      <Home />
      <div
        style={{
          marginTop: 130,
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 50,
        }}
      >
        <h1 style={{ marginBottom: 20 }}>Control de medicamentos</h1>
        <div
          style={{
            marginTop: 50,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 50,
          }}
        >
          <h3>Pendiente...</h3>
          {medicina.map((medicamento) => (
            <div
              key={medicamento.id_medicina}
              style={{
                display: "inline-flex",
                marginRight: 10,
                marginBottom: 20,
              }}
            >
              {nocheMedicamento.some(
                (seleccionado) =>
                  seleccionado.id_medicina === medicamento.id_medicina
              ) ||
              morningMedicamento.some(
                (seleccionado) =>
                  seleccionado.id_medicina === medicamento.id_medicina
              ) ||
              mediodiaMedicamento.some(
                (seleccionado) =>
                  seleccionado.id_medicina === medicamento.id_medicina
              ) ||
              tardeMedicamento.some(
                (seleccionado) =>
                  seleccionado.id_medicina === medicamento.id_medicina
              ) ? (
                <span></span>
              ) : (
                <button onClick={() => agregarMedicamento(medicamento)}>
                  {medicamento.nombreMedicina}
                </button>
              )}
            </div>
          ))}
          <Accordion
            title="Medicamentos Restantes"
            content={
              <div>
                {medicamentosRestantes.map((medicamento, index) => (
                  <div key={index}>
                    <p style={{ backgroundColor: "blue" }}>
                      {medicamento.nombreMedicina}
                    </p>
                    <button onClick={() => agregarMedicamento(medicamento)}>
                      Tomar
                    </button>
                  </div>
                ))}
              </div>
            }
          />
          <table>
            <tbody>
              <tr>
                <th />
                <th>Medicamento</th>
                <th>Dosis</th>
                <th>Horario</th>
                <th>Dia</th>
                <th>Comentario</th>
                <th></th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "rgba(0, 0, 0, 0)",
                    width: 50,
                    paddingTop: 0,
                  }}
                >
                  <figure style={{ backgroundColor: "rgb(253, 153, 153)" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,300,356"
                      style={{ marginLeft: 40, marginTop: 30 }}
                    >
                      <g
                        fill="#ab4c4a"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth={1}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M11.875,0.1875c-0.50391,0.0625 -0.87891,0.49219 -0.875,1v2c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-2c0.00391,-0.28906 -0.12109,-0.5625 -0.33594,-0.75391c-0.21484,-0.19141 -0.50391,-0.28125 -0.78906,-0.24609zM4,3.375c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l1.40625,1.40625c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-1.40625,-1.40625c-0.1875,-0.19922 -0.44531,-0.30859 -0.71875,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM19.6875,3.375c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-1.40625,1.40625c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l1.40625,-1.40625c0.29688,-0.28516 0.38672,-0.72656 0.22656,-1.10547c-0.15625,-0.37891 -0.53516,-0.62109 -0.94531,-0.61328c-0.03125,0 -0.0625,0 -0.09375,0zM12,5.1875c-3.84375,0 -7,3.15625 -7,7c0,3.84375 3.15625,7 7,7c3.84375,0 7,-3.15625 7,-7c0,-3.84375 -3.15625,-7 -7,-7zM12,7.1875c2.75391,0 5,2.24609 5,5c0,2.75391 -2.24609,5 -5,5c-2.75391,0 -5,-2.24609 -5,-5c0,-2.75391 2.24609,-5 5,-5zM0.8125,11.1875c-0.55078,0.05078 -0.95703,0.54297 -0.90625,1.09375c0.05078,0.55078 0.54297,0.95703 1.09375,0.90625h2c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-2c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM20.8125,11.1875c-0.55078,0.05078 -0.95703,0.54297 -0.90625,1.09375c0.05078,0.55078 0.54297,0.95703 1.09375,0.90625h2c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-2c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM5.46875,17.59375c-0.21875,0.03906 -0.41406,0.14844 -0.5625,0.3125l-1.40625,1.375c-0.39844,0.38672 -0.40234,1.02344 -0.01562,1.42188c0.38672,0.39844 1.02344,0.40234 1.42188,0.01563l1.40625,-1.40625c0.32422,-0.30078 0.41016,-0.77734 0.21484,-1.17187c-0.19141,-0.39844 -0.625,-0.61719 -1.05859,-0.54687zM18.1875,17.59375c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l1.40625,1.40625c0.39844,0.38672 1.03516,0.38281 1.42188,-0.01562c0.38672,-0.39844 0.38281,-1.03516 -0.01562,-1.42187l-1.40625,-1.375c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0zM11.875,20.1875c-0.50391,0.0625 -0.87891,0.49219 -0.875,1v2c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-2c0.00391,-0.28906 -0.12109,-0.5625 -0.33594,-0.75391c-0.21484,-0.19141 -0.50391,-0.28125 -0.78906,-0.24609z" />
                        </g>
                      </g>
                    </svg>
                    <figcaption>Mañana</figcaption>
                  </figure>
                </th>

                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 216, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {morningMedicamento &&
                      Array.isArray(morningMedicamento) &&
                      morningMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.nombreMedicina}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 216, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {morningMedicamento &&
                      Array.isArray(morningMedicamento) &&
                      morningMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.dosis}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {morningMedicamento &&
                      Array.isArray(morningMedicamento) &&
                      morningMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.horamorning}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      marginTop: 0,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {morningMedicamento &&
                      Array.isArray(morningMedicamento) &&
                      morningMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.fecha}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {medicamentosMorning
                      .slice(0, 4)
                      .map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.comentarios}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {morningMedicamento &&
                      Array.isArray(morningMedicamento) &&
                      morningMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <button
                            style={{ display: "flex" }}
                            key={index}
                            onClick={() => agregarMedicamento(medicamento)}
                          >
                            Tomar
                          </button>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 218, 216)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(248, 190, 186)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                    }}
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure style={{ backgroundColor: "rgb(255, 255, 202)" }}>
                    <svg
                      style={{ marginLeft: 10, marginTop: 10 }}
                      viewBox="0 0 30 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              ".cls-1,.cls-2{fill:none;}.cls-2{stroke: rgb(194, 169, 129);stroke-linecap:round;stroke-linejoin:round;}",
                          }}
                        />
                      </defs>
                      <g data-name="Layer 2" id="Layer_2">
                        <g id="Workspace">
                          <rect className="cls-1" height={24} width={5} />
                          <line
                            className="cls-2"
                            x1={10}
                            x2={10}
                            y1={6}
                            y2={5}
                          />
                          <line
                            className="cls-2"
                            x1="6.79"
                            x2="6.14"
                            y1="7.17"
                            y2="6.4"
                          />
                          <line
                            className="cls-2"
                            x1="5.08"
                            x2="4.09"
                            y1="10.13"
                            y2="9.96"
                          />
                          <line
                            className="cls-2"
                            x1="5.67"
                            x2="4.8"
                            y1="13.5"
                            y2={14}
                          />
                          <line
                            className="cls-2"
                            x1="13.21"
                            x2="13.86"
                            y1="7.17"
                            y2="6.4"
                          />
                          <path
                            className="cls-2"
                            d="M7.46,13.41A3.5,3.5,0,1,1,13,9.19l.08.12"
                          />
                          <path
                            className="cls-2"
                            d="M18,18a3,3,0,0,0,0-6H18a3.48,3.48,0,0,0-6.92.18A2.94,2.94,0,0,0,10,12a3,3,0,0,0,0,6Z"
                          />
                        </g>
                      </g>
                    </svg>
                    <figcaption>Mediodia</figcaption>
                  </figure>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {mediodiaMedicamento &&
                      Array.isArray(mediodiaMedicamento) &&
                      mediodiaMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.nombreMedicina}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {mediodiaMedicamento &&
                      Array.isArray(mediodiaMedicamento) &&
                      mediodiaMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.dosis}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {mediodiaMedicamento
                      .slice(0, 4)
                      .map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.horamediodia}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {mediodiaMedicamento &&
                      Array.isArray(mediodiaMedicamento) &&
                      mediodiaMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.fecha}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {mediodiaMedicamento &&
                      Array.isArray(mediodiaMedicamento) &&
                      mediodiaMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.comentarios}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {mediodiaMedicamento &&
                      Array.isArray(mediodiaMedicamento) &&
                      mediodiaMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => {
                          const horaDelMedicamento = medicamento.horamediodia;
                          const horaActual = new Date().getHours();
                          const diferenciaHora =
                            horaDelMedicamento - horaActual;
                          const mostrarBoton = diferenciaHora < 0;
                          return mostrarBoton ? (
                            <button
                              style={{ display: "flex" }}
                              key={index}
                              onClick={() => agregarMedicamento(medicamento)}
                            >
                              Tomar
                            </button>
                          ) : null;
                        })}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(250, 237, 218)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(252, 242, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure style={{ backgroundColor: "rgb(85, 191, 178)" }}>
                    <svg
                      style={{ marginLeft: 40, marginTop: 15 }}
                      fill="#1E7469"
                      height="90px"
                      width="90px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 612 612"
                      xmlSpace="preserve"
                      stroke="#1E7469"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M306.001,74.845c7.234,0,13.098-5.864,13.098-13.098V13.098C319.099,5.864,313.235,0,306.001,0 c-7.234,0-13.098,5.864-13.098,13.098v48.649C292.903,68.981,298.767,74.845,306.001,74.845z" />{" "}
                            <path d="M476.576,126.75c3.351,0,6.704-1.28,9.26-3.836l37.301-37.299c5.116-5.116,5.116-13.408,0.002-18.522 s-13.408-5.114-18.522-0.002l-37.301,37.299c-5.116,5.116-5.116,13.408-0.002,18.522 C469.872,125.472,473.223,126.75,476.576,126.75z" />{" "}
                            <path d="M126.162,122.914c2.558,2.556,5.911,3.836,9.262,3.836c3.351,0,6.704-1.28,9.262-3.836c5.114-5.116,5.114-13.408,0-18.524 l-37.297-37.299c-5.116-5.112-13.408-5.112-18.524,0c-5.114,5.116-5.114,13.408,0,18.524L126.162,122.914z" />{" "}
                            <path d="M495.59,271.131c-6.753-98.707-89.198-176.952-189.589-176.952S123.163,172.425,116.41,271.131H1.491v26.196h609.017 v-26.196H495.59z M306.001,120.375c85.94,0,156.633,66.509,163.328,150.756H142.671 C149.366,186.884,220.06,120.375,306.001,120.375z" />{" "}
                            <path d="M339.679,352.863h-67.357c-7.234,0-13.098,5.864-13.098,13.098s5.864,13.098,13.098,13.098h67.357 c7.234,0,13.098-5.864,13.098-13.098S346.913,352.863,339.679,352.863z" />{" "}
                            <path d="M472.989,379.059c7.234,0,13.098-5.864,13.098-13.098s-5.864-13.098-13.098-13.098h-67.357 c-7.234,0-13.098,5.864-13.098,13.098s5.864,13.098,13.098,13.098H472.989z" />{" "}
                            <path d="M206.368,352.863h-67.357c-7.234,0-13.098,5.864-13.098,13.098s5.864,13.098,13.098,13.098h67.357 c7.234,0,13.098-5.864,13.098-13.098S213.601,352.863,206.368,352.863z" />{" "}
                            <path d="M270.919,585.804h-67.357c-7.234,0-13.098,5.864-13.098,13.098S196.329,612,203.563,612h67.357 c7.234,0,13.098-5.864,13.098-13.098S278.153,585.804,270.919,585.804z" />{" "}
                            <path d="M408.439,585.804h-67.357c-7.234,0-13.098,5.864-13.098,13.098S333.849,612,341.083,612h67.357 c7.234,0,13.098-5.864,13.098-13.098S415.673,585.804,408.439,585.804z" />{" "}
                            <path d="M272.323,508.157c-7.234,0-13.098,5.864-13.098,13.098c0,7.234,5.864,13.098,13.098,13.098h67.357 c7.234,0,13.098-5.864,13.098-13.098c0-7.234-5.864-13.098-13.098-13.098H272.323z" />{" "}
                            <path d="M472.989,508.157h-67.357c-7.234,0-13.098,5.864-13.098,13.098c0,7.234,5.864,13.098,13.098,13.098h67.357 c7.234,0,13.098-5.864,13.098-13.098C486.087,514.021,480.223,508.157,472.989,508.157z" />{" "}
                            <path d="M219.465,521.254c0-7.234-5.864-13.098-13.098-13.098h-67.357c-7.234,0-13.098,5.864-13.098,13.098 c0,7.234,5.864,13.098,13.098,13.098h67.357C213.601,534.352,219.465,528.488,219.465,521.254z" />{" "}
                            <path d="M190.933,443.609c0,7.234,5.864,13.098,13.098,13.098h67.357c7.234,0,13.098-5.864,13.098-13.098 s-5.864-13.098-13.098-13.098h-67.357C196.797,430.511,190.933,436.375,190.933,443.609z" />{" "}
                            <path d="M327.517,443.609c0,7.234,5.864,13.098,13.098,13.098h67.357c7.234,0,13.098-5.864,13.098-13.098 s-5.864-13.098-13.098-13.098h-67.357C333.381,430.511,327.517,436.375,327.517,443.609z" />{" "}
                            <path d="M544.556,430.511h-67.357c-7.234,0-13.098,5.864-13.098,13.098s5.864,13.098,13.098,13.098h67.357 c7.234,0,13.098-5.864,13.098-13.098S551.789,430.511,544.556,430.511z" />{" "}
                            <path d="M147.899,443.609c0-7.234-5.864-13.098-13.098-13.098H67.444c-7.234,0-13.098,5.864-13.098,13.098 s5.864,13.098,13.098,13.098h67.357C142.035,456.706,147.899,450.842,147.899,443.609z" />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <figcaption>Tarde</figcaption>
                  </figure>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {tardeMedicamento &&
                      Array.isArray(tardeMedicamento) &&
                      tardeMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.nombreMedicina}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(171, 240, 233)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {tardeMedicamento &&
                      Array.isArray(tardeMedicamento) &&
                      tardeMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.dosis}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {tardeMedicamento &&
                      Array.isArray(tardeMedicamento) &&
                      tardeMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.horatarde}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {tardeMedicamento &&
                      Array.isArray(tardeMedicamento) &&
                      tardeMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.fecha}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {tardeMedicamento &&
                      Array.isArray(tardeMedicamento) &&
                      tardeMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.comentarios}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {tardeMedicamento &&
                      Array.isArray(tardeMedicamento) &&
                      tardeMedicamento.slice(0, 4).map((medicamento, index) => {
                        const horaDelMedicamento = new Date(
                          `2000-01-01T${medicamento.horatarde}`
                        );
                        const horaActual = new Date();
                        const diferenciaHora =
                          (horaDelMedicamento - horaActual) / (1000 * 60 * 60); // Diferencia en horas

                        const mostrarBoton = diferenciaHora <= 0;

                        return mostrarBoton ? (
                          <button
                            style={{ display: "flex" }}
                            key={index}
                            onClick={() => agregarMedicamento(medicamento)}
                          >
                            Tomar
                          </button>
                        ) : null;
                      })}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(130, 225, 219)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(168, 241, 232)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure style={{ backgroundColor: "rgb(106, 140, 185)" }}>
                    <svg
                      style={{ marginLeft: 40, marginTop: 15 }}
                      viewBox="0 0 48 48"
                      height="100px"
                      width="100px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#6A8CBA"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="night">
                          {" "}
                          <g id="night_2">
                            {" "}
                            <path
                              id="Combined Shape"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20.7808 39.678C30.2725 41.5227 38.9355 34.9129 39.9084 25.7064C25.3849 34.6376 13.3977 22.6246 22.2943 8.08028C13.086 9.04803 6.46841 17.7148 8.31368 27.2111C9.20895 31.8246 12.2255 35.8586 16.3944 38.1053C16.8806 38.3673 17.0623 38.9738 16.8003 39.46C16.5383 39.9462 15.9318 40.1279 15.4456 39.8659C10.7538 37.3374 7.36096 32.8002 6.35035 27.5923C4.19047 16.477 12.3759 6.3517 23.4224 6.00003C24.3791 5.97168 25.0622 6.89645 24.8058 7.79733L24.6708 8.08611C15.4263 21.6734 26.3363 32.6062 39.8994 23.3282L40.1834 23.1938C41.0866 22.9297 42.0251 23.6154 41.9895 24.5754C41.6379 35.6187 31.5135 43.8013 20.3992 41.6412C19.8571 41.5359 19.503 41.0109 19.6084 40.4688C19.7137 39.9267 20.2386 39.5726 20.7808 39.678ZM12.2323 26.4109C13.1386 31.0805 16.9115 34.8534 21.5811 35.7597C22.1233 35.8649 22.4775 36.3897 22.3723 36.9319C22.267 37.4741 21.7422 37.8283 21.2001 37.7231C15.7297 36.6614 11.3306 32.2623 10.2689 26.7919C10.1637 26.2497 10.5179 25.7249 11.0601 25.6197C11.6022 25.5145 12.127 25.8687 12.2323 26.4109Z"
                              fill="#294670"
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <figcaption>Noche</figcaption>
                  </figure>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {nocheMedicamento &&
                      Array.isArray(nocheMedicamento) &&
                      nocheMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.nombreMedicina}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {nocheMedicamento &&
                      Array.isArray(nocheMedicamento) &&
                      nocheMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.dosis}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {nocheMedicamento &&
                      Array.isArray(nocheMedicamento) &&
                      nocheMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.horanoche}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {nocheMedicamento &&
                      Array.isArray(nocheMedicamento) &&
                      nocheMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.fecha}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {nocheMedicamento &&
                      Array.isArray(nocheMedicamento) &&
                      nocheMedicamento.slice(0, 4).map((medicamento, index) => (
                        <p
                          key={index}
                          style={{
                            padding: 0,
                            marginBottom: 8,
                            marginTop: 0,
                            paddingTop: 0,
                          }}
                        >
                          {medicamento.comentarios}
                        </p>
                      ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {nocheMedicamento &&
                      Array.isArray(nocheMedicamento) &&
                      nocheMedicamento.slice(0, 4).map((medicamento, index) => {
                        const horaDelMedicamento = new Date(
                          `2000-01-01T${medicamento.horanoche}`
                        );
                        const horaActual = new Date();
                        const diferenciaHora =
                          (horaDelMedicamento - horaActual) / (1000 * 60 * 60); // Diferencia en horas

                        const mostrarBoton = diferenciaHora <= 0;


                        return mostrarBoton ? (
                          <button
                            style={{ display: "flex" }}
                            key={index}
                            onClick={() => agregarMedicamento(medicamento)}
                          >
                            Tomar
                          </button>
                        ) : null;
                      })}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(148, 179, 225)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(170, 196, 223)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure style={{ backgroundColor: "rgb(150, 208, 184)" }}>
                    <svg
                      style={{ marginLeft: 45, marginTop: 30 }}
                      height="80px"
                      width="80px"
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html: " .st0{fill:#659A88;} ",
                          }}
                        />{" "}
                        <g>
                          {" "}
                          <path
                            className="st0"
                            d="M490.014,117.161c-20.843-30.82-53.958-55.308-94.309-72.466C355.306,27.571,307.4,17.824,256,17.809 C187.466,17.864,125.144,35.077,78.542,64.26C55.26,78.891,35.847,96.605,21.986,117.161C8.141,137.654-0.024,161.262,0,186.124 v139.744c-0.024,24.862,8.134,48.469,21.986,68.97c20.843,30.819,53.958,55.3,94.301,72.466 C156.694,484.429,204.6,494.176,256,494.191c68.534-0.055,130.856-17.268,177.458-46.451 c23.273-14.631,42.686-32.353,56.555-52.902c13.845-20.501,22.011-44.109,21.986-68.97V186.124 C512.024,161.262,503.859,137.654,490.014,117.161z M40.669,186.124c0.024-16.006,5.052-31.336,15.052-46.245 c8.784-13.122,21.716-25.648,37.904-36.769l311.15,182.049c-7.077,3.908-14.512,7.602-22.415,10.946 c-35.713,15.164-79.313,24.179-126.36,24.171c-62.735,0.04-119.338-16.086-159.292-41.226 c-19.993-12.55-35.776-27.285-46.388-43.051c-3.924-5.847-7.141-11.804-9.651-17.872V186.124z M471.331,325.868 c-0.024,16.006-5.052,31.335-15.052,46.244c-14.933,22.296-41.582,43.004-76.453,57.755c-34.83,14.79-77.612,23.671-123.826,23.654 c-61.631,0.056-117.138-15.854-155.829-40.224c-19.366-12.153-34.466-26.323-44.45-41.186 c-10.001-14.909-15.029-30.239-15.052-46.244v-57.715c19.683,21.828,46.475,39.946,78.16,53.41 c39.51,16.744,86.597,26.355,137.171,26.371c67.429-0.04,128.656-17.046,173.995-45.467c15.918-9.992,29.842-21.462,41.336-34.195 V325.868z M471.331,218.127c-2.51,6.068-5.727,12.026-9.65,17.872c-6.855,10.214-16.03,19.937-26.983,28.968L126.582,84.689 c1.874-0.85,3.669-1.747,5.592-2.557C166.997,67.342,209.779,58.461,256,58.477c61.623-0.056,117.138,15.854,155.829,40.224 c19.366,12.152,34.466,26.323,44.45,41.177c10.001,14.909,15.029,30.239,15.052,46.245V218.127z"
                          />{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <figcaption>Cuando lo necesite</figcaption>
                  </figure>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {cualquieraMedicamento &&
                      Array.isArray(cualquieraMedicamento) &&
                      cualquieraMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.nombreMedicina}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {cualquieraMedicamento &&
                      Array.isArray(cualquieraMedicamento) &&
                      cualquieraMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.dosis}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {cualquieraMedicamento &&
                      Array.isArray(cualquieraMedicamento) &&
                      cualquieraMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            No se necesita un horario
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {cualquieraMedicamento &&
                      Array.isArray(cualquieraMedicamento) &&
                      cualquieraMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            No es necesaria la fecha
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {cualquieraMedicamento &&
                      Array.isArray(cualquieraMedicamento) &&
                      cualquieraMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => (
                          <p
                            key={index}
                            style={{
                              padding: 0,
                              marginBottom: 8,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                          >
                            {medicamento.comentarios}
                          </p>
                        ))}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    {cualquieraMedicamento &&
                      Array.isArray(cualquieraMedicamento) &&
                      cualquieraMedicamento
                        .slice(0, 4)
                        .map((medicamento, index) => {
                          const horaDelMedicamento = medicamento.hora;
                          const horaActual = new Date().getHours();
                          const diferenciaHora =
                            horaDelMedicamento - horaActual;
                          const mostrarBoton = diferenciaHora < 0;
                          return mostrarBoton ? (
                            <button
                              style={{ display: "flex" }}
                              key={index}
                              onClick={() => agregarMedicamento(medicamento)}
                            >
                              Tomar
                            </button>
                          ) : null;
                        })}
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(199, 233, 217)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "rgb(230, 251, 244)",
                      marginBottom: 2,
                      height: 30,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  ></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Cuadro;
