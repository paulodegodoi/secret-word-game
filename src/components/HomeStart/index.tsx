import { Title, Disclaimer } from "./styles"

import GameButton from '../layout/Button'

interface StartGameInterface {
  startGame: () => void
}

const HomeStart = ({startGame}: StartGameInterface) => {
  return (
    <div>
      <Title>Secret Word</Title>
      <Disclaimer>Clique no botão abaixo para começar a jogar</Disclaimer>
      <GameButton handleGame={startGame} text="Iniciar o jogo"></GameButton>
    </div>
  )
}

export default HomeStart