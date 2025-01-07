import React from 'react';
import { useState } from 'react';
import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';
import Markdown from './Markdown';
import './App.css'

function App() {
  const [editor, setEditor] = useState('# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n> quote\n\n    <div>some</div>\n\n#### Created by:\n[Jay Karlsven](https://jpkarlsven.com \"Jay Karlsven\'s Website\")');

  const handleChange = (e) => {
    setEditor(e.target.value);
  }

  return (
    <>
      <Container fluid className='w-100 vh-100 align-content-center bg-dark text-bg-light' >
        <Row className='md-lg-auto h-75 markdown-row'>
          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }} className=' bg-dark-subtle p-0 h-100 rounded-start-2'>
            <FormControl as='textarea' id='editor' value={editor} onChange={handleChange} className='h-100'/>
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
