import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: var(--darkGrey);
  color: var(--white);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  cursor: pointer;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0 0 0;
  }

  .overlay {
    display: none;
    position: absolute;
    background: var(--darkGrey);
    border-radius: 20px;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: animateCharacter 0.5s ease;
    @keyframes animateCharacter {
      from {
        top: -100%;
        opacity: 0;
      }

      to {
        top: 0;
        opacity: 0.7;
      }
    }

    /* padding-top: 10em; */
  }

  :hover .overlay {
    display: flex;
    flex-direction: column;
    opacity: 0.7;
    justify-content: center;
    align-items: center;
  }
`;
export const Image = styled.img`
  display: block;
  opacity: 1;
  transition: 0.5s ease;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
`;
