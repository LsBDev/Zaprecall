import styled from "styled-components"

export default function Button() {

  return (
    <Botao>
      Não lembrei
    </Botao>    
  )
}

const Botao = styled.button `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  height: 37px;

`