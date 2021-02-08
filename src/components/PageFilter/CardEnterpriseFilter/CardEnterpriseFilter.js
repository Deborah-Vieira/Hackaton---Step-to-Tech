import React from 'react';
import LogoBussines from '../../images/logo.svg'

import styled from 'styled-components'


const Container = styled.div ` 
    width: 100%;
    margin-top: 75px;
    display: flex;   

            `

 const ContainerLogo = styled.div ` 
    display: flex;
    flex-direction: column;
    font-family: Nunito;
    font-weight: bold;
    margin-left: 16px;
    font-size: 36px;
    line-height: 49px; 
   

    `
           
 const LogoImg = styled.img `
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

export function CardEnterpriseFilter() {
  return (
      <>
         <Container>    
             <LogoImg src = {LogoBussines} alt ="Photo Enterprise"/>
              <ContainerLogo>                 
                Tech Turbo               
              </ContainerLogo>                    
    </Container>
            <Line></Line>
      </>
  )
}

