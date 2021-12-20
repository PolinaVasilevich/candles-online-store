import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";
import { IoBasketOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";

const AppHeader: FC = () => {
  interface IHeader {
    path: string;
    label: string;
  }

  const headers: IHeader[] = [
    {
      path: RouteNames.ABOUT,
      label: "About Us",
    },

    {
      path: RouteNames.CONTACTS,
      label: "Contacts",
    },

    {
      path: RouteNames.COLLECTIONS,
      label: "Collections",
    },

    {
      path: RouteNames.CATALOGUE,
      label: "Catalogue",
    },
  ];

  return (
    <header className="header">
      <div>
        <Link to={RouteNames.HOME}>
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
      </div>
      <nav>
        <ul className="header__nav nav">
          {headers.map((header) => (
            <li key={header.path} className="nav__item">
              <Link to={header.path}>{header.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link to={RouteNames.BAG}>
        <IoBasketOutline />
      </Link>
    </header>
  );
};

export default AppHeader;
