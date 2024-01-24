import React from 'react'
import {Link} from "react-router-dom"
import "./style/styles.css"

export default function Nav() {
  return (
    <div className='navbar'>
        <h3>Kalvium ❤️ </h3>
        <div id='links'>
            <Link className='link-style' to='/'>Squad</Link>
            <Link className='link-style' to='/Contacts'>Contacts</Link>
            <Link className='link-style' to='/About'>About</Link>
        </div>

    </div>
  )
}
