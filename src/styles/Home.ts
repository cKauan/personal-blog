import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme: { dark } }) => dark.tertiary};
    flex-direction: row-reverse;
    @media (max-width: 980px) {
        flex-direction: column;
    }
`;

export const PostsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-right: 30vw;
    a {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 50%;
        padding: 20px 0;
        border-bottom: 1px solid #0000005f;
        img {
            width: 110px;
            height: 110px;
            border-radius: 50vh;
        }
        div {
            display: flex;
            flex: 1;
            color: #bbb;
            flex-direction: column;
            max-width: 70%;
            padding: 0 20px;
            justify-content: center;
            align-items: flex-start;
            h2 {
                font-size: 26px;
                line-height: 32px;
            }
            small {
                font-size: 16px;
                opacity: 0.8;
            }
        }
    }
    @media (max-width: 980px) {
        margin-right: 0;
        margin-top: 30px;
    }
    @media (max-width: 760px) {
        & a {
            margin-bottom: 10px;
            img {
                display: none;
            }
            div {
                max-width: 98%;
            }
        }
    }
`;
