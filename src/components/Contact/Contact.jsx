import React from "react";
import "./contact.css";
import facebook from "../../assets/icons/socialNetworks/facebook.svg";
import instagram from "../../assets/icons/socialNetworks/instagram.svg";
import phoneIcon from "../../assets/icons/socialNetworks/phoneIcon.svg";
import whatsApp from "../../assets/icons/socialNetworks/whatsApp.svg";
import vectorContact from "../../assets/vectores/vectorContact.svg";
import vectorContactRigth from "../../assets/vectores/vectorContactRigth.svg";

function Contact() {
  return (
    <>
      <section className="contact_section">
        <img
          className="vectorLeft"
          src={vectorContact}
          alt="vecttor decoration"
        />
        <img
          className="vectorRigth"
          src={vectorContactRigth}
          alt="vector decoration"
        />

        <div className="contact_content">
          <h2>Contactanos</h2>

          <div className="contact_line"></div>

          <p>
            <img src={phoneIcon} alt="phone icon" /> 2222-2121
          </p>
          <div className="contact_networks">
            <img src={whatsApp} alt="whatsapp icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
