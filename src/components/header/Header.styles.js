import styled from 'styled-components';

export const Wrapper = styled.div`

    background: var(--darkGrey);
    padding: 0 1.1em;


`;

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 1.1em 0;
    margin: 0 auto;


`;

export const LogoImg = styled.img`

    width: 180px;

    @media (max-width: 500px){

        width: 110px
    }

`;

export const TMDBLogoImg = styled.img`

    width: 180px;

    @media (max-width: 500px){

        width: 110px
    }
`;