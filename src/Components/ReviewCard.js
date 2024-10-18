import React from 'react';
import { Card, Container, Image, Row, Col } from 'react-bootstrap';
import stars5logo from '../Assets/Images/5stars.png';
import stars4logo from '../Assets/Images/4stars.png';
import stars3logo from '../Assets/Images/3stars.png';

function ReviewCard(props) {
    let logo = '';
    if (props.review.stars === 5) {
        logo = stars5logo;
    } else if (props.review.stars === 4) {
        logo = stars4logo;
    } else if (props.review.stars === 3) {
        logo = stars3logo;
    }

    return (
        <Card style={{ width: '80%', margin: 'auto' }} className="text-center review-card">
            <Card.Body>
                <Container className="mx-auto mt-2">
                    <Row className="align-items-center">
                        {/* Image in one column */}
                        {/* <Col xs={3} md={2} className="text-start">
                            <Image 
                                src="https://via.placeholder.com/50" 
                                roundedCircle 
                                className="mb-3" 
                            />
                        </Col> */}
                        <Col className="">
                            <Card.Title>{props.review.name} {props.review.location && ( <em> - {props.review.location}</em>)}</Card.Title>
                            <img src={logo} width={80} className="pb-3" alt="Review Stars" />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Card.Text className="pb-3">
                        {props.review.text}
                    </Card.Text>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;
