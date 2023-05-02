import React from "react";

import  * as C from './headerStyled';

import logo from'../../img/logo.png'
const Header = () => {
console.log(C)
    return (
        <C.Head> 
            <C.logo__Olx src={logo}/>
            <C.Wrapper>
                <C.Link>Plano Profissional</C.Link>
                <C.Link>Meus Anúncios</C.Link>
                <C.Link>Chat</C.Link>
                <C.Link>Notificações</C.Link>
                <C.Btn__header>
                    <span>leo</span>
                </C.Btn__header>
                <C.Btn__desapegar>Desapegar</C.Btn__desapegar>
            </C.Wrapper>
        </C.Head>
    )
}

export default Header