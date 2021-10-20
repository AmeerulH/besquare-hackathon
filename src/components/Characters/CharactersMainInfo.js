import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

import "./Characters.css";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CharactersMainInfo = (props) => {
  const character = props.c;

  const powerstats = {
    Combat: character.powerstats.combat,
    Durability: character.powerstats.durability,
    Intelligence: character.powerstats.intelligence,
    Power: character.powerstats.power,
    Speed: character.powerstats.speed,
    Strength: character.powerstats.strength,
  };

  const charBio = {
    id: character.id,
    name: character.name,
    full_name: character.biography.fullName,
    alter_egos: character.biography.alterEgos,
    aliases: character.biography.aliases,
    place_of_birth: character.biography.placeOfBirth,
    first_appearance: character.biography.firstAppearance,
    publisher: character.biography.publisher,
    alignment: character.biography.alignment,
    groupAffliations: character.connections.groupAffliations,
    relatives: character.connections.relatives,
  };

  console.log(character);
  return (
    <div className="charactersMainInfo">
      <div className="charactersInfo">
        <Container>
          <Row>
            <Container className="heroInfo">
              <Row>
                <Col>
                  <Row className="heroName">{character.name}</Row>
                  <Row className="heroDescription">
                    <Row>Full Name: {character.biography.fullName}</Row>
                    <Row>Aliases: {character.biography.aliases}</Row>
                    <Row style={{ textTransform: "capitalize" }}>
                      Alignment: {character.biography.alignment}
                    </Row>
                    <Row style={{ textTransform: "capitalize" }}>
                      Occupation: {character.work.occupation}
                    </Row>
                  </Row>
                </Col>
                <Col>
                  <Image
                    classname="heroImage"
                    src={character.images.lg}
                    width="auto "
                    height="500px"
                  ></Image>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
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
          </Row>
          <Row>
            <Container className="bioContainer">
              {Object.keys(charBio).map((bioName) => {
                return (
                  <Row className="bioInformation">
                    <Col
                      sm={3}
                      className="bioDisplay"
                      style={{ textTransform: "capitalize" }}
                    >
                      <strong>{bioName.replace(/_/g, " ")}:</strong>
                    </Col>
                    <Col
                      sm={9}
                      className="bioDisplay1"
                      style={{ textTransform: "capitalize" }}
                    >
                      {charBio[bioName]}
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CharactersMainInfo;
