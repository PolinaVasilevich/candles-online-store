import React from "react";

import { Home, About, Catalogue, Collections, Contacts } from "../pages";
export interface IRoute {
  path: string;
  element: JSX.Element;
}

export enum RouteNames {
  HOME = "/",
  ABOUT = "/about",
  CATALOGUE = "/catalogue",
  COLLECTIONS = "/collections",
  CONTACTS = "/contacts",
}

export const routes: IRoute[] = [
  {
    path: RouteNames.HOME,
    element: <Home />,
  },

  {
    path: RouteNames.ABOUT,
    element: <About />,
  },

  {
    path: RouteNames.CATALOGUE,
    element: <Catalogue />,
  },

  {
    path: RouteNames.COLLECTIONS,
    element: <Collections />,
  },

  {
    path: RouteNames.CONTACTS,
    element: <Contacts />,
  },
];
