import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//leyaut
import MainLayout from './components/Layouts/MainLayout.jsx'
import AutheLAyout from './components/Layouts/AutheLAyout.jsx'

//Pages
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Registr from './pages/registr.jsx'
import Teachers from './pages/teachers.jsx'


function App() {
 

  return (
    <section>
      <Router>
        <Routes>

          <Route element={<MainLayout/>}>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Teachers' element={<Teachers/>}></Route>
          </Route>

          <Route  element={<AutheLAyout/>}>
              <Route path='/Login' element = {<Login/>}></Route>
              <Route path='/Registr' element = {<Registr/>}></Route>
          </Route>

        </Routes>
      </Router>
    </section>
  )
}

export default App
