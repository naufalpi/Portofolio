import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import simpeg from "../../Assets/Projects/simpeg.png";
import ezway from "../../Assets/Projects/ezway.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpeg}
              isBlog={false}
              title="SIM Kepegawaian"
              description="
              This system is designed for efficiently managing village office employee administration, encompassing tasks such as maintaining employee data, monitoring attendance, facilitating employee transfers, managing leave requests, handling employee retirement procedures, and storing the results of employee performance assessments."
              ghLink="https://github.com/naufalpi/sistem-informasi-manajerial-kepegawaian"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezway}
              isBlog={false}
              title="EZ WAY"
              description="
              EZ Way is a service provider that assists students and university scholars in completing their assignments. Students and scholars can submit requests to have their assignments completed. Additionally, they have the opportunity to become tutors for assignments submitted by other students and scholars. There are various task categories available based on academic levels that can be submitted."
              ghLink="https://github.com/naufalpi/ez-way"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
