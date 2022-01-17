import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { v4 as uuid } from "uuid";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  title: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const initialState: AppState = {
  lists: [
    {
      id: uuid(),
      title: "To Do",
      tasks: [{ id: uuid(), text: "Create project with Web Components" }],
    },
    {
      id: uuid(),
      title: "Doing",
      tasks: [{ id: uuid(), text: "Learning TypeScript" }],
    },
    {
      id: uuid(),
      title: "Done",
      tasks: [{ id: uuid(), text: "Bootstrapped React project with TS" }],
    },
  ],
};

export const tasklistSlice = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    // add_list: (state, action: PayloadAction<string>) => {
    //   return {
    //     ...state,
    //     lists: [
    //       ...state.lists,
    //       {
    //         id: uuid(),
    //         title: action.payload,
    //         tasks: [],
    //       },
    //     ],
    //   };
    // },
    // add_task: (state, action: PayloadAction<  >) =>
    // rename_task: (state, action: PayloadAction<Task>) =>
    // delete_task: (state, action: PayloadAction<  >) =>
  },
});

// export const { add_list } = tasklistSlice.actions;
export const selectTasklist = (state: RootState) => state.tasklist.lists;

export default tasklistSlice.reducer;
