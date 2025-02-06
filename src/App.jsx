import Home from './pages/Home/Home'
import Entreprise from './pages/Entreprise/Entreprise'
import Realisation from './pages/Realisation/Realisation'
import Contact from './pages/Contact/Contact'
import Mentions from './pages/Mentions/Mentions'
import Test from './pages/Test'
import {RouterProvider, createBrowserRouter} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/entreprise',
    element: <Entreprise/> 
  },
  {
    path: '/realisation',
    element: <Realisation/> 
  },
  {
    path: '/contact',
    element: <Contact/> 
  },
  {
    path: '/mentions',
    element: <Mentions/> 
  },
  {
    path: '/Test',
    element: <Test/> 
  },
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
