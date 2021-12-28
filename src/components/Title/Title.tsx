import React, { FC } from "react";

interface TitleProps {
  children: string;
}

const Title: FC<TitleProps> = (props) => {
  return <h1 className="title">{props.children.toUpperCase()}</h1>;
};

export default Title;
