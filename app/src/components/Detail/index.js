import React from 'react';
import { Card, Container, Row} from 'react-bootstrap';

function Member () {
    return (
    <Card className="col-3 m-5 text-dark">
        <Card.Body>
            <Card.Title>Detalle del miembro</Card.Title>
        </Card.Body>
    </Card>
    )
}
function DetailView() {

  return (
      <Container>
          <Row>
            <Member />
          </Row>
      </Container>

  )
}

export default DetailView;

