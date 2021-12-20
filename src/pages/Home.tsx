import React, { FC } from "react";
import Gallery from "../components/Gallery/Gallery";
import Slider from "../components/Slider/Slider";

import banner from "../assets/banner.jpg";

import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import slider4 from "../assets/slider-4.jpg";
import slider5 from "../assets/slider-5.jpg";
import slider6 from "../assets/slider-6.jpg";
import slider7 from "../assets/slider-7.jpg";
import slider8 from "../assets/slider-8.jpg";

import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductInfoCard from "../components/ProductInfoCard/ProductInfoCard";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";
import ProductSaleCard from "../components/ProductSaleCard/ProductCard";
import SliderProducts from "../components/SliderProducts/SliderProducts";

const Home: FC = () => {
  const imgs = [slider1, slider2, slider3, slider1, slider2, slider3];

  const products = [
    {
      img: slider1,
      name: "white strawberry",
      color: "white",
      price: 24,
    },
    {
      img: slider2,
      name: "appalechia",
      color: "calm",
      price: 24,
    },
    {
      img: slider3,
      name: "pine forest",
      color: "calm",
      price: 24,
    },
    {
      img: slider4,
      name: "snowy morning",
      color: "white",
      price: 24,
    },

    {
      img: slider5,
      name: "white strawberry",
      color: "white",
      price: 24,
    },
    {
      img: slider6,
      name: "appalechia",
      color: "calm",
      price: 24,
    },
    {
      img: slider7,
      name: "pine forest",
      color: "calm",
      price: 24,
    },
    {
      img: slider8,
      name: "snowy morning",
      color: "white",
      price: 24,
    },

    {
      img: slider6,
      name: "appalechia",
      color: "calm",
      price: 24,
    },
    {
      img: slider7,
      name: "pine forest",
      color: "calm",
      price: 24,
    },
    {
      img: slider8,
      name: "snowy morning",
      color: "white",
      price: 24,
    },

    {
      img: slider6,
      name: "appalechia",
      color: "calm",
      price: 24,
    },
    {
      img: slider7,
      name: "pine forest",
      color: "calm",
      price: 24,
    },
    {
      img: slider8,
      name: "snowy morning",
      color: "white",
      price: 24,
    },
  ];

  const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
  ];

  return (
    <div>
      <Banner backgroundImage={banner} />
      <div style={{ margin: "5rem 0" }} className="main-wrapper">
        <Title>Our collections</Title>
        <Container>
          <ProductInfoCard
            title="Newest Collection SOFT"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            colorCard="var(--grey)"
          />
          <img src={slider2} alt="img" />
        </Container>
        <Slider images={imgs} />
      </div>
      <div className="main-wrapper">
        <Gallery images={images} />
      </div>

      <div className="main-wrapper">
        <Title>Popular products</Title>
        <SliderProducts products={products} />
      </div>
    </div>
  );
};

export default Home;
