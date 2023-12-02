import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiPhp,
  DiLaravel,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="purplee">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <span className="purplee">HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <span className="purplee">CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <span className="purplee">PHP</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <span className="purplee">Mysql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="purplee">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="purplee">React.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
        <span className="purplee">Laravel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="purplee">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="purplee">Git</span>
      </Col>
    </Row>
  );
}



export default Techstack;
