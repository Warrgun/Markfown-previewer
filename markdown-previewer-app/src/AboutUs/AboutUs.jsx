import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './aboutUs-custom.css'


const AboutUs = () =>{
    return(
        <>
            <Container fluid className="p-0 flex-grow-1 d-flex flex-column ">
                <div className="d-block w-100" style={{height:"73px"}}></div>
                <Container fluid className="flex-grow-1 w-100 align-content-center about-container">
                    <Row className="py-sm-5 p-md-0 custom-background">
                        <Col xl={{span:6, offset:3}} lg={{span:8, offset:2}} sm={{span:10, offset:1}}>
                        
                            <Card className="about-card border-0 p-2 p-sm-5 my-5 my-sm-0">
                                <Card.Body>
                                    <Card.Title className="pt-md-2 about-title" >ABOUT</Card.Title>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Card.Text>
                                                At MarkdownWorks, we are passionate about building tools that empower creators, developers, and writers to bring their ideas to life.
                                                Our company was founded on the belief that simplicity and efficiency should go hand-in-hand when it comes to digital tools.
                                            </Card.Text>
                                        </Col>
                                        <Col xs={12} md={6} className="card-divider mt-3 mt-md-0">
                                            <Card.Text>
                                                <span className=" fs-5 fw-bold">Our Mission</span><br/>
                                                We create user-friendly and innovative tools that simplify complex tasks and empower individuals to express themselves with ease.
                                                <br/><br/><span className=" fs-5 fw-bold">Who We Are</span><br/>
                                                Founded by creators for creators, MarkdownWorks bridges the gap in Markdown tools.
                                                With a passion for open-source technology and efficient workflows, we build tools that inspire productivity
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>  
                        </Col>
                    </Row>            
                </Container>
            </Container>
        </>
        
    );
}

export default AboutUs;