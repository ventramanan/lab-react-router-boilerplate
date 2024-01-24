import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import AllRoute from './components/AllRoute'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <AllRoute/>
    </BrowserRouter>
     
    </>
  )
}

export default App
