import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Card, ListGroup} from 'react-bootstrap';
import { detail } from '../../redux/actions/fetchActions';

function Member(props) {

    useEffect(() => {
      const memberId = props.match.params.id;
      props.detail(memberId);
  
    }, []);

    const renderMemberData = () => { 
        const data = props.detailMember;

        delete data.roles;

        return Object.keys(data).map(key => {
          return (
            <ListGroup className="list-group-flush">
              {`${key}: ${data[key]}`}
            </ListGroup>
            )
        }
    )}

          
    return (
        <Card className="col-10 m-5 text-dark">
            <Card.Body>
                <Card.Title>Detalle del miembro</Card.Title>
            </Card.Body>
            {renderMemberData()}
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        detailMember: state.detail.detailMember
    };
}

function mapDispatchToProps(dispatch) {
    return {
        detail: (memberId) => dispatch(detail(memberId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Member);

