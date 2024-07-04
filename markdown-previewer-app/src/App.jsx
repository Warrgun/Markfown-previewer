import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import './App.css'
import { Button } from 'bootstrap'

function App() {
  return (
    <>

        <nav className='navbar navbar-expand bg-dark'>
          <div className="container">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="/" className='nav-link'>Home</Link>
                </li>
              </ul>
          </div>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
