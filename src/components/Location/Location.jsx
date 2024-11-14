import React from "react";
import "./location.css";

function Location() {
  return (
    <>
      <section className="loction_section">
        <div className="location_title">
          <h2>Ven y prueba nuestros increibles platillos</h2>
          <div className="location_line"></div>
        </div>
        <div className="location_content">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7313849731772!2d-66.05307422391631!3d-17.37665386390502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37754c5df5b81%3A0x9ff311066028b245!2sSan%20Mart%C3%ADn%20de%20Tours!5e0!3m2!1ses!2sbo!4v1731594367504!5m2!1ses!2sbo"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Location;
