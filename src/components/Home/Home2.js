import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> LET ME INTRODUCE MYSELF </span> 
            </h1>
            <p className="home-about-body">
              
            A dedicated tech enthusiast from Pokhara, Nepal, holding a Bachelor's degree in Computer Engineering from Pokhara University, 🤷‍♂️
              <br />
              <br />
              My background includes international experience, such as contributing to the  &nbsp;
              <i>
                <b className="purple">WheelScout project  </b> at Darmstadt University in Germany, and hands-on internships in{" "}
                <b className="purple">
                web and backend development
                </b>
              </i>
              <br />
              <br />
              My journey in tech is fueled by a passion for  to 
               <b className="purple"> growth and a dedication</b> to
              <i>
                <b className="purple">
                  {" "}
                  continuous learning.
                </b>
              </i>
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>You can find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bidhata1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/bidhata.pandey.3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bidhata-pandey-74984b226/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
