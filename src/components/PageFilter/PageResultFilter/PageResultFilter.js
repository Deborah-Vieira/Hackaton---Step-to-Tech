import React from 'react';
import { useHistory} from "react-router-dom";

import {Header} from '../../PageHeader/Header'
import {CardEnterpriseFilter} from '../CardEnterpriseFilter/CardEnterpriseFilter'
import {Footer} from '../../Footer/Footer'


import styled from 'styled-components'

import { goBackPageBusiness   } from "../../Router/goToPages"


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

const Paragraph = styled.p `   
    width: 354px;
    height: 38px;
    margin-left: 88px;
    margin-top: 114px;    
    font-family: Nunito;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
`

const ContainerCandidates = styled.div ` 
    display: flex;   
    
 
   `
const NameCandidates = styled.span `
    margin-left: 88px;
    margin-top: 76px;
    margin-right: 10px;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
   
    `
const DescriptionCandidates = styled.span ` 
     height: 54px;  
     text-align: left;
     font-family: Nunito;
     font-size: 18px;
     line-height: 25px;
     margin-left: 88px;                
`

const Container = styled.div `
    display: flex;
    flex-direction: column;  
    margin-bottom: 40px;   
`

const Button = styled.button ` 
    width: 195px;
    height: 58px;
    margin-left: 107px;
    margin-top: 88px; 
    background-color: #E5E5E5;
    border: none;
    border-radius: 5px;
    font-size: 14px;

           &:hover{
          color: #fff;
          background-color: #5798F9;
          cursor: pointer;
          border: 1px solid #5798F9;

 }
`

export function PageResultFilter() {
    const history = useHistory();
  return (
      <>
       <Header/>
        <ButtonRoutes onClick={() => goBackPageBusiness(history)}>Voltar</ButtonRoutes>
         <CardEnterpriseFilter/>
      <Paragraph>Candidatos encontrados</Paragraph>

    <ContainerCandidates>
        <Container>
              <NameCandidates>Joana Silva</NameCandidates>
              <DescriptionCandidates>
                    <span>Developer Java Júnior</span> <br/>
                    <span> São Paulo, SP</span><br/>
                    <a href="https://github.com/Deborah-Vieira" >https://github.com/Deborah-Vieira</a> 
              </DescriptionCandidates>
        </Container>
              <Button> Enviar Convite</Button>       
    </ContainerCandidates>
    

    <ContainerCandidates>
             <Container>
             <NameCandidates>Joana Silva</NameCandidates>
             <DescriptionCandidates>
                    <span>Developer Java Júnior</span> <br/>
                    <span> São Paulo, SP</span><br/>
                    <a href="https://github.com/Deborah-Vieira" >https://github.com/Deborah-Vieira</a> 
            </DescriptionCandidates>
        </Container>
             <Button> Enviar Convite</Button>    
 </ContainerCandidates>
 
             <ContainerCandidates>
             <Container>
             <NameCandidates>Joana Silva</NameCandidates>
             <DescriptionCandidates>
                     <span>Developer Java Júnior</span> <br/>
                     <span> São Paulo, SP</span><br/>
                    <a href="https://github.com/Deborah-Vieira" >https://github.com/Deborah-Vieira</a> 
            </DescriptionCandidates>
        </Container>
             <Button> Enviar Convite</Button>
     
 </ContainerCandidates>
 
    <Footer/>
</>
  )

}

