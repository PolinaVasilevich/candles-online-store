import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { RouteNames } from "../../router";
import logo from "../../assets/logo.png";
import bagIcon from "../../assets/icons/bag-icons.png";

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
      <nav className="header__links">
        <ul className="header__nav nav">
          {headers.map((header) => (
            <li key={header.path} className="nav__item">
              <NavLink to={header.path}>{header.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link to={RouteNames.BAG}>
        <div
          className="header__icon"
          style={{ backgroundImage: `url(${bagIcon})` }}
        ></div>
      </Link>
    </header>
  );
};

export default AppHeader;
