import React from "react";
import { CardGroupContainer, CardGroupTitle } from "../styles";

interface CardGroupProps {
  text: string;
}

export const CardGroup = ({
  text,
  children,
}: React.PropsWithChildren<CardGroupProps>) => {
  return (
    <CardGroupContainer>
      <CardGroupTitle>{text}</CardGroupTitle>
      {children}
    </CardGroupContainer>
  );
};
