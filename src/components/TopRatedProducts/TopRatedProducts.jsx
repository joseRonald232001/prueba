import React from "react";
import "./topRatedProducts.css";
import pastaRated from "../../assets/images/pastaRated.webp";
import pastelRated from "../../assets/images/pastelRated.webp";
import almuerzoRated from "../../assets/images/almuerzoRated.webp";

import ProductCart from "../menu/ProductCart";
import { Link } from "react-router-dom";

const topRated = [
  {
    title: "Spagetti Alle vongole",
    category: "PASTA",
    punctuation: "4.5",
    color: "yellow",
    image: pastaRated,
  },
  {
    title: "Cheesecake s povidly",
    category: "PASTELES",
    punctuation: "4",
    color: "pick",
    image: pastelRated,
  },
  {
    title: "Bacon cheese hamburguer",
    category: "ALMUERZO",
    punctuation: "3.8",
    color: "yellow",
    image: almuerzoRated,
  },
];

function TopRatedProducts() {
  return (
    <>
      <section className="top_rates_products_section">
        <div className="top_rates_prodcuts_title">
          <h2>Los más populares</h2>
          <div className="top_rates_prodcuts_line"></div>
        </div>
        <div className="top_rates_products_content">
          {topRated.map((product) => (
            <ProductCart key={product.title} product={product} />
          ))}
        </div>
        <div className="top_rates_viweMore">
          <Link to={"/nuestrosproductos"}>
          <p>Ver mas</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default TopRatedProducts;
