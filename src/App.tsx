import React, { FC } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div>
      <AppHeader />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
