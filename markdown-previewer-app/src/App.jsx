import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import './App.css'

function App() {

  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
