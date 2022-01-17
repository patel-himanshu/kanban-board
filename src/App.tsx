import React from "react";
import "./App.css";

import { useAppSelector } from "./redux/hooks";

import { AppContainer } from "./styles";
import { AddNewGroup } from "./components/AddNewGroup";
import { CardGroup } from "./components/CardGroup";
import { Card } from "./components/Card";

function App() {
  const tasklists = useAppSelector((state) => state.tasklist.lists);

  return (
    <AppContainer>
      {tasklists.map((tasklist) => (
        <CardGroup key={tasklist.id} text={tasklist.title}>
          {tasklist.tasks.map((task) => (
            <Card key={task.id} text={task.text} />
          ))}
        </CardGroup>
      ))}
      <AddNewGroup toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
