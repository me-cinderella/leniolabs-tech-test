import React from 'react';
import { connect } from 'react-redux'
import { Card, ListGroup, Row} from 'react-bootstrap';

function MemberCard(props) {

  return (
    <Card className="col-3 m-5 text-dark">
        <Card.Body>
            <Card.Title>{`${props.member.first_name} ${props.member.last_name}`}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>titulo: {props.member.title}</ListGroup.Item>
            <ListGroup.Item>partido politico: {props.member.party}</ListGroup.Item>
            <ListGroup.Item>proximas elecciones: {props.member.next_election}</ListGroup.Item>
            <ListGroup.Item>
                <a href={`/${props.member.id}`}>
                    ver en detalle
                </a>
            </ListGroup.Item>
        </ListGroup>
    </Card>
  )
}

function CongressMembersList (props) {
    return (
        <>
            <h1 className="p-2">Lista senadores del congreso</h1>
            <Row className="members-list">
                {props.congressMembers.map(member => <MemberCard key={member.id} member={member} /> )}
            </Row>
        </>
    )
}

function mapStateToProps(state) {

    return {
        congressMembers: state.search.searchResults.length > 0? state.search.searchResults : state.fetch.congressMembers
    };
}

export default connect(mapStateToProps, null)(CongressMembersList);

