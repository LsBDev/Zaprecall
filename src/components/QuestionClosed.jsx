import play from '../assets/seta_play.png'
import styled from 'styled-components'
import {CardState, AnswerState} from '../enum.js'

export default function QuestionClosed({id, setQuizzState}) {
    function turnToOpen(index) {
        setQuizzState((prev) => {
            const newArray = [...prev]
            newArray[index] = {cardState: CardState.ABERTO, answerState: AnswerState.DEFAULT}
            return newArray
        })
    }

    return (
        <Closed>
            <p>Pergunta {id+1} </p>
            <img onClick={() => turnToOpen(id)} src={play} alt="play" />
        </Closed>
    )
}

const Closed =styled.div `
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
    color: #333333;
  }
`