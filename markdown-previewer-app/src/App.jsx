import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import './App.css'
import { Button } from 'bootstrap'

function App() {
  return (
    <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="box">
                <Link to="/" className='navbar-brand'><img alt='Logo'/></Link>
              </div>
              <div className="box">
                <ul className='navbar-nav gap-5'>
                  <li className='nav-item'>
                    <Link to="/about-us" className='nav-link'>About Us</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/services" className='nav-link'>Services</Link>
                  </li>
                  <li className='nav-item'>
                    <a href="#" className='nav-link'>Contact</a>
                  </li>
                  <li className='nav-item'>
                    <Link to="/app" className='nav-link'>Start</Link>
                  </li>
                </ul>
                <div className="btn-group">
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
