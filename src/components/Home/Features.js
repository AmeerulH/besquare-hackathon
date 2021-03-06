import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
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
          <div className="featureCards">
            <Card as={Link} to="/Characters" className="cardFeatures">
              <Card.Body>
                <Card.Title className="CardTitle">CHARACTERS</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="lists">Power</ListGroup.Item>
                  <ListGroup.Item className="lists">Description</ListGroup.Item>
                  <ListGroup.Item className="lists">Connections</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card as={Link} to="/Versus" className="cardFeatures">
              <Card.Body>
                <Card.Title className="CardTitle">HEAD TO HEAD</Card.Title>
                <Card.Text className="CardText">
                  Choose between different heroes to compare the statistics
                </Card.Text>
              </Card.Body>
            </Card>
            <Card as={Link} to="/Forum" className="cardFeatures">
              <Card.Body>
                <Card.Title className="CardTitle">FORUM</Card.Title>
                <Card.Text className="CardText">Community Discussion</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </h2>
      </div>
    </div>
  );
};
export default Features;
