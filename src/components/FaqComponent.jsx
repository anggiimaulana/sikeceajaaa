import {Container, Row, Col, Accordion} from "react-bootstrap"
import {faq} from "../data/index"

const FaqComponent = () => {
  return (
    <div className="faq">
        <Container>
            <Row>
                <Col>
                <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Pertanyaan yang sering ditanyakan</h1>
                </Col>
            </Row>
            <Row className="row-cols-lg-2 row-cols-1 g-lg-4 g-2 pt-5">
                {faq.map((data) => {
                    return (
                        <Col key={data.id}>
                            <Accordion className="shadow-sm">
                                <Accordion.Item eventKey={data.eventKey}>
                                    <Accordion.Header>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {data.desc}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>
  )
}

export default FaqComponent