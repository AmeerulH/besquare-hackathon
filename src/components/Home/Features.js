import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Nav,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../images/marveldc.jpg";
import "./Features.css";
import { Link } from "react-router-dom";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="features">
      <div data-aos="zoom-in">
        <h1 className="header1"> FEATURES </h1>
        <h2 className="header2">
          <Container>
            <Row>
              <Col>
                <Card as={Link} to="/Characters" className="charCard">
                  <Card.Body>
                    <Card.Title className="charCardTitle">
                      CHARACTERS
                    </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="lists">Power</ListGroup.Item>
                      <ListGroup.Item className="lists">
                        Description
                      </ListGroup.Item>
                      <ListGroup.Item className="lists">
                        Connections
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card as={Link} to="/Versus" className="vsCard">
                  <Card.Body>
                    <Card.Title className="vsCardTitle">
                      HEAD TO HEAD
                    </Card.Title>
                    <Card.Text>
                      Choose between different heroes to compare the statistics
                    </Card.Text>
                    <Card.Img variant="top" src={Image} fluid />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card as={Link} to="/Forum" className="forumCard">
                  <Card.Body>
                    <Card.Title className="forumCardTitle">FORUM</Card.Title>
                    <Card.Text>Community Discussion</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </h2>
      </div>
    </div>
  );
};
export default Features;