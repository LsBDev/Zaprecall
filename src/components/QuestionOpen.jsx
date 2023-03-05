import turn from '../assets/seta_virar.png'
import styled from "styled-components"
import {CardState, AnswerState} from '../enum.js'

export default function QuestionOpen({question, id, setQuizzState}) {
  function turnToAnswer(index) {
      setQuizzState((prev) => {
          const newArray = [...prev]
          newArray[index] = {cardState: CardState.RESPOSTA, answerState: AnswerState.DEFAULT}
          return newArray
      })
  }

  
    return(
        <Open>
            <p data-test="flashcard-text">{question}</p>
            <img data-test="turn-btn" onClick={() => turnToAnswer(id)} src={turn} alt="turn" />
        </Open>

    )
}

const Open = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height:  130px;
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: #FFFFD5;
  img {
    width: 20px;
    height: 20px;
    margin-top: 90px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
    color: #333333;
    padding-top: 20px;
  }
`