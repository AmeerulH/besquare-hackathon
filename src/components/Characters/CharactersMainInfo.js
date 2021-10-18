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
                Anthony Edward "Tony" Stark was a billionaire industrialist, a
                founding member of the Avengers, and the former CEO of Stark
                Industries. A brash but brilliant inventor, Stark was
                self-described as a genius, billionaire, playboy, and
                philanthropist. With his great wealth and exceptional technical
                knowledge, Stark was one of the world's most powerful men
                following the deaths of his parents and enjoyed the playboy
                lifestyle for many years until he was kidnapped by the Ten Rings
                in Afghanistan, while demonstrating a fleet of Jericho missiles.
                With his life on the line, Stark created an armored suit which
                he used to escape his captors. Upon returning home, he utilized
                several more armors to use against terrorists, as well as
                Obadiah Stane who turned against Stark. Stark enjoyed the fame
                that came with his new secret identity and decided to share it
                with the world, publicly revealing himself as Iron Man.
              </Row>
            </Col>
            <Col>
              <Image
                classname="heroImage"
                src="./ironman.png"
                weight="300px"
                height="auto"
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CharactersMainInfo;
