import React, { FC } from "react";
import AppHeader from "../AppHeader/AppHeader";

import iconFacebook from "../../assets/icons/facebook.png";
import iconInstargam from "../../assets/icons/instagram.png";
import iconTwitter from "../../assets/icons/twitter.png";

const Footer: FC = () => {
  return (
    <div className="footer">
      <AppHeader />
      <div className="footer__icons">
        <img src={iconInstargam} alt="instagram" />
        <img src={iconFacebook} alt="instagram" />
        <img src={iconTwitter} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
