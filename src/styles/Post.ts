import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme: { dark } }) => dark.tertiary};
    height: 100%;
    flex-direction: row-reverse;
    @media (max-width: 980px) {
        flex-direction: column;
    }
`;

export const PostContainer = styled.div`
    display: flex;
    color: #a2a2a3;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30vw;
    header {
        display: flex;
        width: calc(100vw - 30vw);
        align-items: center;
        justify-content: space-between;
        padding: 40px;
        button {
            background: none;
            border: none;
            cursor: pointer;
            outline: none;
        }
    }
    div {
        padding: 20px 30px;
        text-align: justify;

        div {
            small + h1 {
                font-size: 48px;
            }
            h1 + h4 {
                font-size: 24px;
            }
        }
        div + div {
            line-height: 32px;
        }
    }
    @media (max-width: 980px) {
        margin-right: 0;
        margin-top: 30px;
        header {
            width: 100%;
        }
        div {
            padding: 20px;
            text-align: left;
        }
    }
`;
