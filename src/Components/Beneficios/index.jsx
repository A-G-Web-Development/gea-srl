import React, { useState } from "react";

function Beneficios() {
  const [mostrarParrafos, setMostrarParrafos] = useState(false);

  const toggleParrafos = () => {
    setMostrarParrafos(!mostrarParrafos);
  };

  return (
    <section id="beneficios" className="s-about target-section">
      <style>
        {`.parrafo-oculto2 {
          display: ${mostrarParrafos ? "block" : "none"};
        }`}
      </style>

      <div
        className="row section-header bit-narrow"
        data-duration="100"
        data-aos-delay="50"
        data-aos="fade-up"
      >
        <div className="col-full">
          <h3 className="subhead">Beneficios de la tercerización</h3>
        </div>
      </div>

      <div className="row bit-narrow">
        <div className="about-process process block-1-2 block-tab-full">
          <div
            className="col-block item-process"
            data-duration="100"
            data-aos-delay="50"
            data-aos="fade-up"
          >
            <div className="item-process__text">
              <h4 className="item-title">Enfoque en el núcleo empresarial</h4>
              <p>
                Permite al cliente concentrarse en el corazón de su empresa,
                desarrollando y consolidando sus ventajas competitivas.
              </p>
            </div>
          </div>
          {/* Agrega el resto de los bloques de proceso aquí */}

          <button
            id="ver-mas-btn2"
            style={{ paddingInline: "25px" }}
            onClick={toggleParrafos}
            data-duration="100"
            data-aos-delay="50"
            data-aos="fade-up"
          >
            {mostrarParrafos ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
