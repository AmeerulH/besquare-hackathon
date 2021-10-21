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
      <div data-aos="zoom-in">
        <h1 className="maintext"> WHO IS THE BEST?</h1>
      </div>
      <div className="scrolldown">
        <span
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
      </div>
    </div>
  );
};

export default MainContent;
