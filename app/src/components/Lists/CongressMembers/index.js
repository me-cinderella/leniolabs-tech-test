import React from 'react';
import { Card, ListGroup, Row} from 'react-bootstrap';

function MemberCard(props) {

  return (
    <Card className="col-3 m-5 text-dark">
        <Card.Body>
            <Card.Title>{`${props.member.first_name} ${props.member.last_name}`}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.member.title}</ListGroup.Item>
            <ListGroup.Item>{props.member.party}</ListGroup.Item>
            <ListGroup.Item>{props.member.total_votes}</ListGroup.Item>
        </ListGroup>
    </Card>
  )
}

const members = [{
    id:1234,
    first_name:"test",
    last_name:"test",
    title:"senador",
    party:"rn",
    total_votes:245
},
{
    id:1235,
    first_name:"test",
    last_name:"test",
    title:"senador",
    party:"rn",
    total_votes:245
},
{
    id:1236,
    first_name:"test",
    last_name:"test",
    title:"senador",
    party:"rn",
    total_votes:245
}];

function CongressMembersList () {
    return (
        <Row className="members-list">
            {members.map(member => <MemberCard key={member.id} member={member} /> )}
        </Row>
    )
}

export default CongressMembersList;