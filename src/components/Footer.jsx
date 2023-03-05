import styled from 'styled-components'
import {CardState} from '../enum.js'


export default function Footer({quizzState}) {
  const respondidas = quizzState.reduce((accumulator, item) => {
    if(item.cardState === CardState.ENCERRADO) {
      return (accumulator + 1)
    } else {
      return accumulator
    }
  }, 0)

 return (
  <ContainerFooter data-test="footer">
    <p>{respondidas}/{quizzState.length} CONCLUÍDOS</p>
  </ContainerFooter>
 )
}

const ContainerFooter = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: white;
  position: fixed;
  width: 380px;
  bottom: 0;
  z-index: 10;
  p {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
  }
`