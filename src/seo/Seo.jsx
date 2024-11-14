import React from "react";
import { Helmet } from "react-helmet-async";
import seoimg from "../seo/seoimg.webp"

function Seo({ title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Descubre nuestro delicioso menú con una variedad de opciones para todos los gustos." />
        <meta property="og:image" content={seoimg} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
}

export default Seo;
