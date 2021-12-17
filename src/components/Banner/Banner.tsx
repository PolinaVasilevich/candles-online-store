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
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
        colorCard="var(--red-yellow-translucency)"
        widthBlock="40%"
      />
    </div>
  );
};

export default Banner;
