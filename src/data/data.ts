import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";

import g_img1 from "../assets/gallery/img-1.png";
import g_img2 from "../assets/gallery/img-2.png";
import g_img3 from "../assets/gallery/img-3.png";
import g_img4 from "../assets/gallery/img-4.png";
import g_img5 from "../assets/gallery/img-5.png";
import g_img6 from "../assets/gallery/img-6.png";
import g_img7 from "../assets/gallery/img-7.png";
import g_img8 from "../assets/gallery/img-8.png";
import { isTemplateMiddle } from "typescript";

export const sliders = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

export const galleryImages = [
  { id: 1, img: g_img1 },
  { id: 2, img: g_img2 },
  { id: 3, img: g_img3 },
  { id: 4, img: g_img4 },
  { id: 5, img: g_img5 },
  { id: 6, img: g_img6 },
  { id: 7, img: g_img7 },
  { id: 8, img: g_img8 },
];

export const popularProducts = [
  {
    id: 1,
    img: img4,
    name: "white strawberry",
    color: "white",
    price: 24,
    filter: "floral",
  },
  {
    id: 2,
    img: img2,
    name: "appalechia",
    color: "calm",
    price: 24,
    filter: "citrus ",
  },

  {
    id: 3,
    img: img3,
    name: "pine forest",
    color: "calm",
    price: 24,
    filter: "citrus ",
  },
  {
    id: 4,
    img: img1,
    name: "snowy morning",
    color: "white",
    price: 24,
    filter: "woody ",
  },
  {
    id: 5,
    img: img4,
    name: "white strawberry",
    color: "white",
    price: 24,
    filter: "floral",
  },
  {
    id: 6,
    img: img2,
    name: "appalechia",
    color: "calm",
    price: 24,
    filter: "woody ",
  },
  {
    id: 7,
    img: img3,
    name: "pine forest",
    color: "calm",
    price: 24,
    filter: "Fresh and clean ",
  },
  {
    id: 8,
    img: img1,
    name: "snowy morning",
    color: "white",
    price: 24,
    filter: "floral",
  },
  {
    id: 9,
    img: img4,
    name: "white strawberry",
    color: "white",
    price: 24,
    filter: "Fresh and clean ",
  },
  {
    id: 10,
    img: img2,
    name: "appalechia",
    color: "calm",
    price: 24,
    filter: "woody ",
  },
  {
    id: 11,
    img: img3,
    name: "pine forest",
    color: "calm",
    price: 24,
    filter: "Fresh and clean ",
  },
  {
    id: 12,
    img: img1,
    name: "snowy morning",
    color: "white",
    price: 24,
    filter: "floral",
  },
];

export const sliderData = [
  {
    id: 1,
    img: img4,
    title: "One wicked candles",
    text: "Candles from this collection will help you find a feeling of white christmas even when there is no snow around. Fresh and at the same time majestic aromas will fill your house in seconds creating fantastic holiday mood",
    colorCard: "var(--clr-bgr-header)",
  },
  {
    id: 2,
    img: img2,
    title: "One wicked candles",
    text: "Candles from this collection will help you find a feeling of white christmas even when there is no snow around. Fresh and at the same time majestic aromas will fill your house in seconds creating fantastic holiday mood",
    colorCard: "var(--clr-bgr-header)",
  },
  {
    id: 3,
    img: img3,
    title: "One wicked candles",
    text: "Candles from this collection will help you find a feeling of white christmas even when there is no snow around. Fresh and at the same time majestic aromas will fill your house in seconds creating fantastic holiday mood",
    colorCard: "var(--clr-bgr-header)",
  },
  {
    id: 4,
    img: img1,
    title: "One wicked candles",
    text: "Candles from this collection will help you find a feeling of white christmas even when there is no snow around. Fresh and at the same time majestic aromas will fill your house in seconds creating fantastic holiday mood",
    colorCard: "var(--clr-bgr-header)",
  },
];

export const filters = (() => {
  let result = [{ id: 0, name: "all", count: popularProducts.length }];

  popularProducts.forEach((item, index) => {
    const filter = result.filter(
      (f) => f.name.toLocaleLowerCase() === item.filter.toLocaleLowerCase()
    );

    if (filter.length) {
      result = [
        ...result.filter((f) => f.name !== item.filter),
        { ...filter[0], count: filter[0].count + 1 },
      ];
    } else {
      result.push({ id: index, name: item.filter, count: 1 });
    }
  });

  return result.filter((f) => f.name);
})();
