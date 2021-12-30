import React, { FC } from "react";

import smlImage from "../assets/about/small-img.png";
import bigImage from "../assets/about/big-img.png";

import iconFacebook from "../assets/icons/facebook.png";
import iconInstargam from "../assets/icons/instagram.png";
import iconTwitter from "../assets/icons/twitter.png";

const About: FC = () => {
  return (
    <div className="about">
      <div className="about__content content">
        <p>
          <b>Brendle</b> is an independent fragrance company from London founded
          in 2008. We do our best to bring nice and healthy aromas to your home.
        </p>
        <img src={smlImage} alt="candle" />
        <p>
          The entire Brendle collection is
          <b> vegan, cruelty-free, and phthalate-free</b> — always. All of our
          candles are made with 100% domestically-grown soy wax. While our
          production methods have improved over the years, something that hasn't
          changed about Brendle products is the people behind them. All of our
          products are developed, produced, tested, packed, and shipped by our
          team out of our warehouse in London, UK.
        </p>
        <img src={bigImage} alt="candle" />
      </div>
      <div className="about__container">
        <p>
          Follow us on Instagram, Facebook or Twitter to find out more about us:
        </p>
        <div className="about__btns">
          <button>
            <img src={iconInstargam} alt="instagram" />
          </button>
          <button>
            <img src={iconFacebook} alt="instagram" />
          </button>
          <button>
            <img src={iconTwitter} alt="instagram" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
