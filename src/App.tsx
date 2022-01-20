import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

import { AppContainer, Header } from "./styles";
import { AddNewGroup } from "./components/AddNewGroup";
import { CardGroup } from "./components/CardGroup";
import { add_list, selectTasklist } from "./redux/tasklistSlice";

function App() {
  const tasklists = useAppSelector(selectTasklist);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header>
        <i className="bi bi-kanban-fill"></i> KANBAN BOARD
      </Header>
      <AppContainer>
        {tasklists.map((tasklist, idx) => (
          <CardGroup
            key={tasklist.id}
            listId={tasklist.id}
            title={tasklist.title}
            index={idx}
          ></CardGroup>
        ))}
        <AddNewGroup
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(add_list(text))}
        />
        <div className="footer">
          Made by Himanshu Patel (
          <a
            href="https://github.com/patel-himanshu/kanban-board/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source Code
          </a>
          )
        </div>
      </AppContainer>
    </>
  );
}

export default App;
