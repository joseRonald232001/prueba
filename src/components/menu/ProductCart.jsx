import React from "react";
import starIcon from "../../assets/icons/starIcon.svg";
import StarYellow from "../../assets/icons/StarYellow.svg";
import "./productCart.css";

function ProductCart({ product }) {
  const getbackGroundCategory = (category) => {
    switch (category) {
      case "pasta":
        return "var(--color-orange)";
      case "pastel":
        return "var(--color-pink)";
      case "lunch":
        return "var(--color-orange)";
      case "breakfast":
        return "var( --color-brown)";
      case "breakfast":
        return "var( --color-mustard)";
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
            {product.punctuation}
          </span>
        </div>
        <figure className="productCart_figure">
          <img src={product.image} alt="plate image" />
        </figure>

        <h3>{product.title}</h3>
        <div className="productCart_buttons">
          <button>Ver detalles</button>
          <button>
            <img src={starIcon} alt="start icon" />
            Calificar
          </button>
        </div>
      </article>
    </>
  );
}

export default ProductCart;
