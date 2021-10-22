import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

//Import react-circular-progressionbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CharactersPower = (props) => {
  const character = props.location.state.state.character;
  console.log(character);

  const powerstats = {
    Combat: character.powerstats.combat,
    Durability: character.powerstats.durability,
    Intelligence: character.powerstats.intelligence,
    Power: character.powerstats.power,
    Speed: character.powerstats.speed,
    Strength: character.powerstats.strength,
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
