import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 980px) {
        flex-direction: column;
    }
`;

export const PostContainer = styled.div`
    display: flex;
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
        padding: 20px 60px;
    }
    @media (max-width: 980px) {
        margin-right: 0;
        margin-top: 30px;
    }
`;
