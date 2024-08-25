import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bidhata Pandey </span>
            from <span className="purple"> Pokhara, Nepal.</span>
            <br />
            I am passionate tech graduate always eagar to learn new things
            <br />
            I have completed Bachelor of Computer Engineering from Pokhara University
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling/Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One day for sure"{" "}
          </p>
          <footer className="blockquote-footer">Bidhata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
