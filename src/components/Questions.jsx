import play from '../assets/seta_play.png'
import turn from '../assets/seta_virar.png'
import styled from 'styled-components'
import { useState } from 'react'
import Botao from './Botao'

export default function Questions({cards}) {
  const [question, setQuestion] = useState('Pergunta')
  const [icon, setIcon] = useState(play)
  
  function turnOn(card) {
    setQuestion(card.question)
    setIcon(turn)
  }

  return (
    <main>
      <ContainerQuestions >
        {cards.map((card, index) => (
        <Question icon={icon}>
          <Pergunta >
            <p>{question} {index + 1}</p>
            <img onClick={() => turnOn(card)} src={icon} alt="play" />
          </Pergunta >
          <Answer >
            <Botao />
            <Botao />
            <Botao />
          </Answer >
          
        </Question>)
        )}      
      </ContainerQuestions>
    </main>
    
  )
}
const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  width: 380px;
  padding: 40px 0 60px 0;
  background: #FB6B6B;
`
const Question = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height:  ${(props) => props.icon !== play ? '130px' : '65px'};
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: ${(props) => props.icon !== play ? '#FFFFD5;' : '#FFFFFF'};
  img {
    width: 20px;
    height: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
  }
`
const Pergunta = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Answer = styled.div `
  display: flex;
  justify-content: space-around;
  width: 100%;

`