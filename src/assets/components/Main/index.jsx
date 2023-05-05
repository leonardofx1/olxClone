import React from 'react'

import {BsSearch } from 'react-icons/bs';
import { TfiBasketball, TfiCar}from "react-icons/tfi";
import {BsHouseDoor, BsPhone, BsLightbulb, BsMusicNoteBeamed} from 'react-icons/bs';
import {MdOutlineBadge} from 'react-icons/md';
import {AiOutlineFormatPainter} from 'react-icons/ai'



import * as C from './mainStyled'
import Links from '../subComponents/LinksMain/LinksMain';
import  Anuncios  from '../Anuncios';

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
                        <Links icon={<TfiBasketball/>} desc='Esportes e Lazer' />
                        <Links icon={<BsHouseDoor/>} desc='Imóveis' />
                        <Links icon={<TfiCar/>} desc='Autos Peças' />
                        <Links icon={<BsPhone/>} desc='Eletrônicos e Celulares' />
                        <Links icon={<MdOutlineBadge/>} desc='Vagas de Emprego' />
                        <Links icon={<BsLightbulb />} desc='Para sua Casa'/>
                        <Links icon={<BsMusicNoteBeamed />} desc='Músicas e Hobbies' />
                        <Links icon={<AiOutlineFormatPainter />} desc='serviços' />
                    </ul>
                    </C.Nav>
            </C.Section>
            <Anuncios />
           </C.Main>
    )


}

export default Main