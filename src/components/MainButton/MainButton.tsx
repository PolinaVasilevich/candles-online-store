import React, { FC } from "react";

interface MainProps {
  title: string;
  borderColor?: string;
}

const MainButton: FC<MainProps> = (props) => {
  return (
    <div className="main-button">
      <div className="left-border"></div>
      <button>{props.title}</button>
      <div className="right-border"></div>
    </div>
  );
};

export default MainButton;
