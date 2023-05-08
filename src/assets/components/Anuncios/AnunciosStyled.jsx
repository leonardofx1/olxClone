import styled from 'styled-components'

export const Anuncios = styled.div`
    width: 90%;
    height:auto;
    padding: .5rem;
    margin: 1rem auto;
  
`

export const ContainerTitulo = styled.div `
    width: 100%;
    height: auto;
    display: block;
    margin: 0 0 1rem 0;
    & h2 {
        color:#4b5160;
        font-size:1.2rem;
        font-family: sans-serif;

    }
`

export const Section = styled.section`
    width:100%;
    height: auto;
    padding:1rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
