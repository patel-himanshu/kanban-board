import React, { useState } from "react";
import {
  NewGroupFormContainer,
  NewGroupButton,
  NewGroupInput,
} from "../styles";

interface NewGroupFormProps {
  onAdd(text: string): void;
}

export const NewGroupForm = (props: NewGroupFormProps) => {
  const [text, setText] = useState("");
  const { onAdd } = props;

  return (
    <NewGroupFormContainer>
      <NewGroupInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewGroupButton onClick={() => onAdd(text)}>Create</NewGroupButton>
    </NewGroupFormContainer>
  );
};
