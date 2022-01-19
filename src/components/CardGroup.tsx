import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { CardGroupContainer, CardGroupTitle } from "../styles";
import { Card } from "./Card";
import { AddNewGroup } from "./AddNewGroup";
import { add_task, delete_list, selectTasklist } from "../redux/tasklistSlice";

interface CardGroupProps {
  listId: string;
  title: string;
  index: number;
}

export const CardGroup = ({
  listId,
  title,
  index,
}: React.PropsWithChildren<CardGroupProps>) => {
  const tasklists = useAppSelector(selectTasklist);
  const dispatch = useAppDispatch();

  return (
    <CardGroupContainer>
      <CardGroupTitle>
        {/* <i className="bi bi-filter-left"></i> */}
        <i className="bi bi-justify"></i>
        {title}
        <i
          className="bi bi-x-circle-fill card-delete"
          onClick={() => dispatch(delete_list(index))}
        ></i>
      </CardGroupTitle>
      {tasklists[index].tasks.map((task) => (
        <Card
          key={task.id}
          tasklistIndex={index}
          taskId={task.id}
          text={task.text}
        />
      ))}
      <AddNewGroup
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(add_task({ id: listId, text }))}
        darkText
      />
    </CardGroupContainer>
  );
};
