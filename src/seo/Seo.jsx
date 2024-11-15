import React from "react";
import { Helmet } from "react-helmet-async";
import seoimg from "../seo/seoimg.webp";

function Seo({ title = "Mi Sitio Web", description = "Descubre nuestro delicioso menú con una variedad de opciones para todos los gustos.", url }) {
  const currentUrl = url || typeof window !== "undefined" ? window.location.href : "";

  return (
    <Helmet>
      {/* Etiquetas para SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="menú, comida, restaurante, deliciosa, opciones" />

      {/* Etiquetas Open Graph para redes sociales */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoimg} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />

    </Helmet>
  );
}

export default Seo;
