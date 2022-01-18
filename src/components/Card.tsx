import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { delete_task } from "../redux/tasklistSlice";
import { CardContainer } from "../styles";

interface CardProps {
  tasklistIndex: number;
  taskId: string;
  text: string;
}

export const Card = ({ tasklistIndex, taskId, text }: CardProps) => {
  const dispatch = useAppDispatch();

  return (
    <CardContainer>
      {text}
      <span className="task-icons">
        <i className="bi bi-pencil-fill"></i>
        <i
          className="bi bi-trash-fill"
          onClick={() => dispatch(delete_task({ tasklistIndex, taskId }))}
        ></i>
      </span>
    </CardContainer>
  );
};
