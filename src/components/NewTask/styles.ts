import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 1rem;
  padding: 0.75rem;
  margin: 1rem 0;

  .image {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 1.25rem;
    flex: 1;
  }
`;
