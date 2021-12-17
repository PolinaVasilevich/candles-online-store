import React, { FC } from "react";

const Container: FC = (props) => {
  return <div className="grid-container">{props.children}</div>;
};

export default Container;
