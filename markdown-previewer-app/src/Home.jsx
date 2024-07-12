import { Container, Button} from "react-bootstrap"
import img from './assets/main.jpg'

const Home = () =>{
    return(
        <>
            <div className="background-img mb-5"></div>
            <Container>
                <div className="d-flex w-100">
                    <div className="d-flex w-100 flex-column justify-content-center my-5">
                        <h1>Expirience the Power</h1>
                        <h1>of Markdown</h1>
                        <h1>Previewer</h1>
                    </div>
                    <div className="d-flex w-100 flex-column my-5">
                        <p className=" fs-5">Effortlessly convert your markdown into beautiful HTML with our user-friendly previewer.</p>
                        <div className="d-flex my-3">
                            <Button type="button" className="button-two rounded-0 fw-bold">Get Started</Button>
                            <Button type="button" className="button-one rounded-0 ms-4 fw-bold">Get Started</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
        
    )
}

export default Home