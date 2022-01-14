import React from "react";
import { CardGroupContainer, CardGroupTitle } from "../styles";
import { AddNewGroup } from "./AddNewGroup";

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
      <AddNewGroup
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        darkText
      />
    </CardGroupContainer>
  );
};
