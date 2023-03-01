import play from '../assets/seta_play.png'
import styled from 'styled-components'

export default function Questions() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  return (
    <main>
      <ContainerQuestions >
        {cards.map((card, index) => (
        <Question>
          <p>Pergunta {index + 1}</p>
          <img src={play} alt="play" />
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