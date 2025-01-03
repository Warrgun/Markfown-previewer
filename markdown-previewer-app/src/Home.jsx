import { Container, Button, Image, Row, Col, Card, CardGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import LearnMoreModal from "./LearnMoreModal";
import img from './assets/main.jpg';
import pic1 from './assets/pic1.jpg';
import card1 from './assets/card1.jpg';
import card2 from './assets/card2.jpg';
import card3 from './assets/card3.jpg';
import avatar from './assets/avatar.jpg';
import logo from './assets/logo.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import { useState } from "react";

const Home = ({handleShowModal}) =>{
    const [showModal, setShowModal] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleModalHide = () => setShowModal(false);
    const handleModalShow = () =>{
        setFullscreen('md-down');
        setShowModal(true);  
    };

    return(
        <>
            <div className="background-img mb-5 vw-100" style={{backgroundImage:`url(${img})`}}></div>
            <Container className="flex-grow-1">
                <Row>
                    <Col md={6}>
                        <div className="p-2 w-100 my-md-5">
                            <h1>Expirience the Power</h1>
                            <h1>of Markdown</h1>
                            <h1>Previewer</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-2 w-100 my-md-5">
                            <p className=" fs-5">Effortlessly convert your markdown into beautiful HTML with our user-friendly previewer.</p>
                            <div className="d-flex my-5">
                                <Button type="button" as={Link} to="/app" className="button-two rounded-0 fw-bold  input-focus">Get Started</Button>
                                <Button type="button" className="button-one rounded-0 ms-4 fw-bold  input-focus" onClick={handleModalShow}>Learn More</Button>
                            </div>
                        </div>
                    </Col>
                </Row> 
                <Row className=" my-2 my-md-5 pb-md-5">
                    <Col md={6}> 
                        <Image src={pic1} loading="lazy" fluid/>
                    </Col>
                    <Col md={6} className="mt-5 mt-md-0">
                        <p className=" d-block d-none d-lg-block">Simplistic</p>
                        <h2 className=" text-lg-start">Discover the Power of</h2>
                        <h2 className=" text-lg-start">Markdown Previewer</h2>
                        <p className="fs-5 my-md-5 my-4 text-lg-start">Join thousands of users who have experienced the convenience and
                        efficiency of our markdown previewer. Preview your documents with ease
                        and enjoy the support for various markdown elements.</p>
                        <div className="d-flex w-100 gap-2 gap-md-0 justify-content-between">
                            <div className="pe-1 pe-md-2 rounded-2 bg-cards text-lg-start text-center">
                                <h3 className="fw-bold">50%</h3>
                                <p>Increase in User Satisfaction with
                                Markdown Previewer</p>
                            </div>
                            <div className="ps-1 text-center text-lg-start ps-sm-0 pe-md-2 bg-cards rounded-2">
                                <h3 className="fw-bold">50%</h3>
                                <p>Reduction in Document Errors with
                                Markdown Previewer</p>
                            </div>
                        </div>
                        <div className=" my-5 text-lg-start">
                            <Button type="button" className="button-one rounded-0 fw-bold  input-focus" onClick={handleModalShow}>Learn More</Button>
                            <Button onClick={handleShowModal} type="button" className="button-three bg-transparent border-0 rounded-0 fw-bold ms-4  input-focus">
                                Sign Up<i className="arrow ms-2"></i>
                            </Button>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            <Container fluid className="d-flex flex-column w-100 pb-5 mb-5 bg-dark-subtle hr" >
                <Container>
                    <Row className=" pt-5">
                        <Col md={6}>
                            <p className=" d-block d-none d-lg-block">Simplified</p>
                            <h2>Expirience the Power of</h2>
                            <h2 className=" mb-4 mb-md-0">Mardown Previewer</h2>
                        </Col>
                        <Col md={6}>
                            <p className="fs-5 p-0">Our markdown previewer offers a range of key features to enhance your
                            writing experience. With live preview, syntax highlighting, and export
                            options, you can create beautiful and professional-looking documents
                            effortlessly.</p>
                        </Col>  
                    </Row>
                </Container>
                <Swiper
                    effect={'coverflow'} 
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    initialSlide={1}
                    loop={false}
                    coverflowEffect={{
                        rotate:50,
                        stretch:0,
                        depth: 100,
                        modifier:1,
                        slideShadows:true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper text-center my-3 p-5"
                    data-bs-theme="dark"
                >
                    <SwiperSlide>
                            <div className="card">
                            <img src={card1} className="card-img-top" alt="card1"/>
                                <div className="card-body">
                                    <h3 className="card-title">Live Preview</h3>
                                    <p className="card-text">See your changes in real-time as you type.</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="card">
                            <img src={card2} className="card-img-top" alt="card2"/>
                                <div className="card-body">
                                    <h3 className="card-title">Syntax Highlighting</h3>
                                    <p className="card-text">Highlight and differentiate your code for 
                                    better readability.</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                        <img src={card3} className="card-img-top" alt="card3"/>
                            <div className="card-body">
                                <h3 className="card-title">Export Options</h3>
                                <p className="card-text">Save or share your documents in various formats.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Container className="mt-5">
                    <Button type="button" className="button-two rounded-0 fw-bold input-focus" onClick={handleModalShow}>
                        Learn More
                    </Button>
                    <Button onClick={handleShowModal} type="button" className="button-three bg-transparent rounded-0 fw-bold ms-4 border-0 input-focus">
                        Sign Up<i className="arrow ms-2"></i>
                    </Button>             
                </Container>
            </Container>
            <Container className="mt-3 mb-5 pt-sm-5 pb-sm-5">
                <Row>
                    <Col xs={12} className=" text-center">
                        <div className="w-100 mb-3 fs-5">
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}} />
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                        </div>
                        <div className="d-flex mx-auto text-wrap-flex" >
                            <h3>
                                The markdown previewer has been a game-changer for my writing
                                process. It allows me to easily format and preview my markdown
                                documents, saving me time and effort.
                            </h3>
                        </div>
                    </Col>
                    <Col xs='auto' className="mx-auto">
                        <Card className="border-0 d-flex flex-row align-items-center my-4 ">
                            <Image src={avatar} alt="avatar" roundedCircle fluid loading="lazy"/>
                            <Card.Body style={{borderRight:"2px solid var(--folly)"}}>
                                <Card.Title> John Doe </Card.Title>
                                <Card.Text>Content Writer, ABC Company</Card.Text>
                            </Card.Body>
                            <Card.Footer className=" fw-bold fs-3 border-0 bg-transparent ms-2">
                                <Image src={logo} width={100} alt="logo"/>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <LearnMoreModal show={showModal} onHide={handleModalHide} fullscreen={fullscreen}/>
        </>
        
    )
}

export default Home;