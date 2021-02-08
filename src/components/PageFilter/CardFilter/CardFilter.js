import React from 'react';
import { useHistory} from "react-router-dom"; 
import styled from 'styled-components'
import { goToSearchResultPage  } from "../../Router/goToPages"


const ParagraphFilter = styled.div `   
    width: 354px;
    height: 38px;
    margin-left: 480px;
    margin-top: 114px;  
    font-family: Nunito;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #393939;

`

const AvailableSkills = styled.div `  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;   
  margin-left: 87px;    
                     
                                  
`

const ContainerSkills = styled.div `  
  width: 218px;
  height: 58px;
  margin-right: 10px;
  margin-top: 32px;
  border: 1px solid black;
  border-radius: 8px;

     &:hover{
     color: #fff;
     background-color: #3798FF ;
     cursor: pointer;
     border: 1px solid #3798FF;
}
 

  &{
    p{
    
      height: 54px;  
     text-align: center;
      font-family: Nunito;
      font-size: 18px;
      line-height: 25px;
    }
  }

`

const Button = styled.button `  
    width: 232px;
    height: 58px;
    margin-left: 540px;
    margin-top: 98px;
    margin-bottom: 60px;
    background-color: #E5E5E5;
    border: none;
    border-radius: 5px;
    font-size: 14px;

          &:hover{
            color: #fff;
            background-color: #5798F9 ;
            cursor: pointer;
            border: 1px solid #5798F9;
        
          }

`

export function CardFilter() {

  const history = useHistory();
  return (
      <div>
        <section>
     <ParagraphFilter>Filtrar Candidatos por Habilidade</ParagraphFilter>
     <div>
      
     <AvailableSkills>
               <ContainerSkills>
                 <p>Marvel</p>                  
               </ContainerSkills>

                 <ContainerSkills>
                   <p>Figma</p>   
                 </ContainerSkills>

                     <ContainerSkills>
                       <p>Adobe Photoshop</p>   
                     </ContainerSkills>

                         <ContainerSkills>
                          <p>Javascript</p>   
                        </ContainerSkills>

                              <ContainerSkills>
                                <p>PHP</p>   
                              </ContainerSkills>

                                      <ContainerSkills>
                                        <p>Ruby on Rails</p>   
                                      </ContainerSkills>

                                  <ContainerSkills>
                                    <p>Maze</p>   
                                    </ContainerSkills>

                           <ContainerSkills>
                               <p>Python</p>   
                           </ContainerSkills>

                     <ContainerSkills>
                       <p>Python</p>   
                     </ContainerSkills>

               <ContainerSkills>
                 <p>Python</p>   
               </ContainerSkills>

     </AvailableSkills>
     <Button onClick={() => goToSearchResultPage(history)}>Procurar candidatos</Button>
     </div>
 </section>
 </div>
      
  )
}

