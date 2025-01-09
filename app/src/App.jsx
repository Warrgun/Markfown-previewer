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
    if(e.key === 'Tab'){
      e.preventDefault();

      const currentPosition= e.target.selectionStart;
      const textBefore  = editor.substring(0,currentPosition);
      const textAfter = editor.substring(currentPosition);

      setEditor(textBefore+'\t'+textAfter);

      setTimeout(()=>{
        e.target.selectionStart = e.target.selectionEnd = currentPosition+1;
      },0)
    }
  }

  const handleChange = (e) => {
    setEditor(e.target.value);
  }

  return (
    <>
      <Container fluid className='w-100 vh-100 align-content-center bg-dark text-bg-light' >
        <Row className=' markdown-row'>
          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }} className=' bg-dark-subtle p-0 h-100 text-area'>
            <FormControl as='textarea' id='editor' value={editor} onChange={handleChange} onKeyDown={handleTabPress} className='h-100'/>
          </Col>
          <Col xs={12} md={6} lg={{ span: 5, offset: 0 }} xl={{ span: 4, offset: 0 }} className='bg-dark-subtle overflow-auto h-100 markdown-prev'>
            <Markdown markdown={editor}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
