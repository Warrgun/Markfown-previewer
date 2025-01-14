import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () =>{
    const [content, setContent] = useState({
        name:'',
        email:'',
        title:'',
        emailContent:''
    });

    const handleChange = e =>{
        const {name, value} = e.target;

        setContent(prev =>({...prev,[name]:value}))
    }

    const handleSubmit = e =>{
        e.preventDefault();

        console.log('Name: ',content.name);
        console.log('E-mail: ',content.email);
        console.log('Title: ',content.title);
        console.log('Message: ',content.emailContent);

        
        setContent({
            name:'',
            email:'',
            title:'',
            emailContent:''
        });
    }

    return(
        <>
            <Container className="flex-grow-1 align-content-center mb-4">
                <Row className=" mt-5">
                    <Col lg={{span:6, offset:3}} className="mt-5 text-bg-dark p-5">
                        <Form onSubmit={handleSubmit}>
                            <div className="header">

                            </div>
                            <Form.Group className="mb-3" controlId="name-input">
                                <Form.Control type="text" name="name" placeholder="Name" className=" bg-transparent border-0 border-bottom rounded-0" value={content.name} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email-input">
                                <Form.Control type="email" placeholder="E-mail" className=" bg-transparent border-0 border-bottom rounded-0" name="email" value={content.email} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="title-input">
                                <Form.Control type="text" placeholder="Title" className=" bg-transparent border-0 border-bottom rounded-0" name='title' value={content.title} onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="textarea-input">
                                <Form.Control as="textarea" rows={3} name="emailContent" className=" bg-transparent border-0 border-bottom rounded-0" placeholder="Message" value={content.emailContent} onChange={handleChange} />
                            </Form.Group>
                            <Button type="submit" variant="secondary" className=""> Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;