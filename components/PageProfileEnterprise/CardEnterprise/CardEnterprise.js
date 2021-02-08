import React from 'react';
import styled from 'styled-components'
import LogoBusiness from '../../images/logo.svg'
import RankingBussines from '../../images/stars/star4.svg'

const Container = styled.div ` 
    margin-top: 75px;
    display: flex;   
 `

 const NameEnterprise = styled.div ` 
    display: flex;
    flex-direction: column;
    margin-left: 127px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 48px;
    line-height: 65px;   
    color: #393939; 

    &{
        span{               
            font-family: 'Nunito', sans-serif;
            font-size: 21px;    
            line-height: 29px;
            margin-left: 5px;
            }
       }    
    `
           
 const LogoImg = styled.img `
    align-items: center;
    margin-left: 19px;
    margin-bottom: 28px;   
 `
 
const Ranking = styled.div ` 
    width: 160px;
    height: 32px;
    margin-left: 482px;
      
    & {
        span{
            width: 180px;
            height: 44px;            
            font-family: 'Nunito', sans-serif;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #393939; 

        }
    }       
`

const Line = styled.div `  
    width: 1125px;
    margin-top: 76px;
    margin-left: 127px;
    background: #C4C4C4;
    border: 1px solid #000000;
`

const About = styled.h4 ` 
    width: 343px;
    height: 38px;
    margin-left: 127px;
    top: 398px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #393939;      
 `

const DescriptionAbout = styled.p `  
    height: 45px;
    margin-left: 127px;
    top: 448px;
    font-family: 'Nunito', sans-serif;
    font-size: 21px;
    line-height: 29px;
    color: #393939;
    
`

export function CardEnterprise() {
  return (
        <>
        <Container>
                 <NameEnterprise> 
                      Tech Turbo 
                  <span>São Paulo, SP</span>
                 </NameEnterprise>
             <LogoImg src = {LogoBusiness} alt ="Photo Enterprise"/>          

             <Ranking>
                   <img src = {RankingBussines} alt = "Company ranking"/> 
                   <span>130 feedbacks enviados</span>
             </Ranking>
     </Container>
     <Line></Line>

   <section>
       <About>Quem somos</About>
       <DescriptionAbout>A gente ama contratar todos os <br/> juniores do mundo!!!</DescriptionAbout>
   </section>

</>
  )
}


