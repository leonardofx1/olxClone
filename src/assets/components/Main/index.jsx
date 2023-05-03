import React from 'react'
import {BsSearch } from 'react-icons/bs';

import * as C from './mainStyled'

const Main = () => {    

    return (
           <C.Main>
            <C.Section>
               <C.Form><input type='text'  />
               <button><BsSearch/></button>
               </C.Form>
               <p>hahahaha</p>
            </C.Section>
           </C.Main>
    )


}

export default Main