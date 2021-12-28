import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";
import { IoBasketOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import bag from "../../assets/icons/bag.png";

interface IAppHeaderProps {
  backgroundColor?: string;
}

const AppHeader: FC<IAppHeaderProps> = (props) => {
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
    <header
      className="header"
      style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : "",
      }}
    >
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
        <img src={bag} alt="bag" />
      </Link>
    </header>
  );
};

export default AppHeader;
