import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anand Mohan Jha </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a junior pursuing B.Tech in Aritificial Intelligence and Data Science from BPIT, Delhi, India
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Capturing moments with my phone
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games.
            </li>
          </ul>
           {/* any quote of mine */}
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            ""{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Muaz</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
