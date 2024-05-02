import React from 'react';

function HomeSection() {
  return (
    <section
      id="inicio"
      className="s-home page-hero target-section"
      data-parallax="scroll"
      data-image-src="images/hero-bg.jpg"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="grid-overlay">
        <div></div>
      </div>

      <div className="home-content">
        <div className="row home-content__main">
          {/* <h1>GEA S.R.L.</h1> */}
          <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <img src="images/logo-sin-fondo.svg" alt="Homepage" />
          </div>

          <h3>Empresa dedicada al Mantenimiento Integral</h3>

          {/* <div className="home-content__video">
          <a className="video-link" href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0" data-lity>
            <span className="video-icon"></span>
            <span className="video-text">Watch Video</span>
          </a>
        </div> */}

          <div className="home-content__button">
            <a
              href="#quienes-somos"
              className="smoothscroll btn btn--primary btn--large"
            >
              Más Sobre Nosotros
            </a>
            <a href="#contacto" className="smoothscroll btn btn--large">
              Contáctenos
            </a>
          </div>
        </div>
      </div>

      {/* <ul className="home-social">
        <li>
          <a href="#"
            ><i className="fab fa-facebook-f" aria-hidden="true"></i
            ><span>Facebook</span></a
          >
        </li>
        <li>
          <a href="#"
            ><i className="fab fa-twitter" aria-hidden="true"></i
            ><span>Twiiter</span></a
          >
        </li>
        <li>
          <a href="#"
            ><i className="fab fa-instagram" aria-hidden="true"></i
            ><span>Instagram</span></a
          >
        </li>
      </ul> */}
    </section>
  );
}

export default HomeSection;
