import React from 'react';
import { useState } from 'react';
import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';
import Markdown from './Markdown';
import './App.css'

function App() {
  const [editor, setEditor] = useState(
`# Markdown Previewer
## Make websites easier then ever!
Go back to [Landing page](https://www.youtube.com)
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

![stork](./src/assets/picture.png)`
    );

  const handleTabPress = (e) =>{
    if(e.key = 'Tab'){
      e.preventdefault();
      setEditor('\t');
    }
  }

  const handleChange = (e) => {
    setEditor(e.target.value);
  }

  return (
    <>
      <Container fluid className='w-100 vh-100 align-content-center bg-dark text-bg-light' >
        <Row className='md-lg-auto h-75 markdown-row'>
          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }} className=' bg-dark-subtle p-0 h-100 rounded-start-2'>
            <FormControl as='textarea' id='editor' value={editor} onChange={handleChange} onKeyDown={handleTabPress} className='h-100'/>
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
