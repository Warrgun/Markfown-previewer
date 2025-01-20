import React, { useState } from 'react';
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import Markdown from './Markdown';
import NavbarComponent from './NavbarComponent';
import './App.css'
import ExportButton from './ExportButton';

function App() {
  const [editor, setEditor] = useState(
    `# Markdown Previewer
## Make websites easier then ever!
Go back to the [Landing page](https://www.youtube.com)
###### Inline code:
\`console.log("Hello world")\`
###### Code block:
    customFunc(){
        return 0
    }\n###### Ordered list
1. **Apple**
2. Orange
3. Banana
###### Blockquote:
> One day or day one?

![stork](/assets/picture.png)`
  );

  const handleTabPress = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const currentPosition = e.target.selectionStart;
      const textBefore = editor.substring(0, currentPosition);
      const textAfter = editor.substring(currentPosition);

      setEditor(textBefore + '\t' + textAfter);

      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = currentPosition + 1;
      }, 0)
    }
  }

  const handleChange = (e) => {
    setEditor(e.target.value);
  }

  return (
    <>
      <Container fluid className='d-flex flex-column justify-content-lg-center w-100 h-100' >
        <NavbarComponent exportFile={editor} />
        <Row className=' markdown-row flex-grow-1 flex-lg-grow-0 mb-2 mx-2 mb-md-4 mx-lg-0 mb-lg-0'>
          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }} className='h-100 text-area pe-2 pe-lg-3 ps-0 '>
            <FormControl as='textarea' id='editor' value={editor} onChange={handleChange} onKeyDown={handleTabPress} className='h-100 scrollbar text-light fw-bold border-1 border-light' />
          </Col>
          <Col xs={12} md={6} lg={{ span: 5, offset: 0 }} xl={{ span: 4, offset: 0 }} className=' bg-light p-2 h-100 markdown-prev rounded'>
            <Markdown markdown={editor} />
          </Col>
          <Col lg={{ span: 5, offset: 6 }} xl={{ span: 4, offset: 6 }} className=' d-none d-lg-flex justify-content-end pt-2 px-0'>
            <ExportButton exportFile={editor} />
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default App
