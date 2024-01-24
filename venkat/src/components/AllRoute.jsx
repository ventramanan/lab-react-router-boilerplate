import React from 'react'
import {Routes,Route} from "react-router-dom"
import Contacts from './Contacts'
import About from './About'
import Squad from './Squad'

export default function AllRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Squad/>}></Route>
            <Route path='/Contacts' element={<Contacts/>}></Route>
            <Route path='/About' element={<About/>}></Route>
        </Routes>
    </div>
  )
}
