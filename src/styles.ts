import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #459bf7;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

export const CardGroupContainer = styled.div`
  background-color: #d8d8d8;
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
  cursor: pointer;
  border-radius: 0.25rem;
  max-width: 300px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;
