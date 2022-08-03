import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Home.css";

function Home() {
  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col>
          <div className="ak-hallo">
            <span>Hello I'm</span>
          </div>
          <div className="mt-3 ak-name">
            <span>M. Fahmi Amaruddin</span>
          </div>
          <div className="mt-n1 ak-profession">
            <span>Web and Android Developer</span>
          </div>
          <Container className="mt-4" >
          <Row>
            <Col><FontAwesomeIcon icon={faEnvelope} inverse/></Col>
            <Col className="ak-text">amarudin.ad@gmail.com</Col>
          </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
