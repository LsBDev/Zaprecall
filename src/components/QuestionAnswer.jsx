import styled from "styled-components"
// import red from '../assets/icone_erro.png'
// import yellow from '../assets/icone_quase.png'
// import green from '../assets/icone_certo.png'

export default function QuestionAnswer({ answer }) {
    return (
        <Answer>
            {/* <p>{answer}</p>
            <AnswerButton key={index} icon={icon[index]}>
                <Button icon={icon} setIcon={setIcon} index={index} color={red} />
                <Button icon={icon} setIcon={setIcon} index={index} color={yellow} />
                <Button icon={icon} setIcon={setIcon} index={index} color={green} />
            </AnswerButton > */}
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