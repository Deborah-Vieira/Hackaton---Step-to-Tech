import React from 'react';

import styled from 'styled-components'

const Container = styled.div `
    width: 100%;
    height: 90px;
    padding: 5px 0px 17px 0px;
    background: linear-gradient(180deg, #3798FF -61.72%, #7B61FF 100%);
     `

 const Address = styled.p `    
     color: #fff;
     text-align: center;
     font-family: "Nunito", sans-serif;
     font-size: 18px;   
     margin-bottom: 5px;
 `    

const Phones = styled.span `    
     color: #fff;
     text-align: center;
     font-family: "Nunito", sans-serif;
     font-size: 18px;   
     margin-bottom: 5px;
     margin-left: 530px;
`    

export function Footer() {
  return (
      <Container>
         <Address> Step To Tech, SBS Qd 02 nº 12, Sala 305 Sobreloja - Edificio Businnes Prime <br/>
          Asa Sul - Brasilia - DF © 2005-2020 </Address>
          <Phones>(61) 3254-5478 / (11) 5874-8952</Phones>
      </Container>
  )
}

