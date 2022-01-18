import styled from "styled-components";

interface AddItemButtonProps {
  darkText?: boolean;
}

export const Header = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #2d4154;
  background-color: #145b92;
  color: #edf7b5;
  color: #ffec89;
  padding: 0.75rem 0.5rem;
  font-family: "Geogia", Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #e4cb54;
  background-color: #f7dd72;
  background-color: #252525;
  background-color: #2e3948;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

export const CardGroupContainer = styled.div`
  background-color: #e5e5e5;
  box-shadow: #888 1px 0 5px;
  border-radius: 0.5rem;
  min-height: 40px;
  width: 300px;
  padding: 0.5rem 0.5rem;
  margin-right: 1rem;
  flex-grow: 0;
`;

export const CardGroupTitle = styled.div`
  padding: 0.5rem;
  font-style: italic;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: #888 1px 0 2px;
  font-size: small;
  cursor: pointer;
  border-radius: 0.25rem;
  max-width: 300px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #c0c0c0;
  border-radius: 0.25rem;
  border: 1px outset #c0c0c0;
  cursor: pointer;
  color: ${(props) => (props.darkText ? "#000" : "#fff")};
  font-style: italic;
  font-weight: 600;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  padding: 0.5rem 1rem;
  transition: background-color 75s ease-in;
  &:hover {
    background-color: #b0b0b0;
    border: 1px outset #fff;
  }
`;

export const NewGroupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewGroupButton = styled.button`
  background-color: #25b000;
  border-radius: 0.25rem;
  border: 1px solid #135c00;
  cursor: pointer;
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: background-color 75s ease-in;
  &:hover {
    background-color: #38ba14;
  }
`;

export const NewGroupInput = styled.input`
  border-radius: 0.25rem;
  border: none;
  box-shadow: #08e424 0px 1px 0px;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;
