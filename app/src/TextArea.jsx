import React from "react";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

const TextArea= () => {
    const [text, setText]= useState(`# Markdown Previewer
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

![stork](./src/assets/picture.png)`);

    const handleChange = e =>{
        setText(e.target.value);
    }
    const handleTabPress = e =>{
        if(e.key = 'Tab'){
            e.preventdefault();
            setText('\t');
        }
    }

    return(
        <FormControl as='textarea' id='editor' value={text} onChange={handleChange} onKeyDown={handleTabPress} className='h-100'/>
    );
}

export default TextArea;