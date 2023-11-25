import {useState, useEffect} from 'react'
import Axios from 'axios';

function Mediodia() {
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
  return (
    <>
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
                    ".cls-1,.cls-2{fill:none;}.cls-2{stroke: rgb(194, 169, 129);stroke-linecap:round;stroke-linejoin:round;}"
                }}
              />
            </defs>
            <g data-name="Layer 2" id="Layer_2">
              <g id="Workspace">
                <rect className="cls-1" height={24} width={5} />
                <line className="cls-2" x1={10} x2={10} y1={6} y2={5} />
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
                <line className="cls-2" x1="5.67" x2="4.8" y1="13.5" y2={14} />
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
      <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
          <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(250, 237, 218)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(252, 242, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
    </>
  )
}

export default Mediodia
