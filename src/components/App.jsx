import zapLogo from '../assets/logo.png'
import Questions from './Questions';
import Footer from './Footer';
import styled from 'styled-components';
import play from '../assets/seta_play.png'
import { useState } from 'react'

export default function App() {
  const cards = [
    { pergunta: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { pergunta: 'Pergunta 2', question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: 'Pergunta 3', question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { pergunta: 'Pergunta 4', question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { pergunta: 'Pergunta 5', question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: 'Pergunta 6', question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { pergunta: 'Pergunta 7', question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { pergunta: 'Pergunta 8', question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  const [icon, setIcon] = useState(cards.map(() => play))

  return (
    <ContainerApp >
      <HeaderApp>
        <Logo src={zapLogo} alt="logo" />
       <Tittle>ZapRecall</Tittle>
      </HeaderApp>
      <Questions icon={icon} setIcon={setIcon} cards={cards} />        
      <Footer icon={icon} setIcon={setIcon} cards={cards}/>
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

