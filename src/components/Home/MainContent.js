import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MainContent.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MainContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="maincontent">
      <div>
        <div data-aos="zoom-in">
          <Container fluid>
            <Row>
              <Col className="maintext"> WHO IS THE BEST?</Col>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <Row>
          <Col>
            <span
              className="scrolldown"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="800"
              fluid
            >
              <div>
                <i class="downText">Scroll Down</i>
              </div>
              <ExpandMoreIcon id="arrowDown" />{" "}
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;
