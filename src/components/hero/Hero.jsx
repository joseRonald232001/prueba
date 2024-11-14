import React from "react";
import "./heroStyle.css";
function Hero() {
  return (
    <>
      <section className="hero_section">
        <div className="hero_content">
          <article>
            <h1>Desayunos y postres</h1>
            <p>
              Bienvenido a un mundo donde la repostería cobra vida y los sueños
              se convierten en sabores.
            </p>
          </article>
          <figure className="hero_figure"></figure>
        </div>
      </section>
    </>
  );
}

export default Hero;
