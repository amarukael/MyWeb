import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Home.css";

function Home() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <div className="ak-hallo">
            <span>Hello I'm</span>
          </div>
          <div className="mt-2">
            <span>Akash</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
