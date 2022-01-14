import React from "react";
import "./App.css";

import { AppContainer } from "./styles";
import { AddNewGroup } from "./components/AddNewGroup";
import { CardGroup } from "./components/CardGroup";
import { Card } from "./components/Card";

function App() {
  return (
    <AppContainer>
      <CardGroup text="To Do">
        <Card text="Create project with Web Components" />
      </CardGroup>
      <CardGroup text="Doing">
        <Card text="Learning TypeScript" />
      </CardGroup>
      <CardGroup text="Done">
        <Card text="Bootstrapped React project with TS" />
      </CardGroup>
      <AddNewGroup toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
