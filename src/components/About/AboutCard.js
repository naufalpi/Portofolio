import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There!, I'm <span className="purple">Naufal Akbar Pinasthika </span>
            a recent graduate from <br /> the Computer Science department at <span className="purple"> Universitas Islam Indonesia.</span>
            <br />
            <br />
            Currently, I'm leveling up my skills by diving into frameworks like Laravel, React.js, Node.js, and more. Learning is my constant companion, and staying on top of the latest tech trends is a personal mission.
            <br />
            <br />
            Oh, did I mention? I'm on the lookout for new opportunities and currently seeking a position that allows me to apply and expand my skills in the web development world.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
