import styled from "styled-components"
import red from '../assets/icone_erro.png'
import yellow from '../assets/icone_quase.png'
// import green from '../assets/icone_certo.png'

export default function Button({color, turnOn, index}) {

  return (
    <Botao data-test="no-btn partial-btn zap-btn" onClick={() => turnOn(index, color)} color={color}>
      {color === red ? 'Não lembrei' : color === yellow ? 'Quase não lembrei' : 'Zap!'}
    </Botao>
  )
}

const Botao = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 37px;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  background: ${({color}) => color === red ? '#FF3030' : color === yellow ? '#FF922E' : '#2FBE34'};

`