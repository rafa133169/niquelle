import { useState,} from "react";
import Axios from "axios";


function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("")
  

  const add = ()=>{
    Axios.post('http://localhost:3001/usuarios',{
      usuario: usuario,
      contraseña: contraseña
    }).then(()=>{
      console.log("Usuario registrado")
    })
  }

  const Login = async() =>{
    const response = await Axios.post('http://localhost:3001/login',{
      usuario: usuario,
      contraseña: contraseña
    })
    if (response.data.status){
      window.location.href= "/cuadro"
    }else{
      console.log("usuario o contraseña erroneas")
    }
  }
  return (
    <>
    <div className='body'>
  <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" className='input_login'/>
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true" className='label_login'>
          Registrate
        </label>
        <input type="text" name="txt" placeholder="Usuario" required="" className='input_login' onChange={(event)=>{
                    setUsuario(event.target.value)
                  }}/>
        <input type="password" name="pswd" placeholder="Contraseña" required="" className='input_login' onChange={(event)=>{
                    setContraseña(event.target.value)
                  }}/>
        <button className='boton_login' onClick={add}>Registrate</button>
      </form>
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true" className='label_login'>
          Inicio de sesión
        </label>
        <input type="text" name="txt" placeholder="Usuario" required="" className='input_login' onChange={(event)=>{
                    setUsuario(event.target.value)
                  }}/>
        <input type="password" name="pswd" placeholder="Contraseña" required="" className='input_login' onChange={(event)=>{
                    setContraseña(event.target.value)
                  }} />
        <button className='boton_login' onClick={Login}>Inicio de sesión</button>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default Login
