import React from "react";

function Header() {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a href="/">
          {/* <img src="images/logo-sin-fondo-blanco.svg" alt="Homepage"> */}
          <h1>GEA S.R.L.</h1>
        </a>
      </div>

      <nav className="header-nav">
        <a href="#" className="header-nav__close" title="close">
          <span>Close</span>
        </a>

        <h3>Navegar hacia</h3>

        <div className="header-nav__content">
          <ul className="header-nav__list">
            <li>
              <a className="smoothscroll" href="#inicio" title="inicio">
                Inicio
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                href="#quienes-somos"
                title="quienes somos"
              >
                Quienes Somos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#beneficios" title="beneficios">
                Beneficios
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#servicios" title="servicios">
                Servicios
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                href="#mantenimiento"
                title="mantenimiento"
              >
                Mantenimiento
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#clientes" title="clientes">
                Clientes
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contacto" title="contacto">
                Contacto
              </a>
            </li>
          </ul>

          {/* <ul className="header-nav__social">
          <li>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </li>
        </ul> */}
        </div>
      </nav>

      <a className="header-menu-toggle" href="#">
        <span className="header-menu-icon"></span>
      </a>
    </header>
  );
}

export default Header;
