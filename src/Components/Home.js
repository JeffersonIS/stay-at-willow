import React from 'react';
import hero_kitchen1 from '../Assets/Images/hero_kitchen1.png'
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <>
    <Container fluid className="hero-container p-0">
      <img src={hero_kitchen1} alt="Stay at Willow" className="hero-image" />
      <Row className="hero-overlay">
        <Col className="text-center hero-text-overlay">
          <h1>STAY AT WILLOW</h1>
          <div className='hero-subtext'>
            <a href="/booknow"><button className='hero-button'>Book Your Stay Now</button></a>
          </div>
        </Col>
      </Row>
    </Container>

    <div class="text-center container description pt-5">
    <hr className='text-center pt-2' style={{width:"30%", margin:"auto"}}></hr>

        <div className='text-left pt-5 pb-4'>
            <p className=''>Perched on a scenic hilltop overlooking the Tri-Cities in Eastern Washington, Willow offers breathtaking vistas and a peaceful escape. This newly renovated home is the perfect retreat, whether you're exploring local wineries or just relaxing.</p>
            <p className=''>Kitzke Cellars is right next door, and Goose Ridge is just a mile away, making it an ideal spot for wine enthusiasts. Conveniently located only 2 miles from shopping and groceries, and with quick freeway access, you'll be just 12 miles from the airport.</p>
            <p className=''>The fully equipped kitchen has everything you need to prepare meals, making your stay feel like home. Enjoy the ease of self check-in with a keypad, a two-night minimum stay, and no cleaning fee.</p>
        </div>
        <a href="/booknow"><button className='hero-button-dark mb-3'>Book Your Stay Now</button></a>

    </div>
    </>
  );
};

export default Home;