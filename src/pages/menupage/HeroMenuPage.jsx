import React from "react";
import StarYellow from "../../assets/icons/StarYellow.svg";
import "./heroMenuPage.css"

function HeroMenuPage() {
  const platosDelDia = [
    {
      id: "00d3e3b3-e1fa-4bdf-a1b8-b184d43c0ba6",
      title: "Bajo el Cielo Azul",
      description:
        "Un tazón de avena cremosa con frutas rojas, nueces y un toque de canela.",
      category: "breakfast",
      punctuation: 4,
      price: 300,
      image:
        "https://res.cloudinary.com/dukxiqmc7/image/upload/v1731526420/your_folder/clgmkleruld7ulbik7j7.webp",
    },
    {
      id: "0519ccd1-9488-4f61-b889-6811ae1d646a",
      title: "Tarta de Cielo",
      description:
        "Tarta ligera de limón y merengue, con una base crujiente de galletas de mantequilla.",
      category: "pastel",
      punctuation: 3.5,
      price: 280,
      image:
        "https://res.cloudinary.com/dukxiqmc7/image/upload/v1731527491/your_folder/r4mlzwgpoxypmfiu0xka.webp",
    },
  ];
  return (
    <>
      <section className="menu_page_section">
        <figure className="menu_page_hero">
          <img
            className="menu_hero_image"
            src="images/imageMenu.webp"
            alt="menu candy | cake"
          />
          <article className="menu_hero_paragraph">
            <div>
              <span>{platosDelDia[0].category}</span>
              <span>
                <img src={StarYellow} alt="star icon" />
                {platosDelDia[0].punctuation}
              </span>
            </div>
            <h1>{platosDelDia[0].title}</h1>
            <p>{platosDelDia[0].description}</p>
          </article>

          <strong>PLATO DEL DIA</strong>
        </figure>
      </section>
    </>
  );
}

export default HeroMenuPage;
