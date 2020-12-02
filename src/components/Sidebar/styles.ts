import styled from 'styled-components';

export const Presentation = styled.div`
    position: fixed;
    background-color: ${({ theme: { dark } }) => dark.secondary};
    width: 30vw;
    height: 100vh;
    color: #ccc;
    padding-top: 60px;
    padding-bottom: 20px;
    border-left: 1px solid #0000005f;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        img {
            width: 130px;
            height: 130px;
            border-radius: 50vh;
            border: 3px solid #eee;
        }
        h3 {
            font-size: 32px;
            margin-top: 10px;
        }
        p {
            max-width: 70%;
            text-align: center;
            opacity: 0.7;
        }
        & div {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            transition: transform 0.2s;
            border-bottom: 1px solid #0000005f;
            padding-bottom: 20px;

            svg:hover {
                transform: translateY(-1px);
            }
        }
    }
    div + div {
        display: flex;
        padding: 20px;
        gap: 10px;
        button {
            background: #0000001f;
            border: #0000003f 1px solid;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            margin: 20px 0;
        }
        a {
            color: #ccc;
            position: relative;
            font-size: 32px;
            padding: 5px;
            font-weight: 300;
            &::before {
                position: absolute;
                width: 0;
                content: '';
                height: 3px;
                background-color: #fff;
                bottom: 0;
                left: 0;
                transition: 0.2s;
            }
            &:hover::before {
                position: absolute;
                width: 100%;
                content: '';
                height: 3px;
                background-color: #aaa;
                bottom: 0;
                left: 0;
            }
        }
    }
    @media (max-width: 980px) {
        background-color: #27282b;
        position: static;
        width: 100%;
        height: 100%;
        div {
            p {
                width: 70%;
            }
        }
    }
`;
