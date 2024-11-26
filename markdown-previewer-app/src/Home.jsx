import { Container, Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import img from './assets/main.jpg'
import pic1 from './assets/pic1.jpg'
import card1 from './assets/card1.jpg'
import card2 from './assets/card2.jpg'
import card3 from './assets/card3.jpg'
import avatar from './assets/avatar.jpg'

const Home = () =>{
    return(
        <>
            <div className="background-img mb-5" style={{backgroundImage:`url(${img})`, height:'50vh'}}></div>
            <Container>
                <div className="d-flex w-100 flex-column">
                    <div className="d-flex w-100">
                        <div className="p-2 w-100 my-5">
                            <h1>Expirience the Power</h1>
                            <h1>of Markdown</h1>
                            <h1>Previewer</h1>
                        </div>
                        <div className="p-2 w-100 my-5">
                            <p className=" fs-5">Effortlessly convert your markdown into beautiful HTML with our user-friendly previewer.</p>
                            <div className="d-flex my-5">
                                <Button type="button" className="button-two rounded-0 fw-bold">Get Started</Button>
                                <Button type="button" className="button-one rounded-0 ms-4 fw-bold">Learn More</Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex w-100 mb-5">
                        <div className="background-img me-5" style={{backgroundImage:`url(${pic1})`}}></div>
                        <div className="p-2 w-100">
                            <p>Simplistic</p>
                            <h2>Discover the Power of</h2>
                            <h2>Markdown Previewer</h2>
                            <p className="fs-5 my-5">Join thousands of users who have experienced the convenience and
                            efficiency of our markdown previewer. Preview your documents with ease
                            and enjoy the support for various markdown elements.</p>
                            <div className="d-flex">
                                <div className=" pe-2">
                                    <h3 className="fw-bold">50%</h3>
                                    <p>Increase in User Satisfaction with
                                    Markdown Previewer</p>
                                </div>
                                <div className="pe-2">
                                    <h3 className="fw-bold">50%</h3>
                                    <p>Reduction in Document Errors with
                                    Markdown Previewer</p>
                                </div>
                            </div>
                            <div className="my-5">
                            <Button type="button" className="button-one rounded-0 fw-bold">Learn More</Button>
                            <Button type="button" className="button-three bg-transparent border-0 rounded-0 fw-bold ms-4">Sign Up<i className="arrow ms-2"></i></Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <div className="p-2 w-100 my-5">
                            <p>Simplified</p>
                            <h2>Expirience the Power of</h2>
                            <h2>Mardown Previewer</h2>
                        </div>
                        <div className="p-2 w-100 my-5">
                            <p className="fs-5 p-0">Our markdown previewer offers a range of key features to enhance your
writing experience. With live preview, syntax highlighting, and export
options, you can create beautiful and professional-looking documents
effortlessly.</p>
                        </div>  
                    </div>
                </div>
            </Container>
            <Container fluid className="d-flex flex-column w-100 mb-5">
                <div className="row text-center my-3 justify-content-center" data-bs-theme="dark">
                    <div className="col-3">
                        <div className="card h-100">
                        <img src={card1} className="card-img-top" alt="card1"/>
                            <div className="card-body">
                                <h3 className="card-title">Live Preview</h3>
                                <p className="card-text">See your changes in real-time as you type.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card h-100">
                        <img src={card2} className="card-img-top" alt="card2"/>
                            <div className="card-body">
                                <h3 className="card-title">Syntax Highlighting</h3>
                                <p className="card-text">Highlight and differentiate your code for 
                                better readability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card h-100">
                        <img src={card3} className="card-img-top" alt="card3"/>
                            <div className="card-body">
                                <h3 className="card-title">Export Options</h3>
                                <p className="card-text">Save or share your documents in various formats.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="my-5">
                    <Button type="button" className="button-one rounded-0 fw-bold">Learn More</Button>
                    <Button type="button" className="button-three bg-transparent rounded-0 fw-bold ms-4 border-0">Sign Up<i className="arrow ms-2"></i></Button>
                </Container>
            </Container>
            <div className="d-flex w-100 pb-5">
                <hr className="w-100 mx-0 hr"/>
            </div>
            <Container>    
                <div className="d-flex w-100 my-5 flex-column">
                    <div className="w-100 text-center">
                        <div className="w-100 mb-3 fs-5">
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}} />
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"var(--folly)"}}/>
                        </div>
                        <h3>The markdown previewer has been a game-changer for my writing</h3>
                        <h3>process. It allows me to easily format and preview my markdown</h3>
                        <h3>documents, saving me time and effort.</h3>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center my-5">
                        <div className="card border-0 d-flex flex-row align-items-center">
                            <img src={avatar} alt="avatar" />
                            <div className="card-body" style={{borderRight:"2px solid var(--folly)"}}>
                                <h6 className="card-title"> John Doe</h6>
                                <p className="card-text">content Writer, ABC Company</p>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="card-title fw-bold"> LOGO</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
        
    )
}

export default Home