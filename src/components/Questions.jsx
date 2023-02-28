import '../css/Questions.css'
import play from '../assets/seta_play.png'

export default function Questions() {
  return (
    <main>
      <div className="questions">
        <div className="question">
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </div>
        <div className="question">
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </div>
        <div className="question">
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </div>
        <div className="question">
          <p>Pergunta 1</p>
          <img src={play} alt="play" />
        </div>
      </div>
    </main>
    
  )
}