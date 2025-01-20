import React, { useEffect, useState } from "react"
import { Button, Container, Form, Col, Row } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const Footer = ({ credits }) => {
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);
    const location = useLocation()

    const handleButtonClick = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            console.log(`Footer E-mail: ${email}`);
            setEmail('');
        }
    }

    useEffect(() => setValidated(false), [location])

    return (
        <>
            <footer className=" text-light mt-auto p-5 vw-100" style={{ backgroundColor: "var(--black)" }}>
                <div className="me-3">
                    <Container data-bs-theme="dark">
                        <Row className="justify-content-center">
                            <Col xs={6} className=" w-auto">
                                <p className=" fw-light mb-0 text-center text-md-start"><span className="fw-bold">Stay informed, subscribe</span></p>
                                <p className="fw-light text-center text-md-start">Receive updates, news, and exclusive offers</p>
                            </Col>
                            <Col xs={6} className=" w-auto mb-md-0 mb-5">
                                <Form onSubmit={handleButtonClick} noValidate validated={validated} className="d-flex flex-column flex-sm-row justify-content-end">
                                    <Form.Group controlId="formEmail">
                                        <Form.Label hidden>Email address</Form.Label>
                                        <Form.Control className="input-control rounded-0 bg-transparent" pattern="[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" value={email} onChange={e => setEmail(e.target.value)} style={{ border: "solid 2px var(--folly)" }} type="emial" name="email" placeholder="Enter email adress" required />
                                        <Form.Control.Feedback type="invalid">
                                            Provide a valid Email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button type="submit" className="button-one rounded-0 fw-bold ms-sm-3 input-focus mt-3 mt-sm-0" style={{ height: '40px' }}>
                                        Join
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row className=" border-top">
                            <Col className="text-center pt-3">
                                {credits.link && credits.company ? (
                                    <Link to={credits.link} target="_blank" rel="noopener noreferrer" className="link-underline-opacity-0 link-light link-opacity-50">{credits.company}</Link>
                                ) : (
                                    <p className=" opacity-50 mb-0">® Company, Markdown Previewer 2030.</p>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer