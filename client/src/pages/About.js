import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="http://www.queenmarycruises.net/wp-content/uploads/2014/02/RMS-Queen-Mary-2-AU.jpg">
      <h1>Transatlantic Cruisr</h1>
      <h2>Find Transatlantic Cruises</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Cruisr!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            
          </p>
          <p>
            
          </p>
          <p>
            
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
