import styled from "styled-components"
import Button from "./Button"
import {AnswerState} from '../enum.js'

export default function QuestionAnswer({ answer, id, setQuizzState}) {
    return (
        <Answer>
            <p>{answer}</p>
            <AnswerButton>
                <Button id={id} answerState={AnswerState.ERRADO} setQuizzState={setQuizzState}/>
                <Button id={id} answerState={AnswerState.QUASE} setQuizzState={setQuizzState}/>
                <Button id={id} answerState={AnswerState.CORRETO} setQuizzState={setQuizzState}/>
            </AnswerButton>
        </Answer>


    )
}

const Answer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 130px;
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: #FFFFD5;
  img {
    width: 20px;
    height: 20px;
  }
  p {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
    color: #333333;
  }
`
const AnswerButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`