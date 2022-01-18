import React from "react";
import { CardContainer } from "../styles";

interface CardProps {
  tasklistIndex: number;
  taskId: string;
  text: string;
}

export const Card = ({ tasklistIndex, taskId, text }: CardProps) => {
  return (
    <CardContainer>
      {text}
      <span className="task-icons">
        <i className="bi bi-pencil-fill"></i>
        <i className="bi bi-trash-fill"></i>
      </span>
    </CardContainer>
  );
};
