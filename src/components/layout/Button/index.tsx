import React from "react"

import { Button } from "./styles"

interface ButtonInterface {
  text: string
  handleGame?: () => void
}

const GameButton = ({ text, handleGame }: ButtonInterface) => {
  return <Button onClick={handleGame}>{text}</Button>
}

export default GameButton
