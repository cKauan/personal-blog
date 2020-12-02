import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme: { dark } }) => dark.tertiary};
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
    max-width: 70vw;
    padding-bottom: 40px;
    header {
        display: flex;
        width: 100%;
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

    @media (max-width: 980px) {
        max-width: 90vw;
        margin: 0 auto;
        header {
            padding: 40px 20px;
        }
    }
`;


export const PostItem = styled.div`
    flex-direction: column;
    text-align: left;
    max-width: 90%;
    margin: 0 auto;
    div:first-child {
        margin-bottom: 60px;
    }

    @media (max-width: 980px) {
        max-width: 100%;
    }
`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 32px;
    gap: 20px;
    pre,
    code {
        background-color: ${({ theme: { dark } }) => dark.secondary};
        font-family: Consolas, monospace;
        font-size: 18px;
        border-radius: 5px;
    }
    pre {
        white-space: pre-wrap;
        overflow-x: auto;
        padding: 10px;
    }
    code {
        padding: 3px;
    }
`;
