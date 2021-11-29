import { ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled(ButtonGroup)`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 0 1.5em;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
