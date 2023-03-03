import styled from 'styled-components'
import red from '../assets/icone_erro.png'
import yellow from '../assets/icone_quase.png'
import green from '../assets/icone_certo.png'

export default function Footer({cards, icon}) {
  const respondidas = icon.reduce((acc, item) => {
    if(item === red || item === yellow || item === green) {
      return (acc + 1)
    } else {
      return acc
    }
  }, 0)

 return (
  <ContainerFooter data-test="footer">
    <p>{respondidas}/{cards.length} CONCLUÍDOS</p>
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