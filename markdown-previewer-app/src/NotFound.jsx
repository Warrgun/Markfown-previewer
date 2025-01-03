import { Container, Row, Col } from "react-bootstrap"

const NotFound = () =>{
    return(
        <Container className="flex-grow-1 align-content-center">
            <Row>
                <Col xs={12} className=" text-center">
                    <h1>Not Found</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound