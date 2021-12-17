import React, { FC } from "react";
import AppHeader from "../AppHeader/AppHeader";

import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer: FC = () => {
  return (
    <div className="footer">
      <AppHeader />
      <div className="footer__icons">
        <IoLogoInstagram />
        <IoLogoFacebook />
        <IoLogoTwitter />
      </div>
    </div>
  );
};

export default Footer;
