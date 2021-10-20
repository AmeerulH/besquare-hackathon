import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

//Import react-circular-progressionbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CharactersPower = () => {
  const percentage = 66;
  const powerstats = {
    intelligence: "81",
    strength: "40",
    speed: "29",
    durability: "55",
    power: "63",
    combat: "90",
  };
  return (
    <div className="charactersPower">
      <Container className="powerInfo">
        <Row>
          <Col>
            <Row>
              {Object.keys(powerstats).map((stat) => {
                return (
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbarWithChildren
                      value={powerstats[stat]}
                      styles={buildStyles({
                        pathColor: "#99D98C",
                        trailColor: "#E0FAFA",
                      })}
                    >
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                        {stat} <text> </text>
                        <strong>{powerstats[stat]}</strong>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CharactersPower;
