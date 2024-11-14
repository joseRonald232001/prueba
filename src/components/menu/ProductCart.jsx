import React from "react";
import star from "../../assets/icons/star.svg";
import StarYellow from "../../assets/icons/StarYellow.svg";
import "./productCart.css";

function ProductCart({ product }) {
  const getbackGroundCategory = (category) => {
    switch (category) {
      case "pasta":
        return "var(--color-orange)";
      case "PASTELES":
        return "var(--color-pink)";
      case "almuerzo":
        return "var(--color-orange)";
      default:
        return "var(--color-orange)";
    }
  };

  return (
    <>
      <article className="productCart">
        <div className="productCart_header">
          <span style={{ background: getbackGroundCategory(product.category) }}>
            <p>{product.category}</p>
          </span>
          <span>
            <img src={StarYellow} alt="start yellow icon" />{" "}
            {product.puntuation}
          </span>
        </div>
        <figure className="productCart_figure">
          <img src={product.image} alt="plate image" />
        </figure>

        <h3>{product.title}</h3>
        <div className="productCart_buttons">
          <button>Ver detalles</button>
          <button>
            <img src={star} alt="start icon" />
            Calificar
          </button>
        </div>
      </article>
    </>
  );
}

export default ProductCart;
