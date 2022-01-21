import React, { useState } from "react";
import {
  NewGroupFormContainer,
  NewGroupButton,
  NewGroupInput,
} from "../styles";
import { useFocus } from "../utils/useFocus";

interface NewGroupFormProps {
  onAdd(text: string): void;
}

export const NewGroupForm = ({ onAdd }: NewGroupFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <NewGroupFormContainer>
      <NewGroupInput
        // autoFocus
        ref={inputRef}
        value={text}
        placeholder="Enter task description"
        onChange={(e) => setText(e.target.value)}
      />
      <span className="create-new-item">
        <NewGroupButton disabled={!text} onClick={() => onAdd(text)}>
          Create
        </NewGroupButton>
        {/* <i className="bi bi-x-lg"></i> */}
      </span>
    </NewGroupFormContainer>
  );
};
