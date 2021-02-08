import React from 'react';
import styled from 'styled-components'
import {Footer} from '../../Footer/Footer'


const Vacancies = styled.div `   
    margin-left: 127px;
    margin-top: 86px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    color: #393939;


`

const LineVancancies = styled.div `  
    width: 261px;
    margin-top: 15px;
    margin-left: 127px;
    background: #C4C4C4;
    border: 1px solid #000000;

`

const AvailableVacancies = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 127px;
    margin-right: 170px;
    margin-bottom: 60px;


    &{
        p{
            width: 280px;
            height: 10px;          
            margin-top: 53px;        
            font-family: "Nunito", sans-serif;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #393939;

        }

        span{
          
            width: 378px;
            height: 54px;
            margin-bottom: 40px;
            top: 832px;               
            font-family: "Nunito", sans-serif;
            font-size: 18px;
            line-height: 25px;
            color: #393939;
        }
    }

`


export function CardVacancies() {
    return (
        <div>
             <section>
                <Vacancies>Vagas</Vacancies>
              <div>
                 <LineVancancies></LineVancancies>  
        <AvailableVacancies>
                  <div>
                       <p>Developer Javascript Junior</p>
                       <span>Contratação PJ(MEI)</span> 
                  </div>
                  <div>
                    <p>Developer Backend Junior</p>
                    <span>Contratação Imediata</span> 
                </div>  
                  <div>
                       <p>Developer UX/UI Junior</p>
                       <span>Contratação: Efetivo – CLT</span> 
                  </div>               
             
              </AvailableVacancies>  
  
        </div>
  </section>
          <Footer/>
        </div>
    )
  }
  



























