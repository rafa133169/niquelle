import {useState, useEffect} from 'react'
import Axios from 'axios';
import Medicamentos from '../madicamentos';

function Mañana() {
  const [medicina,setMedicina] =useState([]);
  const [medicamentosSeleccionados, setMedicamentosSeleccionados] = useState([]);
  const [botonVisible, setBotonVisible] = useState(true);
  const [fecha, setFecha] = useState(null); // Estado para almacenar la fecha actual
  const [hora, setHora] = useState(null);

    
    useEffect(()=>{
        Axios.get(`http://localhost:3001/medicina`)
        .then(respuesta=>{
            setMedicina(respuesta.data.listamedicina);
            
        })
        .catch(error=> console.error(error));
    },[])

    const agregarMedicamento = (medicamento) => {
      setMedicamentosSeleccionados([...medicamentosSeleccionados, medicamento]);
      setBotonVisible(false);
      const fechaHoraActual = new Date();
      setFecha(fechaHoraActual.toLocaleDateString());
    setHora(fechaHoraActual.toLocaleTimeString());
    };
  return (
    <>
          <th style={{ border: "rgba(0, 0, 0, 0)", width: 50, paddingTop: 0 }}>
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
          <div  style={{
            backgroundColor: "rgb(252, 216, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            {medicamentosSeleccionados.map ((medicamento) =>(
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}>{medicamento.nombreMedicina}</p>
            ))}
            </div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
            <div  style={{
            backgroundColor: "rgb(252, 216, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            {medicamentosSeleccionados.map ((medicamento) =>(
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}>{medicamento.dosis}</p>
            ))}
            </div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            {hora && medicamentosSeleccionados.map ((medicamento) =>(
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}>{hora}</p>
            ))}
            </div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            marginTop:0,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            {fecha && medicamentosSeleccionados.map ((medicamento) =>(
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}>{fecha}</p>
            ))}
            </div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            {medicamentosSeleccionados.map ((medicamento) =>(
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}>{medicamento.comentarios}</p>
            ))}
            </div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 218, 216)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
            <div  style={{
            backgroundColor: "rgb(248, 190, 186)",
            marginBottom: 2,
            height: 30,
            textAlign:'center'
          }}></div>
      </td>
    </>
  )
}

export default Mañana
