import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
    <header className="main-header">
  <div className="container">
    <nav className="navbar navbar-expand-lg main-nav px-0">
      <h1 style={{fontSize:'23px', marginRight:80}} className="active active-first">Bienvenido usuario</h1>
      <div className="collapse navbar-collapse" id="mainMenu">
        <ul className="navbar-nav ml-auto text-uppercase f1">
          <li>
            <Link to={'/cuadro'} >
              Control de Medicamentos
            </Link>
          </li>
          <li>
            <Link to={'/formulario'}>Agregar medicamento</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

    </>
  )
}

export default Home
