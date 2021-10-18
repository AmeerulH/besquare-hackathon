import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const CharactersPower = () => {
  return (
    <div className="charactersPower">
      <div className="charactersPowerInfo">
        <Container className="powerInfo">
          <Row className="powerName" id="powerName">
            <Col>
              <b>Powers:</b> Armored Suits
            </Col>
          </Row>
          <Row className="powerDescription" id="powerDescription">
            <Col>
              <b>Descriptions:</b> Tony Stark did not possess any innate powers;
              instead, he used a miniature version of the Arc Reactor to charge
              the various suits that provided him with superhuman strength,
              endurance, durability, and a variety of weapons. His original
              advanced technology combined with his extraordinary intelligence
              and adaptive combat skills made Tony Stark one of the most
              formidable superheroes in the world. Aside from Thor and Doctor
              Strange, Tony Stark was the third person to stand his ground and
              fought the Infinity Gauntlet empowered Thanos the longest, even
              managing to give him a cut on his cheek and earn the respect and
              admiration of Thanos himself.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CharactersPower;
