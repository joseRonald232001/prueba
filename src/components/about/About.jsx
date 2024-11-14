import React from "react";
import "./aboutStyle.css";
import imageAbout from "../../assets/images/imageAbout.webp";

function About() {
  return (
    <>
      <section className="about_section">
        <div className="about_content">
          <div className="about_title">
          <h2  >Nuestra historia</h2>
          <div className="about_line_title"></div>
          </div>
          <article className="about_details">
            <figure className="about_figure">
              <img src={imageAbout} alt="image about brand" />
            </figure>
            <div className="about_paragraph">
              <p>
                En Candycake, cada creación es una historia de amor horneada a
                la perfección. Desde nuestros inicios, hemos estado sirviendo
                felicidad en forma de pasteles exquisitos que celebran momentos
                especiales y endulzan tu vida cotidiana.
              </p>
              <p>
                Únete a nosotros en este viaje lleno de sabor y descubre por qué
                nuestras recetas únicas han estado horneando sonrisas desde el
                primer día
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
