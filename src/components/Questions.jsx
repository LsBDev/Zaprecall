import play from '../assets/seta_play.png'
import turn from '../assets/seta_virar.png'
import red from '../assets/icone_erro.png'
import yellow from '../assets/icone_quase.png'
import green from '../assets/icone_certo.png'
import styled from 'styled-components'
import Button from './Button'

export default function Questions({cards, icon, setIcon}) {
  function turnOn(index, color = 'default') {
    console.log(color)
    switch(icon[index]) {
      case play :
        setIcon((prev) => { 
          let newArray = [...prev]
          newArray[index] = turn
          return newArray
        })
        break
      case turn :
        setIcon((prev) => {
          let newArray = [...prev]
          newArray[index] = 'none'
          return newArray
        })
        break
      case 'none' :
        if(color === red) {
          setIcon((prev) => {
            let newArray = [...prev]
            newArray[index] = red
            return newArray
          })
        } else if(color === yellow) {
          setIcon((prev) => {
            let newArray = [...prev]
            newArray[index] = yellow
            return newArray
          })
        } else {
          setIcon((prev) => {
            let newArray = [...prev]
            newArray[index] = green
            return newArray
          })
        }
        break
      default:
    }
  }

  return (
    <main>
      <ContainerQuestions >
        {cards.map((card, index) => (
        <CardQuestion key={index} icon={icon[index]}>
          {/* usar logica para definir o componente? <Se isso COMPONENTE1 Se não COMPONENTE2> */}
          <Pergunta >            
            {(icon[index] === play && <p>{card.pergunta}</p>) ||
            (icon[index] === red && <p>{card.pergunta}</p>) ||
            (icon[index] === yellow && <p>{card.pergunta}</p>) ||
            (icon[index] === green && <p>{card.pergunta}</p>) ||
            (icon[index] === turn && <p>{card.question}</p>) || 
            (icon[index] === 'none' && <p>{card.answer}</p>)}
            <img onClick={() => turnOn(index)} src={icon[index]} alt="Ícone" />
          </Pergunta >
          <Answer key={index} icon={icon[index]}>
            <Button turnOn={turnOn} icon={icon} setIcon={setIcon} index={index} color={red}/>
            <Button turnOn={turnOn} icon={icon} setIcon={setIcon} index={index} color={yellow}/>
            <Button turnOn={turnOn} icon={icon} setIcon={setIcon} index={index} color={green}/>
          </Answer >
        </CardQuestion>)
        )}      
      </ContainerQuestions>
    </main>
    
  )
}
const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 40px 0 60px 0;
  background: #FB6B6B;
`
const CardQuestion = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height:  ${(props) => (
    ((props.icon === play && '65px') ||
    (props.icon === red && '65px') ||
    (props.icon === yellow && '65px') ||
    (props.icon === green && '65px')) || '130px'
    )};
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: ${(props) => (
    ((props.icon === play && '#FFFFFF') ||
    (props.icon === red && '#FFFFFF') ||
    (props.icon === yellow && '#FFFFFF') ||
    (props.icon === green && '#FFFFFF')) || '#FFFFD5'
    )};
  img {
    display: ${(props) => props.icon === 'none' ? 'none' : 'flex'};
    width: 20px;
    height: 20px;
    margin-top: ${(props) => props.icon === turn ? '80px' : ''}
  }
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
    color: ${(props) => (
    ((props.icon === red && '#FF3030') ||
    (props.icon === yellow && '#FF922E') ||
    (props.icon === green && '#2FBE34')) || '#333333'
    )};
    text-decoration: ${(props) => (
    ((props.icon === red && 'line-through') ||
    (props.icon === yellow && 'line-through') ||
    (props.icon === green && 'line-through')) || 'none'
    )};
  }
`
const Pergunta = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Answer = styled.div `
  display: ${(props) => props.icon === 'none' ? 'flex' : 'none'};
  justify-content: space-around;
  width: 100%;
`