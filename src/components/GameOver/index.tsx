import React from "react"

import { Score } from "./styles"

import GameButton from "../layout/Button"

interface RetryGameInterface {
  retry: () => void
  score: number
}

const GameOver = ({ retry, score }: RetryGameInterface) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <p>
        Sua pontuação foi: <Score>{score}</Score>
      </p>
      <GameButton handleGame={retry} text="Recomeçar Jogo"></GameButton>
    </div>
  )
}

export default GameOver
