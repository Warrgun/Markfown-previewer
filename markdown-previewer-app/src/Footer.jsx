import { Button, Container, Form, Col, Row} from "react-bootstrap"

const Footer = () =>{
    return(
        <>
            <footer className=" text-light p-5" style={{backgroundColor:"var(--black)"}}>
                <Container data-bs-theme="dark">
                    <Row className="justify-content-center">
                        <Col  lg={3} md={6} sm={12}>
                        <p className=" fw-light"><span className="fw-bold">Stay informed, subscribe</span><br/>Receive updates, news, and exclusive offers</p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Form className="d-flex flex-row justify-content-end">
                                <Form.Group controlId="formEmail">
                                    <Form.Label hidden>Email address</Form.Label>
                                    <Form.Control className="input-control rounded-0 bg-transparent" style={{border:"solid 2px var(--folly)"}} type="emial" name="email" placeholder="Enter email adress" required/>
                                    <Form.Control.Feedback type="invalid">
                                        Provide correct Email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="button" className="button-one bg-transparent rounded-0 fw-bold ms-3">
                                    Join
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className=" border-top">
                        <Col>
                            <p className=" text-body-secondary text-center mt-3 mb-0">© 2030 Markdown Previewer, Inc</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer