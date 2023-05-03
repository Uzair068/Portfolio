import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Area from './Components/Area/Area'
import Projects from './Components/Project/Projects'
import { Route, Routes } from 'react-router-dom'
import Education from './Components/Education/Education'
import Links from './Components/Prolink/Links'
import Aboutme from './Components/About/Aboutme'



function App() {
  return (
    <body>
      <Header />
      {/* <Area />   */}
      <Routes>
        <Route path='/project' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/link' element={<Links/>} />
        <Route path='/about' element={<Aboutme/>} />
        <Route path='/' element={<Area/>} />
      </Routes>
      {/* <Education/> */}







    </body>
  )
}

export default App
