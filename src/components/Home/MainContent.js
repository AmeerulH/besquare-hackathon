import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MainContent.css";

const MainContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="maincontent">
      <div data-aos="zoom-in">
        <Container fluid>
          <Row>
            <Col className="text"> WHO IS THE BEST?</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainContent;
