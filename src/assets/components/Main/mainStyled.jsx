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
    height: 60px;
    overflow-y: hidden;
    border-radius: 5px;
    & input {
        width: 95%;
        height: 60px;
        padding: 1rem,;
        &::placeholder{
            font-size: 1.5em;
         
        }
    }
    & button {
        display: inline-block;
        width: 5%;
        height: 100%;
        font-size: 1.3rem;
        color: #6d0ad6;
        box-shadow: 0 0 2px rgba(0,0,0,0.6);
    }

` 
export const Nav =  styled.nav `
    width: 70%;
    height: auto;  
    & ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    } 
`