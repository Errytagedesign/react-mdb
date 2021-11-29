import { Search } from "react-bootstrap-icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 1em;
`;
export const Content = styled.div`
  position: relative;

  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 1.7em;
  color: var(--white);

  input {
    width: 90%;
    background: transparent;
    position: absolute;
    padding: 1em;
    border: none;
    left: 0;
    top: 3px;
    border-radius: 1.7em;
    margin-left: 3em;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
    color: #fff;
    background: lightGrey;
  }

  @media screen and (max-width: 500px) {
    input {
      width: 80%;

      margin-left: 3em;
    }
  }
`;

export const Icons = styled(Search)`
  position: absolute;
  left: 20px;
  top: 20px;
  color: grey;
`;
