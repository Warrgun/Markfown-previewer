import React from 'react';
import { useState } from 'react';
import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';
import Markdown from './Markdown';
import './App.css'

function App() {
  const [editor, setEditor] = useState('# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[Jay Karlsven](https://jpkarlsven.com \"Jay Karlsven\'s Website\")');

  const handleChange = (e) => {
    setEditor(e.target.value);
  }

  return (
    <>
      <Container fluid className='w-100 vh-100 align-content-center bg-dark text-bg-dark' >
        <Row className='md-lg-auto'>
          <Col xs={12} md={6} lg={{ span: 4, offset: 2 }}>
            <FormControl as='textarea' id='editor' value={editor} onChange={handleChange} rows={21}/>
          </Col>
          <Col xs={12} md={6} lg={{ span: 4, offset: 0 }}>
            <Markdown markdown={editor}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
