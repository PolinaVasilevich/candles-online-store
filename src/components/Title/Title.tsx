import React, { FC } from "react";

interface TitleProps {
  children: string;
}

const Title: FC<TitleProps> = (props) => {
  return (
    <h1 style={{ marginBottom: "2rem" }}>{props.children.toUpperCase()}</h1>
  );
};

export default Title;
