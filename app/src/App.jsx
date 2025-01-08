import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Markdown from './Markdown';
import TextArea from './TextArea';
import './App.css'

function App() {
  return (
    <>
      <Container fluid className='w-100 vh-100 align-content-center bg-dark text-bg-light' >
        <Row className='md-lg-auto h-75 markdown-row'>
          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }} className=' bg-dark-subtle p-0 h-100 rounded-start-2'>
            <TextArea/>
          </Col>
          <Col xs={12} md={6} lg={{ span: 5, offset: 0 }} xl={{ span: 4, offset: 0 }} className='bg-dark-subtle h-100 overflow-auto rounded-end-2'>
            <Markdown markdown={editor}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
