import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/pythonpf.png";
import meter2 from "../assets/img/htmlpf.png";
import meter3 from "../assets/img/csspf.png";
import meter4 from "../assets/img/angularpf.png";
import meter5 from "../assets/img/laravelpf.png";
import meter6 from "../assets/img/ionicpf.png";
import meter7 from "../assets/img/reactpf.png";
import meter8 from "../assets/img/nodepf.png";
import colorSharp from "../assets/img/color-sharp3.png"
export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Habilidades</h2>
                          <p>Mi experiencia abarca desde el desarrollo frontend con tecnologías como Angular, React, HTML y CSS, hasta el desarrollo backend con Python, Laravel y Node.js.<br></br></p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter1} alt="Image"   />
                                  <h5>PYTHON</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Image" />
                                  <h5>HTML</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Image" />
                                  <h5>CSS3</h5>
                              </div>
                              <div className="item">
                                  <img src={meter4} alt="Image" />
                                  <h5>ANGULAR</h5>
                              </div>
                              <div className="item">
                                  <img src={meter5} alt="Image" />
                                  <h5>LARAVEL</h5>
                              </div>
                              <div className="item">
                                  <img src={meter6} alt="Image" />
                                  <h5>IONIC</h5>
                              </div>
                              <div className="item">
                                  <img src={meter7} alt="Image" />
                                  <h5>REACT</h5>
                              </div>
                              <div className="item">
                                  <img src={meter8} alt="Image" />
                                  <h5>Node</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    )
  }