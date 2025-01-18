import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './aboutUs-custom.css';

const AboutUs = () => {
    return (
        <Container fluid className="p-0 flex-grow-1 d-flex flex-column">
            {/* Spacer for top margin */}
            <div style={{ height: "73px" }}></div>

            {/* Main Content */}
            <Container fluid className="flex-grow-1 w-100 position-relative align-content-center sky-container">
                {/* Background Layers */}
                <div className="container-background position-absolute h-100 w-100"></div>
                <div className="wave w-100 h-100 position-absolute"></div>

                <Row className="py-sm-5 p-md-0">
                    <Col 
                        xs={12} 
                        md={{ span: 6, offset: 3 }} 
                        xl={{ span: 4, offset: 4 }} 
                        className="align-self-center px-3 px-md-0 my-4 my-md-5"
                    >
                        <Card className="border-0 bg-transparent">
                            <Card.Body className="p-0 about-container">
                                {/* Decorative Balls */}
                                <div className="w-100 d-flex flex-row p-2">
                                    <div className="ball rounded-circle"></div>
                                    <div className="ball rounded-circle ms-1"></div>
                                    <div className="ball rounded-circle ms-1"></div>
                                </div>

                                {/* Content Container */}
                                <div className="purple-container w-100 py-5 px-5 px-md-0 text-center">
                                    <Row>
                                        <Col 
                                            xs={12} 
                                            md={{ span: 10, offset: 1 }} 
                                            xxl={{ span: 8, offset: 2 }}
                                        >
                                            <Card.Title className="about-title mb-5">
                                                ABOUT
                                            </Card.Title>
                                            <Card.Text className="text-start text-md-center message">
                                                At Markdown, we are passionate about building tools that empower creators, developers, and writers to bring their ideas to life.
                                                Our company was founded on the belief that simplicity and efficiency should go hand-in-hand when it comes to digital tools.
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default AboutUs;
