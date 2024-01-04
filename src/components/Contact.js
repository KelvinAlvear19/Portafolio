import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/ContactUs.png";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar WhatsApp');
    const [status, setStatus] = useState({});
  
    const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      });
    };
  
    const openLinkInNewWindow = (link) => {
      window.open(link, '_blank');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setButtonText("Send");
  
      // Abrir el enlace deseado en una nueva ventana
      openLinkInNewWindow("https://wa.me/593998131192?text=Hola%2C+Kevin+%0D%0AHe+revisado+tu++portafolio+y+estoy+interesado");
    };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contactame</h2>
                <p> ¡Estoy aquí para ayudarte! Dedicado al desarrollo frontend y al diseño, me esfuerzo por crear soluciones que no solo sean atractivas visualmente, sino también altamente funcionales.
<br></br>
Si tienes preguntas, inquietudes o simplemente deseas discutir tus ideas, no dudes en hacérmelo saber. Estoy comprometido a responder a tus consultas en el menor tiempo posible. La manera más rápida de contactarme es a través de mi WhatsApp.

Espero tener la oportunidad de colaborar contigo y llevar tus proyectos al siguiente nivel.</p>
                <form onSubmit={handleSubmit}>
                  <Row>
                
                    <Col size={12} className="px-1">
                    
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}