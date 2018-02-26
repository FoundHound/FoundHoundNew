import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="assets/images/retriever_blue_background300x400.jpg">
      <h2>
        ALL DOGS<br />HAVE A<br />HOME</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 class="text-center">Search For A Friend</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h1 class="text-center">Mission</h1>
          <p>
            Based on research from the American Association for the Prevention of Animal Cruelty, there were an estimated 6.5 million animals that entered an animal shelter in 2016. Out of those 6.5 million, an estimated 1.5 million animals were euthanized.
          </p>
          <p>
            We want to reduce this number by matching people to their pets based on characteristics of the person and characteristics of the breed/animal. Making a perfect match will prevent the pets from being returned to the shelters.
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
