import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './css/login.css';
import './css/tabs.css';
import './css/cards.css';
import './css/medicamentos.css';
import './css/menu.css';
import Login from './page/login';
import Home from './page/home';
import Cuadro from './page/cuadro';
import Formulario from './components/formulario';
import Medicamentos from './components/madicamentos';

function App() {
  const router = createBrowserRouter([
    {
      path:"/home",
      element: <Home/>
    },
    {
      path:'/',
      element: <Login/>
    },
    {
      path:'/cuadro',
      element: <Cuadro/>
    },
    {
      path:'/formulario',
      element: <Formulario/>
    },
    {
      path: '/medicamentos',
      element: <Medicamentos/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
