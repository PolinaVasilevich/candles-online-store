import React, { FC } from "react";
import Gallery from "../components/Gallery/Gallery";
import Slider from "../components/Slider/Slider";

import banner from "../assets/banner.png";

import img from "../assets/img.png";

import Banner from "../components/Banner/Banner";

import ProductInfoCard from "../components/ProductInfoCard/ProductInfoCard";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";

import SliderProducts from "../components/SliderProducts/SliderProducts";
import { sliders, galleryImages, popularProducts } from "../data/data";

const Home: FC = () => {
  return (
    <div>
      <Banner backgroundImage={banner} />
      <div style={{ margin: "3rem 0" }} className="main-wrapper">
        <Title>Our collections</Title>
        <Container>
          <ProductInfoCard
            title="Newest Collection SOFT"
            text="Expolre a new world of soft aromas from our collection SOFT filled with cotton, sea salt, mint and leaves. Relax with the help of candles that will create the best atmosphere in your house"
            colorCard="var(--grey)"
          />
          <img src={img} alt="img" />
        </Container>
        <Slider images={sliders} />
      </div>
      <div className="main-wrapper">
        <Title>Popular products</Title>
        <SliderProducts products={popularProducts} />
      </div>

      <div className="main-wrapper">
        <Gallery images={galleryImages} />
      </div>
    </div>
  );
};

export default Home;
