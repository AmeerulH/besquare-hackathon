import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./Characters.css";

const CharactersBio = (props) => {
  const character = props.location.state.state.character;
  console.log(character);
  const charBio = {
    response: "success",
    id: "70",
    name: "Batman",
    full_name: "Bruce Wayne",
    alter_egos: "No alter egos found.",
    aliases: ["Insider", "Matches Malone"],
    place_of_birth: "Crest Hill, Bristol Township; Gotham County",
    first_appearance: "Detective Comics #27",
    publisher: "DC Comics",
    alignment: "good",
  };

  return (
    <div>
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
    </div>
  );
};

export default CharactersBio;
