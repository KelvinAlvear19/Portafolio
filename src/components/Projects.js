import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/AmortizacionAngular.png";
import projImg2 from "../assets/img/GesstionDocumentalCard.png";
import projImg3 from "../assets/img/CrudLaravelCard.png";
import projImg4 from "../assets/img/LibreriaJuvenilIonic.png";
import projImg5 from "../assets/img/LibreraJuvenilIonicServer.png";
import projImg6 from "../assets/img/LibreriJuvenilAngular.png";
import projImg7 from "../assets/img/LibreriJuvenilAngularServer.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
      {
        title: "Amortizacion Angular",
        imgUrl: projImg1,
        githubLink:"https://github.com/KelvinAlvear19/Economia2.0",
      },
      {
        title: "Gestion Documentos",
        imgUrl: projImg2,
        githubLink:"https://github.com/KelvinAlvear19/Proyecto-Gestion-Documentos-Fisei",
      },
      {
        title: "Crud en Laravel",
        imgUrl: projImg3,
        githubLink:"https://github.com/KelvinAlvear19/CRUD-Laravel/tree/main",
      },
      {
        title: "Libreria Juvenil Ionic",
        imgUrl: projImg4,
        githubLink:"https://github.com/KelvinAlvear19/LibreriaJuvenil-Ionic",
      },
      {
        title: "Libreria Juvenil Ionic , Server Node",
        imgUrl: projImg5,
        githubLink:"https://github.com/KelvinAlvear19/LibreriaJuvenil-NodeServer",
      },
      {
        title: "Libreria Juvenil Angular",
        imgUrl: projImg6,
        githubLink:"https://github.com/KelvinAlvear19/Proyecto-Web-Libreria-Angular",
      },
      {
        title: "Libreria Juvenil Angular, Server Node",
        imgUrl: projImg7,
        githubLink:"https://github.com/KelvinAlvear19/Proyecto-Web-Libreria-Server",
      },
    ];
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Proyectos</h2>
                  <p>¡Bienvenido a mi espacio de proyectos! Aquí, encontrarás una colección de trabajos que representan mi pasión y dedicación en el mundo del desarrollo web y diseño. Desde experiencias interactivas en Angular y React, aplicaciones móviles potenciadas por Ionic, hasta soluciones backend sólidas y eficientes en Python, Laravel y Node.js, cada proyecto refleja mi compromiso con la innovación y la calidad.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>            
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }