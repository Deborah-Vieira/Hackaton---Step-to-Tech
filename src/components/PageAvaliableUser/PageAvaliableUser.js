import React from 'react';
import styled from 'styled-components'
import {Header} from '../PageHeader/Header'
import {Footer} from '../Footer/Footer'
import Avatar from '../images/avatar.svg'
import Star from '../images/stars/star0.svg'
import { useHistory} from "react-router-dom";


import { goBackPageBusiness   } from "../Router/goToPages";

const Container = styled.div ` 
    width: 100%;
    margin-top: 75px;
    display: flex;   
  `

 const NameAvatar = styled.div`
    display: flex;
    flex-direction: column;
    width: 263px;
    height: 51px;
    margin-left: 16px;
    top: 208px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    color: #393939;
    `
           
 const LogoAvatar = styled.img `
    align-items: center;
    margin-left: 87px;
    margin-bottom: 28px;
    width: 46.65px;
    height: 48px;
    top: 208px;  
 `
 

const Line = styled.div `  
    width: 1125px;
    margin-top: 25px;
    margin-left: 88px;
    background: #C4C4C4;
    border: 1px solid #000000;
`

const ParagraphExperience = styled.h4 ` 
    width: 354px;
    height: 38px;
    margin-left: 475px;
    margin-top: 114px;    
    font-family: 'Nunito', sans-serif;   
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #393939;

`
const BoxNameBussines = styled.input ` 
    width: 370px;
    height: 40px;
    margin-left: 470px;
    margin-top: 36px;
    padding-left: 10px;

        &::placeholder{   
            font-size: 16px;

}

`
const BoxDescription = styled.input `  
    width: 370px;
    height: 195px;
    margin-left: 470px;
    margin-top: 38px;
    padding-left: 10px;

        &::placeholder{   

        font-size: 16px;
    
}`


const ImgStar = styled.img `
    width: 160px;
    height: 32px;
    margin-left: 702px;
    margin-top: 15px;
`
const ContainerButtom = styled.div ` 
    display: flex;
    flex-direction: row;
    margin-left: 470px;    
    margin-bottom: 20px;
`
const Button = styled.button `
    width: 144px;
    height: 58px;
    margin-right: 42px;
    margin-top: 32px;
    background-color: #E5E5E5;
    border: none;
    border-radius: 5px;
    font-size: 14px;

    &:hover{
      color: #fff;
      background-color:   #5798F9; ;
      cursor: pointer;
      border: 1px solid   #5798F9;  
    }
`
const ButtonSend = styled(Button) ` 
    margin-left: 0;
    width: 203px;
    height: 58px;   

`

const ButtonRoutes = styled(ButtonSend) `
    width: 120px;
    height: 40px;
    margin-left: 560px;    
    margin-bottom: 10px;    

`

export function PageAvaliableUser() {

    const history = useHistory();

  return (
       <>
    <Header/>   
    <ButtonRoutes onClick={() => goBackPageBusiness(history)}>Voltar</ButtonRoutes> 
         <Container>
            <LogoAvatar src = {Avatar} alt ="Photo Enterprise"/> 
             <NameAvatar>                 
                Joana Silva              
             </NameAvatar>                    
        </Container>
            <Line></Line>

    <div>
        <ParagraphExperience>Como Foi sua experiência</ParagraphExperience>        
        <BoxNameBussines type="text"  placeholder = "Nome da empresa"/>
        <BoxDescription type="text"  placeholder = "Conta pra gente, é anônimo ;)"/>
    </div>
 
    <div>
          <ImgStar src={Star} alt = "Ranking Bussiness"/>
    </div>

    <ContainerButtom>
        <Button>Voltar</Button>
        <ButtonSend>Enviar Feedback</ButtonSend>
    </ContainerButtom>

       
    
    <Footer/>
</>
  )
}

