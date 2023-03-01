import zapLogo from '../assets/logo.png'
import Questions from './Questions';
import Footer from './Footer';
import styled from 'styled-components';

export default function App() {
  return (
    <ContainerApp >
      <HeaderApp>
        <Logo src={zapLogo} alt="logo" />
       <Tittle>ZapRecall</Tittle>
      </HeaderApp>
      <Questions />        
      <Footer />
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

