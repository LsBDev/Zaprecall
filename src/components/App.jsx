import '../css/App.css';
import zapLogo from '../assets/logo.png'
import Questions from './Questions';
import Footer from './Footer';

export default function App() {
  return (
    <section className="app">
      <header className="app-header">
        <img className='logo' src={zapLogo} alt="logo" />
       <h1 className='tittle'>ZapRecall</h1>
      </header>
        <Questions />        
        <Footer />
    </section>
  );
}

