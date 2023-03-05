import styled from 'styled-components'
import QuestionClosed from './QuestionClosed'
import QuestionOpen from './QuestionOpen'
import QuestionAnswer from './QuestionAnswer'
import QuestionFinished from './QuestionFinished'
import {CardState} from '../enum.js'


export default function Questions({cards, quizzState, setQuizzState}) {
  
  return (
    <main>
      <ContainerQuestions >
        {cards.map((card, index) => {      
            return (
              <div data-test="flashcard">
              {(quizzState[index].cardState === CardState.FECHADO && <QuestionClosed key={index} id={index} setQuizzState={setQuizzState}/>) ||
              (quizzState[index].cardState === CardState.ABERTO && <QuestionOpen key={index} id={index} question={card.question} setQuizzState={setQuizzState}/>) ||
              (quizzState[index].cardState === CardState.RESPOSTA && <QuestionAnswer  key={index} id={index} setQuizzState={setQuizzState} answer={card.answer} />) ||
              (quizzState[index].cardState === CardState.ENCERRADO &&  <QuestionFinished key={index} id={index} answerState={quizzState[index].answerState}/>)}
              </div>
            )
          })
        }      
      </ContainerQuestions>
    </main>
    
  )
}

const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 40px 0 60px 0;
  background: #FB6B6B;
`
// const Pergunta = styled.div `
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `
// const Answer = styled.div `
//   display: ${(props) => props.icon === 'none' ? 'flex' : 'none'};
//   justify-content: space-around;
//   width: 100%;
// `