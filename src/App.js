import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Area from './Components/Area/Area'
import Projects from './Components/Project/Projects'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <body>
      <Header />
      {/* <Area /> */}
      <Routes>
        <Route path='/project' element={<Projects />} />
        <Route path='/' element={<Area/>} />
      </Routes>







    </body>
  )
}

export default App
