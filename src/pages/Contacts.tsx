import React, { FC } from "react";
import MainButton from "../components/MainButton/MainButton";

import map from "../assets/map.png";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <div className="contacts__text-container">
        <h3> Need to contact us?</h3>
        <p>
          Then fill the form below and we will reply to your message in a day
        </p>
      </div>
      <div className="contacts__form">
        <form>
          <input type="email" required placeholder="Your E-Mail Adress" />
          <input required placeholder="Full Name" />
          <textarea placeholder="Your Message" />
          <MainButton title="Contact" />
        </form>
      </div>
      <div className="contacts__map map">
        <div className="map__text-container">
          <h2>OUR LOCATION</h2>
          <p>
            Our manufacture is located at 15 Portman Square, Marylebone, London
            W1H 6LJ, UK
          </p>
        </div>
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Contacts;
