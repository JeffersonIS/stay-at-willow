import React from 'react';
import reviewData from '../Assets/reviewData';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from './PageHeader';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <>
      <PageHeader title="Reviews" />
      <div class="container text-center pt-3 pb-1">
            <div class="row">
                <div class="col-sm"><em>Cleanliness: {reviewData.cleanliness} &nbsp; | &nbsp; Check-in: {reviewData.cleanliness}  &nbsp; | &nbsp; Communication: {reviewData.communication} &nbsp; | &nbsp; Location: {reviewData.location}</em></div>
            </div>
        </div>
      <Container className='text-center mt-4 p-3'>
        <Row>
          {reviewData.reviews.map((value, key) => (
            <Col xs={12} md={6} className='mb-3' key={key}> {/* 12 columns on small screens, 6 on medium and up */}
              <ReviewCard review={value} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Reviews;
