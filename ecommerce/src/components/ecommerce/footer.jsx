import styled from "styled-components"

const Container = styled.footer`
  border: 3px solid #6950A1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  > div {
    width: 120px;
    height: 60px;
    line-height: 60px;
    
    text-align: center;
    color: #fff;
  }
`
import Cardone from '../imagens/visa.png'
import CardTwo from '../imagens/master.png'
import CardTree from '../imagens/boleto.png'
import Cardfor from '../imagens/hipercard.png'
export default function Footer () {
  return (
    <Container>
      <img src={Cardone}></img>
      <img src={CardTwo}></img>
      <img src={CardTree}></img>
      <img src={Cardfor}></img>
    </Container>
  )
}