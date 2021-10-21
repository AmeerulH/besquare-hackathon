import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
<<<<<<< HEAD
import AOS from "aos";
import "aos/dist/aos.css";
=======
>>>>>>> 9ea9408678cdadabca242b72cec4eca2331d01e0

import "./Characters.css";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
<<<<<<< HEAD
import VisibilitySensor from "react-visibility-sensor";

import ProgressProvider from "./ProgressProvider";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { easeQuadInOut } from "d3-ease";

const CharactersMainInfo = (props) => {
  AOS.init();
=======

const CharactersMainInfo = (props) => {
>>>>>>> 9ea9408678cdadabca242b72cec4eca2331d01e0
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
        <Container fluid="md">
          <Row>
            <Container className="heroInfo">
              <span class="border tl"></span>
              <span class="border tr"></span>
              <span class="border bl"></span>
              <span class="border br"></span>
              <Row>
                <Col data-aos="fade-up">
                  <Row className="heroName">{character.name}</Row>
                  <Row className="heroDescription">
                    {Object.keys(charBio).map((bioName) => {
                      return (
                        <Row className="bioInformation">
                          <Col sm={4} style={{ textTransform: "capitalize" }}>
                            <strong>{bioName.replace(/_/g, " ")}:</strong>
                          </Col>
                          <Col sm={8} style={{ textTransform: "capitalize" }}>
                            {charBio[bioName]}
                          </Col>
                        </Row>
                      );
                    })}
                  </Row>
                </Col>
                <Col>
                  <Image
                    className="heroImage"
                    src={character.images.lg}
                    rounded
                    data-aos="zoom-in"
                    data-aos-duration="500"
                  />
                </Col>
              </Row>
            </Container>
          </Row>
          <Container className="powerInfo">
            <Row>
              <Row className="wordPowers">Powers?</Row>
              <Row className="circularProgressbar">
                {Object.keys(powerstats).map((stat) => {
                  return (
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={powerstats[stat]}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                    >
                      {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                          <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbarWithChildren
                              value={roundedValue}
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
                      }}
                    </AnimatedProgressProvider>
                  );
                })}
              </Row>
            </Row>
          </Container>
          <Row></Row>
        </Container>
      </div>
    </div>
  );
};

export default CharactersMainInfo;
