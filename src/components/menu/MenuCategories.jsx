import React from "react";
import "./menuCategories.css";
import almuerzo from "../../assets/images/almuerzo.webp";
import desayuno from "../../assets/images/desayuno.webp";
import pasta from "../../assets/images/pasta.webp";
import pastel from "../../assets/images/pastel.webp";
import arrowRight from "../../assets/icons/arrowRight.svg"

function MenuCategories() {
  return (
    <>
      <section className="menu_categories_section">
        <div className="menu_caetgories_content">
          <div className="menu_categories_title">
            <h2>Nuestros menus</h2>
            <div className="menu_categories_line"></div>
          </div>

          <div className="menu_categories_items">
            <article>
              <img src={pastel} className="item_figure"  alt="image pastel" />
              <div>
                <h3>Pasteles</h3>
                <p>20 opciones</p>
              </div>
              <img className="arrow-right" src={arrowRight} alt="arrow-right icon" />
            </article>
            <article>  
              <img src={pasta} className="item_figure"  alt="image pastes" />
              <div>
                <h3>Pastas</h3>
                <p>20 opciones</p>
              </div>
              <img className="arrow-right" src={arrowRight} alt="arrow-right icon" />

            </article>
            <article>
              <img src={almuerzo} className="item_figure"  alt="image almuerzo" />
              <div>
                <h3>Almuerzos</h3>
                <p>20 opciones</p>
              </div>
              <img className="arrow-right" src={arrowRight} alt="arrow-right icon" />

            </article>
            <article>
              <img src={desayuno} className="item_figure"  alt="image desayuno" />
              <div>
                <h3>Desayunos</h3>
                <p>20 opciones</p>
              </div>
              <img className="arrow-right" src={arrowRight} alt="arrow-right icon" />

            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuCategories;
