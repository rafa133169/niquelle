import { useState } from "react";
import Home from "../page/home";
import Axios from "axios";

function Formulario() {
  const [medicamento, setMedicamento] = useState("");
  const [dosis, setDosis] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [toma, setToma] = useState("");
  const [estatus, setEstatus] = useState(false);
  const [dia, setDia] = useState("");
  const fechaMySQL = new Date().toISOString().slice(0, 10);

  const agregarMedicamento = (e) => {
    
    e.preventDefault();
    Axios.post("http://localhost:3001/medicina", {
      nombreMedicina: medicamento,
      dosis: dosis,
      toma: toma,
      dia: dia,
      hora: new Date().toLocaleTimeString("es-ES"),
      fecha: fechaMySQL,
      comentarios: comentarios,
      estatus: estatus, // Aquí estás enviando el estado actual del checkbox
    }).then(() => {
      console.log("Medicamento agregado");
    });
    setMedicamento("");
    setDosis("");
    setToma("");
    setDia("");
    setComentarios("");
    setEstatus(false);
  };

  return (
    <>
      <Home />
      <div style={{ marginTop: 130, marginLeft: 50, marginRight: 50 }}>
        <h1 style={{ marginBottom: 20 }}>Agregar nuevo medicamento</h1>
        <form onSubmit={agregarMedicamento}>
          <div className="mb-3">
            <label className="form-label">Medicamento:</label>
            <input
              type="text"
              value={medicamento}
              onChange={(e) => setMedicamento(e.target.value)}
              className="form-control"
              placeholder="Ingresar medicamento"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dosis:</label>
            <input
              type="number"
              value={dosis}
              onChange={(e) => setDosis(e.target.value)}
              className="form-control"
              placeholder="Ingresar dosis"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Cada cuantas horas se va a tomar:
            </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={toma}
                onChange={(e) => setToma(e.target.value)}
                className="form-control"
                placeholder="Horas"
                disabled={estatus}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Cuantos días se va a tomar:</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                className="form-control"
                placeholder="Días"
                disabled={estatus}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Cuando lo necesite</label>
            <input
              type="checkbox"
              id="miCheckbox"
              name="miCheckbox"
              style={{ marginLeft: 5, width: 20, height: 20 }}
              checked={estatus}
              onChange={(e) => setEstatus(e.target.checked)}
              
            />
            
          </div>
          <div className="mb-3">
            <label className="form-label">Comentario:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Opcional"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            />
          </div>
          <button type="submit">Agregar Medicamento</button>
        </form>
      </div>
    </>
  );
}
export default Formulario;
