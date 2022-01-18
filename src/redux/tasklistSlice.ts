import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { v4 as uuid } from "uuid";
import { findItemIndexById } from "../utils/findItemIndexById";

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
    // action.payload = "title" (title of list)
    add_list: (state, action: PayloadAction<string>) => {
      // (1) Updating the state by mutation using Immer
      state.lists.push({ id: uuid(), title: action.payload, tasks: [] });

      // (2) Updating the state immutably using spread operator
      // return {
      //   ...state,
      //   lists: [
      //     ...state.lists,
      //     {
      //       id: uuid(),
      //       title: action.payload,
      //       tasks: [],
      //     },
      //   ],
      // };
    },

    // action.payload = {"id" (ID of the task), "text" (content of task)}
    add_task: (state, action: PayloadAction<Task>) => {
      const targetListIndex = findItemIndexById(state.lists, action.payload.id);
      state.lists[targetListIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });
    },

    // rename_task: (state, action: PayloadAction<Task>) =>
    // delete_task: (state, action: PayloadAction<  >) =>
  },
});

export const { add_list, add_task } = tasklistSlice.actions;
export const selectTasklist = (state: RootState) => state.tasklist.lists;

export default tasklistSlice.reducer;
