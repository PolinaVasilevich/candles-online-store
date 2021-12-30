import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import { RouteNames } from "./router";

const App: FC = () => {
  const location = useLocation();

  return (
    <div>
      <AppHeader backgroundColor="var(--clr-bgr-header)" />
      <main>
        {location.pathname !== "/" ? (
          <div className="navigation">
            <Link to={RouteNames.HOME}>Home / </Link>
            <p>{location.pathname.slice(1)}</p>
          </div>
        ) : null}
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
