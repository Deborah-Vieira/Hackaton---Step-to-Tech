import React from 'react';
import styled from 'styled-components'
import Logo from '../images/logoBusiness.svg'

const Container = styled.div `     
	width: 100%;
    height: 50px;
	padding: 20px 0;    
    background: linear-gradient(180deg, #3798FF -61.72%, #7B61FF 100%);  
`

const LogoHeader = styled.img `
    width: 120px;
    padding: 0 10px;
    margin-left: 548px;
    margin-top: 5px;
`


export function Header() {
  return (
      <>
          <Container>         
           <LogoHeader src = {Logo} />
          </Container>
          
      </>
  )
}
