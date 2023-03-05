import styled from "styled-components"
import {CardState, AnswerState} from '../enum.js'

export default function Button({id, setQuizzState, answerState}) {
  function turnToFinished(id, answerState) {
    setQuizzState((prev) => {
      const newArray = [...prev]
      newArray[id] = {cardState: CardState.ENCERRADO, answerState: answerState}
      return newArray
  })
}

  return (
    <Botao data-test={answerState === AnswerState.ERRADO ? "no-btn" : answerState === AnswerState.QUASE ? "partial-btn" : "zap-btn"} answerState={answerState} onClick={() => turnToFinished(id, answerState)}>
      {answerState === AnswerState.ERRADO ? 'Não lembrei' : answerState === AnswerState.QUASE ? 'Quase não lembrei' : 'Zap!'}
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
  background: ${({answerState}) => answerState === AnswerState.ERRADO ? '#FF3030' :  answerState === AnswerState.QUASE ? '#FF922E' : '#2FBE34'};

`