import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './aboutUs-custom.css'


const AboutUs = () =>{
    return(
        <Container fluid className="flex-grow-1 w-100 pt-5 about-container">
            <div className="w-100 h-100 position-relative about-flex">
                <div className="about-decorations circle position-absolute"></div>
                <div className="about-decorations striped-circle  position-absolute"></div>
                <div className="about-decorations profile-circle  position-absolute">
                    <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="profile-image"
                    />
                </div>
                <div className="about-rect position-absolute"></div>
                <div className="about-rect about-rect-shadow position-absolute"></div>
                <div className="about-rect-striped position-absolute"></div>
                <Card className="about-card mx-auto border-0 p-2 p-sm-5 my-5 my-sm-0">
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
                                    <h5 className=" fw-bold">Our Mission</h5>
                                    We create user-friendly and innovative tools that simplify complex tasks and empower individuals to express themselves with ease.
                                    <br/><br/><h5 className=" fw-bold">Who We Are</h5>
                                    Founded by creators for creators, MarkdownWorks bridges the gap in Markdown tools.
                                    With a passion for open-source technology and efficient workflows, we build tools that inspire productivity
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            
        </Container>
    );
}

export default AboutUs;