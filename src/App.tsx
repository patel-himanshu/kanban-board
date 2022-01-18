import React from "react";
import "./App.css";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

import { AppContainer } from "./styles";
import { AddNewGroup } from "./components/AddNewGroup";
import { CardGroup } from "./components/CardGroup";
import { add_list, selectTasklist } from "./redux/tasklistSlice";

function App() {
  const tasklists = useAppSelector(selectTasklist);
  const dispatch = useAppDispatch();

  return (
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
    </AppContainer>
  );
}

export default App;
