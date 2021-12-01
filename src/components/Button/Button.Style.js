import styled from "styled-components";

export const Wrapper = styled.button`
display: block;
  width: 40%;
  min-width: 200px;
  margin: 15px auto;
  padding: 1.5em;
  background: var(--darkGrey);
  border-radius: 25px;
  font-size: var(--fontBig)
  transition: all 0.3s;
  cursor: pointer;
  border: none;

  :hover{
    opacity: 0.8;
  }

  
    color: var(--white);

`;
