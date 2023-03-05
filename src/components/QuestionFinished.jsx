import redIcon from '../assets/icone_erro.png'
import yellowIcon from '../assets/icone_quase.png'
import greenIcon from '../assets/icone_certo.png'
import styled from 'styled-components'
import {AnswerState} from '../enum.js'

export default function QuestionFinished({id, answerState}) {
   return(
    <Finished answerState={answerState}>
        <p data-test="flashcard-text">Pergunta {id+1}</p>
        <img  data-test={answerState === AnswerState.ERRADO ? "no-icon" : answerState === AnswerState.QUASE ? "partial-icon" : "zap-icon"} src={answerState === AnswerState.ERRADO ? redIcon : answerState === AnswerState.QUASE ? yellowIcon : greenIcon} alt="finalizado" />
    </Finished>
   )
}

const Finished =styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 65px;
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: #FFFFFF;
  img {
    width: 20px;
    height: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
    color: ${({answerState}) => answerState === AnswerState.ERRADO ? '#FF3030' : answerState === AnswerState.QUASE ? '#FF922E' : '#2FBE34'};
    text-decoration: line-through;
  }
`