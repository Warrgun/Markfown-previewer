import { Button, Container, Form, Col, Row} from "react-bootstrap"

const Footer = () =>{
    return(
        <>
            <footer className=" text-light mt-auto p-5 vw-100" style={{backgroundColor:"var(--black)"}}>
                <div className="me-3">
                    <Container data-bs-theme="dark">
                        <Row className="justify-content-center">
                            <Col xs={6} className=" w-auto">
                            <p className=" fw-light"><span className="fw-bold">Stay informed, subscribe</span><br/>Receive updates, news, and exclusive offers</p>
                            </Col>
                            <Col xs={6} className=" w-auto mb-md-0 mb-5">
                                <Form className="d-flex flex-row justify-content-end">
                                    <Form.Group controlId="formEmail">
                                        <Form.Label hidden>Email address</Form.Label>
                                        <Form.Control className="input-control rounded-0 bg-transparent" style={{border:"solid 2px var(--folly)"}} type="emial" name="email" placeholder="Enter email adress" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Provide correct Email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button type="button" className="button-one rounded-0 fw-bold ms-3 input-focus">
                                        Join
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row className=" border-top">
                            <Col>
                                <p className=" text-body-secondary text-center mt-3 mb-0">© 2030 Markdown Previewer, Inc.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </footer>
        </>
    )
}

export default Footer