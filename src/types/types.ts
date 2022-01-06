export interface IImage {
  id: string | number;
  img: string;
}

export interface ISliderData {
  id: string | number;
  img: string;
  title: string;
  text: string;
  colorCard?: string;
}

export interface IFilter {
  id: string | number;
  name: string;
  count: number;
}
