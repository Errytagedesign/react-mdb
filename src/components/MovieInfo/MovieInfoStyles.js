import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    //   If backdrop is true, then it should use the image base url generated from the api and use backdrop size to set it's witdh then use it as backdrop othwewise use black color ask backdrop
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 786px) {
    display: block;
    max-height: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  h3,
  p {
    margin-bottom: 5px;
  }

  .rating-directors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    font-weight: 800;
    margin: 0;
  }

  .actors {
    display: flex;
    flex-wrap: wrap;
  }

  .actName {
    position: relative;
    padding: 15px;
    margin: 2px;
    cursor: pointer;

    background: rgba(0, 0, 0, 0.8);
  }

  .tooltip {
    position: absolute;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    bottom: 100%;
    z-index: 1;
    display: none;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  .actName:hover .tooltip {
    display: block;
  }
  .actName:hover {
    background: red;
    display: block;
    box-shadow: 1px 1px 1px darkblue;
  }
`;
