import React, { useState } from "react";
import { AddItemButton } from "../styles";
import { NewGroupForm } from "./NewGroupForm";

interface AddNewGroupProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  darkText?: boolean;
}

export const AddNewGroup = (props: AddNewGroupProps) => {
  const { onAdd, toggleButtonText, darkText } = props;
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewGroupForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton darkText={darkText} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
