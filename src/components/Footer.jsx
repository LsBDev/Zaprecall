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
  p {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
  }
`