import React from 'react';
import {Header} from '../PageHeader/Header'
import {CardEnterprise} from '../PageProfileEnterprise/CardEnterprise/CardEnterprise'
import {CardVacancies} from '../PageProfileEnterprise/CardVacancies/CardVacancies'
import { goToFeedbackPage, goToSearchPage, goToSearchResultPage } from "../Router/goToPages";

import styled from 'styled-components'
import { useHistory} from "react-router-dom";


const ContainerButton = styled.div `
  display: flex;
  margin-left: 380px;


`
const ButtonRoutes = styled.button ` 
    width: 163px;
    height: 40px;
    background-color: #E5E5E5;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    margin-top: 20px;
    margin-right: 10px;
   

    &:hover{
      color: #fff;
      background-color:   #5798F9; ;
      cursor: pointer;
      border: 1px solid   #5798F9;  
    }

`

    
export function ProfileEnterprise() {
  const history = useHistory();

  return (
      <div>
          <Header/>
          <ContainerButton>
             <ButtonRoutes onClick={() => goToFeedbackPage(history)}>Feedback</ButtonRoutes>
             <ButtonRoutes onClick={() => goToSearchPage(history)}> Buscar Candidatos</ButtonRoutes>
             <ButtonRoutes onClick={() => goToSearchResultPage(history)}>Resultado por Skills</ButtonRoutes>
          </ContainerButton>
          <CardEnterprise/>
          
          <CardVacancies/>
        
        

      </div>
  )
}

