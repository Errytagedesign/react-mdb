import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;
export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    strong{
        color: yellow;
        font-style: none;
    }
    :first-child{
        margin-left: 0;
    }

    :last-child {
        margin-right: 0;
    }

    :hover{
        background: red;
        animation: hoveropacity 1s;

        @keyframes hoveropacity{

            from{
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }
  }

  @media screen and (max-width: 768px) {
      display: block;

      .column {
        margin: 20px 0;
      }
    }
  }
`;
