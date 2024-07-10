import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import './App.css'

function App() {
  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className="container-fluid">
              <Link to="/" className='navbar-brand'><img alt='Logo'/></Link>
              <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className="collapse navbar-collapse" id='navbarNav'>
                <div className="ms-auto d-flex align-items-center">\
                  <ul className='navbar-nav gap-5'>
                    <li className='nav-item'>
                      <Link to="/" className='nav-link active' aria-current='page'>Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to="/about-us" className='nav-link'>About Us</Link>
                    </li>
                    <li className='nav-item'>
                      <a href="#" className='nav-link'>Contact</a>
                    </li>
                    <li className='nav-item'>
                        <Link to="/app" className='nav-link' id='start'>Start</Link>
                    </li>
                  </ul>
                  <div className=" d-flex ms-3">
                    <button className='btn btn-light btn-outline-primary rounded-0 m-2'>Learn</button>
                    <button className='btn btn-dark btn-outline-light rounded-0 m-2'>Sign Up</button> 
                  </div>
                </div>
              </div>
              
            </div>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<h1>Work in progress</h1>}/>
        <Route path='/services' element={<h1>Work in progress</h1>}/>
        <Route path='/app' element={<h1>Work in progress</h1>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
