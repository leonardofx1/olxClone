import React from 'react'
import {BsSearch } from 'react-icons/bs';
import { TfiBasketball}from "react-icons/tfi";



import * as C from './mainStyled'
import Links from './subComponents/LinksMain';

const Main = () => {    

    return (
           <C.Main>
            <C.Section>
               <C.Form>
                <input type='text'   placeholder='Buscar'/>
               <button><BsSearch/></button>
               </C.Form>
                <C.Nav>
                    <ul>
                        <Links icon={<TfiBasketball/>} desc={'Esportes e Lazer'} />
                    </ul>
                    </C.Nav>
            </C.Section>
           </C.Main>
    )


}

export default Main