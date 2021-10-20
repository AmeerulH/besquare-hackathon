import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const CharactersMainInfo = () => {
  return (
    <div className="charactersMainInfo">
      <div className="charactersInfo">
        <Container className="heroInfo">
          <Row>
            <Col>
              <Row className="heroName">Iron Man</Row>
              <Row className="heroDescription">
                <Row>ID: 70</Row>
                <Row>Full Name: Tony Stark</Row>
                <Row>Alignment: Good</Row>
              </Row>
            </Col>
            <Col>
              <Image
                classname="heroImage"
                src="./ironman.png"
                width="auto "
                height="500px"
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CharactersMainInfo;
