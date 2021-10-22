import React from "react";
import "./About.css";
import logo from "../../AL.png";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="AboutBack">
      <div className="aboutContainer">
        <div>
          <div>
            <img className="image" src={logo} alt="logo" />
          </div>
          <div class="box">
            <h1 className="aboutHeader">About Us</h1>
            <div className="Para1">
              We are 'Sausage party'. We built this website as we wanted to get
              others to discuss: who is the best character? We all come from
              humble beginnings, and wish to share our knowledge and passion
              when it comes to superheros/villains.
            </div>
            <div className="CTBRS">
              <h2>Contributers: </h2>{" "}
            </div>
            <h3 className="namesHeader">
              Ameerul, Amin, Darvind, Edvin, Farhan, Luqman, Lyon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
