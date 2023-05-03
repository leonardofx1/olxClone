import styled from "styled-components"


export const Li = styled.li `
    display: flex;
    height: 97px;
    width: 91px;
   
`

export const SpaanIcon = styled.span `
    display:flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    width: 58px;
    background-color:white;
    border-radius: 50%;
    color: #777777;
    font-size:2rem;
    font-weight: 200;
   
`

export const Ancora = styled.a `
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    & small {
        margin-top: 10px;
        color: white;
    }
`