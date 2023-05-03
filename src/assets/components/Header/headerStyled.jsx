import styled from 'styled-components'

export const Head = styled.header`
        width:100%;
        height:90px;
        background-color:#ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:1rem;
`
export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

`

export const logo__Olx = styled.img`
    height:60px;
    width:60px;
    border-radius:50%;
    margin: 15px;
`
export const Link = styled.a`
    font-weight: 300;
    transition:all 200ms ease-in-out;
    color:#4a4a4a;
    font-family: sans-serif;
    margin: 0 15px 0 0;
    &:hover {
        color:#6d0ad6;
    }
`

export const Btn__header = styled.button`
    width: 135px;
    height: 40px;
    color:white;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0 0 2px rgba(0,0,0,0.6);
    &:hover {
        border:1px #6d0ad6 solid;
        & span{
         color: #6d0ad6;}
    }
    & span {
        color:#4a4a4a;
        font-size: 1.2rem;
    }
`

export const Btn__desapegar = styled(Btn__header)`
    color:white;
    background-color: orange;
    box-shadow: none;
    font-weight:500;
    &:hover {
        border:none;
    }
`

