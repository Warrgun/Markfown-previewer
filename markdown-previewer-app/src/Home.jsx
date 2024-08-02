import { Container, Button} from "react-bootstrap"
import img from './assets/main.jpg'
import pic1 from './assets/pic1.jpg'

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
                    <div className="d-flex w-100">
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
                </div>
            </Container>
        </>
        
    )
}

export default Home