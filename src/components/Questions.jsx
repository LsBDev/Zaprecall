import play from '../assets/seta_play.png'
import styled from 'styled-components'

export default function Questions() {
  return (
    <main>
      <ContainerQuestions >
        <Question>
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </Question>
        <Question>
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </Question>
        <Question>
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </Question>
        <Question>
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </Question>
        <Question>
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </Question>
      
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
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 65px;
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: white;
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