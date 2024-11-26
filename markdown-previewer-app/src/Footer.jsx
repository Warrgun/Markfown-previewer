import { Button, Container, Form} from "react-bootstrap"

const Footer = () =>{
    return(
        <>
            <footer className=" text-light p-5" style={{backgroundColor:"var(--black)"}}>
                <Container fluid>
                    <Form.Group>
                        <div className="row justify-content-between">
                            <div className="col-2">
                                <h5></h5>
                                <p>Receive updates, news, and exclusive offers</p>
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder="E-mail" className=" form-control"/>
                            </div>
                        </div>
                    </Form.Group>
                </Container>
            </footer>
        </>
    )
}

export default Footer