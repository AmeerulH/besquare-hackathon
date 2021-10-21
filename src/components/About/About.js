import React from "react";
import "./About.css";
import logo from "../../AL.png";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="AboutBack">
        <div>
          <img className="image" src={logo} alt="logo" />
        </div>
        <div className="aboutContainer">
          About us
          <div class="box">
            <div>
              <div className="Para1">
                We are 'Sausage party' and been formed in october 2021. This
                website is build after every participant in BeSquare had been
                informed to take a challange,which known as a 'Hackaton' during
                Front-End weeks.We wish to provide a platform where hero's fans
                could compare heroes.So far,we do provide
                'Characters','Versus','Forum' features.
              </div>
              <div className="CTBRS">
              <h2>Contributers: </h2> </div>
              <h3>Ameerul, Amin, Darvind, Edvin, Farhan, Luqman, Lyon</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
