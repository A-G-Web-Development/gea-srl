import React, { useState } from "react";

function QuienesSomos() {
  const [mostrarParrafos, setMostrarParrafos] = useState(false);

  const toggleParrafos = () => {
    setMostrarParrafos(!mostrarParrafos);
  };

  return (
    <section id="quienes-somos" className="s-about target-section">
      <div
        className="row section-header bit-narrow"
        data-duration="100"
        data-aos-delay="50"
        data-aos="fade-up"
      >
        <div className="col-full">
          <h3 className="subhead">Quienes somos</h3>
          <h1 className="display-1">
            GEA SRL se ha constituido para atender todas las necesidades de
            Mantenimiento Integral
          </h1>
        </div>
      </div>

      <style>
        {`.parrafo-oculto {
          display: ${mostrarParrafos ? "block" : "none"};
        }`}
      </style>

      <div
        className="row bit-narrow"
        data-duration="100"
        data-aos-delay="50"
        data-aos="fade-up"
      >
        <div className="col-full">
          <p className="lead">
            Sabemos de los inconvenientes de contar en cada momento con personal
            altamente especializado, con el costo que ello significa, en la gran
            dispersión de cambios y variaciones técnicas que su empresa necesita
            o desea implementar.
          </p>
          <p className="lead">
            Es nuestra preocupación poder satisfacer sus necesidades de
            Mantenimiento dentro de los tiempos necesarios con la aptitud y
            eficiencia esperada por Uds.
          </p>
          <p className="lead">
            Quienes dirigimos GEA SRL, estamos vocacionalmente comprometidos con
            el concepto "servicio" y trabajamos día a día para desarrollar
            plenamente una sociedad estratégica entre proveedor y cliente para
            la obtención de mutuos beneficios.
          </p>
          <p className={`lead parrafo-oculto`}>
            Los 10 años de experiencia en el mercado de servicios de suministro
            de mano de obra especializada, nos permite exhibir logros
            significativos que sustentan nuestra propuesta e idoneidad
            empresaria, avalados por nuestra solvencia económica y un concepto
            de cumplimiento puntual de obligaciones sociales y fiscales.
          </p>
          <p className={`lead parrafo-oculto`}>
            Nos encontramos a su disposición para realizar un relevamiento de
            sus instalaciones sin compromiso, desarrollar una propuesta a la
            medida de sus requerimientos de Manteni- miento, y poder demostrar
            los valores y beneficios de nuestros servicios ofrecidos.
          </p>
          <button
            id="ver-mas-btn"
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

export default QuienesSomos;
