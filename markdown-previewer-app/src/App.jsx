import React, { useState, useRef, useCallback, useEffect } from 'react'
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import NotFound from './NotFound'
import SignUpModal from './SignUpModal'
import useThrottle from './custom-hooks/useThrottle'
import logo from  './assets/logo.png'
import {Navbar, Button, Container, Nav, Offcanvas} from 'react-bootstrap'
import './App.css'

function App() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const lastScrollPosition = useRef(0);
  const navContainer = useRef(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleScroll = useCallback(() =>{
    let scrollPosition = window.scrollY != undefined ? window.scrollY: document.documentElement.scrollTop;

    if(scrollPosition > lastScrollPosition.current){
      navContainer.current.style.top = '-80px'; 
    }
    else if(scrollPosition < lastScrollPosition.current){
      navContainer.current.style.top = '0';
    }
    lastScrollPosition.current = Math.max(scrollPosition,0);
  },[]);

  const throttledScrollFunc = useThrottle(handleScroll,10);

  const updateEventListener = useCallback(() =>{
    const mobile = window.matchMedia('only screen and (max-width: 991px)').matches;
    if(!mobile){
      document.addEventListener('scroll', throttledScrollFunc,{passive:true});
    }
    else{
      document.removeEventListener('scroll', throttledScrollFunc)
    }
  },[throttledScrollFunc]);

  useEffect(() =>{
    updateEventListener();
    window.addEventListener('resize', updateEventListener);

    return(()=>{
      document.removeEventListener('scroll', throttledScrollFunc);
      window.removeEventListener('resize', updateEventListener);
    })
  },[throttledScrollFunc])

  return (
    <> 
      <div className="d-flex flex-column min-vh-100">
        <Navbar ref={navContainer} fixed='top' expand='md' className='navbar-dark navbar-color border-bottom-color w-100'>
          <Container fluid>
            <Navbar.Brand as={Link} to={'/'}>
              <img alt='Logo' src={logo} style={{width:"2.9em"}}/>
            </Navbar.Brand>
            <Navbar.Toggle onClick={handleShow} aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation' className='border-0 shadow-none'/>
            <Navbar.Offcanvas show={show} onHide={handleClose} id='navbarNav' placement='end' className='text-bg-dark'>
              <Offcanvas.Header className='border-bottom-color' closeButton>
                <Offcanvas.Title ><img src={logo} style={{width:"2.6em"}} alt='Logo'/></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex flex-column flex-md-row align-items-center p-4 p-md-0'>
                  <Nav className='justify-content-center justify-content-md-end align-items-center flex-grow-1 gap-4'>
                    <Nav.Item>
                      <Nav.Link as={NavLink} to='/' aria-current='page' onClick={handleClose}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={NavLink} to='/about-us' onClick={handleClose}>About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={NavLink} to='/contact' onClick={handleClose}>Contact</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className=" d-md-flex ms-md-3">
                    <Button onClick={handleShowModal}  className='button-one rounded-0 m-lg-2 me-2 fw-bold input-focus'>Sign Up</Button>
                    <Button type='button' as={Link} to='/app' onClick={handleClose} className='button-two rounded-0 m-lg-2 fw-bold input-focus'>Start For Free</Button> 
                  </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home handleShowModal={handleShowModal}/>}/>
          <Route path='/about-us' element={<h1>Work in progress</h1>}/>
          <Route path='/app' element={<h1>Work in progress</h1>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
      <SignUpModal show={showModal} onHide={handleCloseModal} />
    </>
  )
}

export default App
