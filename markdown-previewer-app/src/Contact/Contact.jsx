import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AlertComponent from "../Alert/AlertComponent";
import styles from './contact.module.css'

const Contact = () => {
    const [contactAlert, setContactAlert] = useState(false);
    const [validated, setValidated] = useState(false);
    const [content, setContent] = useState({
        name: '',
        email: '',
        title: '',
        emailContent: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setContent(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setContactAlert(false);
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            setValidated(false);
            setContactAlert(true);

            setTimeout(() => {
                setContactAlert(false);
            }, 2500);

            console.log('Name: ', content.name);
            console.log('E-mail: ', content.email);
            console.log('Title: ', content.title);
            console.log('Message: ', content.emailContent);


            setContent({
                name: '',
                email: '',
                title: '',
                emailContent: ''
            });
        }
    }

    return (
        <>
            <Container fluid className={`p-0 flex-grow-1 d-flex flex-column ${styles.background}`} data-bs-theme="dark">
                <div className="d-block w-100" style={{ height: "73px" }}></div>
                <Container fluid className={`flex-grow-1 d-flex d-sm-block align-content-center`}>
                    <Row className={`${styles.height}`}>
                        <Col xl={{ span: 4, offset: 4 }} lg={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }} className="h-100 text-bg-dark px-5 py-4 py-sm-5 my-sm-5 bg-opacity-75 align-content-center ">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <div className="header">
                                    <h4>Let Us Help You</h4>
                                    <p>If you have any questions, feel free to ask!</p>
                                </div>
                                <Form.Group className="mb-3" controlId="name-input">
                                    <Form.Control type="text" pattern='[A-Za-z]{1,}' name="name" placeholder="Name" className={`bg-transparent border-0 border-bottom rounded-0 border-light ${styles.input} ${styles.boxShadow}`} value={content.name} onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Provide a valid Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="email-input">
                                    <Form.Control type="email" pattern="[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="E-mail" className={` bg-transparent border-0 border-bottom rounded-0 border-light ${styles.input} ${styles.boxShadow}`} name="email" value={content.email} onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Provide a valid Email
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="title-input">
                                    <Form.Control type="text" placeholder="Title" className={` bg-transparent border-0 border-top rounded-0 border-light ${styles.input} ${styles.title}`} name='title' value={content.title} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="textarea-input">
                                    <Form.Control as="textarea" rows={3} name="emailContent" className={` bg-transparent border-0 border-bottom rounded-0 border-light ${styles.input} ${styles.boxShadow}`} placeholder="Message" value={content.emailContent} onChange={handleChange} required />
                                </Form.Group>
                                <Button type="submit" variant="secondary" className=""> Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <AlertComponent state={contactAlert} message={'The form has been sent successfully.'} />
        </>
    );
}

export default Contact;