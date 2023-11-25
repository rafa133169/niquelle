import {useState, useEffect} from 'react'
import Axios from 'axios';

function CuandoQuiera() {
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
                dangerouslySetInnerHTML={{ __html: " .st0{fill:#659A88;} " }}
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
      <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
           
            </div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
      <td>
      <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}>
            
            <p key={medicamento.id_medicina} style={{padding:0, marginBottom:8, marginTop:0, paddingTop:0}}></p>
            
            </div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(199, 233, 217)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
          <div  style={{
            backgroundColor: "rgb(230, 251, 244)",
            marginBottom: 2,
            height: 30,
            textAlign:'center',
            marginTop:0
          }}></div>
      </td>
    </>
  )
}

export default CuandoQuiera
