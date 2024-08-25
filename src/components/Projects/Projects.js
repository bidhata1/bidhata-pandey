import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import rental from "../../Assets/Projects/rental.png";
import meetguide from "../../Assets/Projects/meetguide.png";
import cms from "../../Assets/Projects/cms.png";
import design from "../../Assets/Projects/design.png";
import clone from "../../Assets/Projects/clone.png";

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
              imgPath={meetguide}
              isBlog={false}
              title="meetGuide"
              description="participated in hackathons focused on web development using HTML, CSS, JavaScript, Node.js, and MongoDB. Our team addressed tourism challenges in Pokhara, developing web solutions to enhance the visitor experience. This project strengthened my full-stack development skills and contributed to my hometown's tourism sector."
              ghLink="https://github.com/bidhata1/meetguide"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="CMS-PHP"
              description="Content management in PHP involves developing systems that allow users to easily create, edit, and publish website content. These systems often include features like user authentication and media management, enabling efficient content updates without requiring technical expertise."
              ghLink="https://github.com/bidhata1/content-mangement-in-php"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Home Rental"
              description="
              Home rental involves leasing a residential property to tenants for short or long-term stays. It provides a flexible housing option, often including amenities and agreements on rent and duration."
              ghLink="https://github.com/bidhata1/home_rental"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="A personal portfolio is a website or digital collection that showcases an my own skills, projects, experiences, and achievements. It typically features sections like an About Me page, project showcases, and contact information. This portfolio serves as a professional tool to highlight one's work "
              ghLink="https://github.com/bidhata1/meroportfolio"
              demoLink="#"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Connect_krishi"
              description="A mobile app using Flutter to connect farmers, suppliers, and buyers in an agriculture marketplace. A mobile
              app using Flutter to connect farmers, suppliers, and buyers in an agriculture marketplace. The app integrates
              secure payment options, personalized recommendations, and direct communication features."
             
              ghLink="https://github.com/bidhata1/connect_Krishi"
              demoLink="#"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="salon-ecommerce site design into code"
              description="
              Converting Figma designs into custom code for a salon e-commerce app involves using HTML for structure, CSS for styling, and JavaScript for interactivity. "
              ghLink="https://github.com/bidhata1/solon-ecommerce"
              demoLink=""  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clone}
              isBlog={false}
              title="instagram-clone"
              description="Simple instagram-clone to learn HTML,CSS AND JS."
              ghLink="https://bidhata1.github.io/instagram_clone"
              demoLink="https://bidhata1.github.io/instagram_clone/profile.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
