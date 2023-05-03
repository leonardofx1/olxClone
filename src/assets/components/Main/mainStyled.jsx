import styled from "styled-components";

export const Main = styled.main `
    width: 100%;
    height: 100%;
`;

export const Section = styled.section `
    width: 100%;
    min-height: 249px;
    background-color: #6d0ad6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`

export const Form = styled.form `
    width: 80%;
    background-color: white;
    height: auto;
    & input {
        padding: 1rem;
        width: 90%;
        height: 100%;
    }
    & button {
        display: inline-block;
        width: 10%;
        padding:.9em;
        font-size: 1rem;
    }

` 