import styled from 'styled-components'

export default function Footer() {
 return (
  <ContainerFooter>
    <p>0/4 CONCLUÍDOS</p>
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