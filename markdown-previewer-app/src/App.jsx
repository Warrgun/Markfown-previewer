import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import {Navbar, Button, NavbarCollapse, Container, Nav} from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <>
        <Navbar bg='dark' expand='lg' className='navbar-dark'>
          <Container fluid>
            <Navbar.Brand as={Link} to='/'>
              <img alt='Logo'/>
            </Navbar.Brand>
              <Navbar.Toggle  data-bs-toggle='collapse' data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </Navbar.Toggle>
              <NavbarCollapse id='navbarNav'>
                <div className="ms-auto d-flex align-items-center">\
                  <Nav className='gap-5'>
                    <Nav.Link as={Link} to='/' active aria-current='page'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about-us' >About Us</Nav.Link>
                    <Nav.Link href='Contact'>Contact</Nav.Link>
                    <Nav.Link as={Link} to='/app'>START</Nav.Link>
                  </Nav>
                  <div className=" d-flex ms-3">
                    <Button variant='outline-primary' type='button' className='btn-light rounded-0 m-2'>Learn</Button>
                    <Button variant='outline-light' className='btn-dark rounded-0 m-2'>Sign Up</Button> 
                  </div>
                </div>
                </NavbarCollapse>
              </Container>
          </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<h1>Work in progress</h1>}/>
        <Route path='/app' element={<h1>Work in progress</h1>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
