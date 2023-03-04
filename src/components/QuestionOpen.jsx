import turn from '../assets/seta_virar.png'
import styled from "styled-components"
export default function QuestionOpen({question}) {
    return(
        <Open>
            <p>{question}</p>
            <img src={turn} alt="turn" />
        </Open>

    )
}

const Open = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height:  130px;
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: #FFFFD5;
  img {
    width: 20px;
    height: 20px;
    margin-top: 80px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
    color: #333333;
  }
`