import zapLogo from '../assets/logo.png'
import Questions from './Questions';
import Footer from './Footer';
import styled from 'styled-components';
import { useState } from 'react'
import {CardState, AnswerState} from '../enum.js'

export default function App() {
  const cards = [
    {question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    {question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    {question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    {question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    {question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    {question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  const [quizzState, setQuizzState] = useState(cards.map(() => ({cardState: CardState.FECHADO, answerState: AnswerState.DEFAULT})))

  return (
    <ContainerApp >
      <HeaderApp>
        <Logo src={zapLogo} alt="logo" />
       <Tittle>ZapRecall</Tittle>
      </HeaderApp>
      <Questions quizzState={quizzState} setQuizzState={setQuizzState} cards={cards} />        
      <Footer quizzState={quizzState}/>
    </ContainerApp>
  );
}

const ContainerApp = styled.section`
  width: 380px;
  margin: 0 auto;
  background: #FB6B6B;
`

const HeaderApp = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  gap: 30px;
`

const Logo = styled.img `
  width: 60px;
  height: 60px;
`

const Tittle = styled.h1 `
  font-size: 36px;
  font-weight: 400;
  font-family: 'Righteous';
  color: white;
`

