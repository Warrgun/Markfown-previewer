import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './aboutUs-custom.css'


const AboutUs = () =>{
    return(
        <>
            <Container fluid className="p-0 flex-grow-1 d-flex flex-column ">
                <div className="d-block w-100" style={{height:"73px"}}></div>
                <Container fluid className="flex-grow-1 w-100 ">
                    <Row className="py-sm-5 p-md-0">
                        <Col xs={0} md={3} xl={4} className="boy"/>
                        <Col xs={12} md={{span:6, offset:0}} xl={4}  className="mb-5 mt-4 px-0">  
                            <Card className="border-0">
                                <Card.Body className="p-0 about-container">
                                    <div className="w-100 d-flex flex-row p-2">
                                        <div className="ball rounded-circle"></div>
                                        <div className="ball rounded-circle ms-1"></div>
                                        <div className="ball rounded-circle ms-1"></div>
                                    </div>
                                    <div className="purple-container w-100 py-5 px-3 px-sm-5 px-md-0 text-center">
                                        <Row>
                                            <Col xs={12} md={{span:10, offset:1}}  xxl={{span:8, offset:2}}>
                                                <Card.Title className=" about-title mb-5" >ABOUT</Card.Title>
                                                <Card.Text className=" text-start text-md-center message">
                                                    At Markdown, we are passionate about building tools that empower creators, developers, and writers to bring their ideas to life.
                                                    Our company was founded on the belief that simplicity and efficiency should go hand-in-hand when it comes to digital tools.
                                                </Card.Text>
                                                <Card.Text className="text-start text-md-center message">
                                                    <span className=" fs-5 fw-bold">Who We Are</span><br/>
                                                    Founded by creators for creators, MarkdownWorks bridges the gap in Markdown tools.
                                                    With a passion for open-source technology and efficient workflows, we build tools that inspire productivity
                                                </Card.Text>
                                            </Col>
                                        </Row>  
                                    </div>
                                </Card.Body>
                            </Card>  
                        </Col>
                        <Col xs={0} md={3} xl={4} className="girl"/>
                    </Row>            
                </Container>
            </Container>
        </>
        
    );
}

export default AboutUs;