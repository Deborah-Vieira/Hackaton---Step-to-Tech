import React from 'react';
import { useHistory} from "react-router-dom";

import styled from 'styled-components'

import {Header} from '../PageHeader/Header'
import {CardEnterpriseFilter} from './CardEnterpriseFilter/CardEnterpriseFilter'
import {CardFilter} from '../PageFilter/CardFilter/CardFilter'
import {Footer} from '../Footer/Footer'


import { goBackPageBusiness   } from "../Router/goToPages";


const ButtonRoutes = styled.button ` 
    width: 163px;
    height: 40px;
    background-color: #E5E5E5;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 560px;
   

    &:hover{
      color: #fff;
      background-color:   #5798F9; ;
      cursor: pointer;
      border: 1px solid   #5798F9;  
    }

`


export function PageFilter() {

  const history = useHistory();
  return (
      <div>

        <Header/>
        <ButtonRoutes onClick={() => goBackPageBusiness(history)}>Voltar</ButtonRoutes>
        <CardEnterpriseFilter/>
       <CardFilter/>
       <Footer/>
       </div>
  )
}

