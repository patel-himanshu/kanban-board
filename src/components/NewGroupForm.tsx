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
        onChange={(e) => setText(e.target.value)}
      />
      <NewGroupButton onClick={() => onAdd(text)}>Create</NewGroupButton>
    </NewGroupFormContainer>
  );
};
