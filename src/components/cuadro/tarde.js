import {useState, useEffect} from 'react'
import Axios from 'axios';

function Tarde() {
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
      <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}>{medicamento.nombreMedicina}</p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(171, 240, 233)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p  style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
            <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(130, 225, 219)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(168, 241, 232)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
    </>
  )
}

export default Tarde
