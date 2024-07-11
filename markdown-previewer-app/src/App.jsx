import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import {Navbar, Button, Container, Nav, Offcanvas} from 'react-bootstrap'
import './App.css'

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <>  
        <Navbar expand='lg' className='navbar-dark navbar-color border-bottom-color'>
          <Container fluid>
            <Navbar.Brand as={Link} to='/'>
              <img alt='Logo'/>
            </Navbar.Brand>
              <Navbar.Toggle  onClick={handleShow} aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </Navbar.Toggle>
              <Navbar.Offcanvas show={show} onHide={handleClose} id='navbarNav' placement='end' className='text-bg-dark'>
                <Offcanvas.Header className='border-bottom-color' closeButton>
                  <Offcanvas.Title ><img alt='Logo'/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='d-flex flex-column flex-lg-row align-items-center p-4 p-lg-0'>
                    <Nav className='justify-content-center justify-content-lg-end align-items-center flex-grow-1 gap-4'>
                      <Nav.Link as={Link} to='/' active aria-current='page' onClick={handleClose}>Home</Nav.Link>
                      <Nav.Link as={Link} to='/about-us' onClick={handleClose}>About Us</Nav.Link>
                      <Nav.Link href='Contact' onClick={handleClose}>Contact</Nav.Link>
                      <Nav.Link as={Link} to='/app' onClick={handleClose}>START</Nav.Link>
                    </Nav>
                    <div className=" d-lg-flex ms-lg-3">
                      <Button variant='outline-primary' type='button' className='btn-light rounded-0 m-lg-2 me-2'>Learn</Button>
                      <Button variant='outline-light' type='button' className='btn-dark rounded-0 m-lg-2'>Sign Up</Button> 
                    </div>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
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
