import React from "react";
import "./App.css";

import { AppContainer } from "./styles";
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
    </AppContainer>
  );
}

export default App;
