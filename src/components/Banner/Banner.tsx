import React, { FC } from "react";

import ProductInfoCard from "../ProductInfoCard/ProductInfoCard";

interface BannerProps {
  backgroundImage: string;
}

const Banner: FC<BannerProps> = (props) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <ProductInfoCard
        title="Newest Collection SOFT"
        text="Expolre a new world of soft aromas from our collection SOFT filled with cotton, sea salt, mint and leaves. Relax with the help of candles that will create the best atmosphere in your house"
        colorCard="var(--clr-bgr-footer)"
        widthBlock="49%"
      />
    </div>
  );
};

export default Banner;
