import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
      display: flex;
      background-color: #20212c;
      padding: 0.75rem;
      border-radius: 0.75rem;
      margin: 0.5rem 0;
      align-items: center;

      input {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }

      label {
        color: #ccc;
        text-decoration: ${done ? "line-through" : "initial"}
      }
    `
);

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
  }
`;
