import React, { useState, useRef } from "react"

import {
  GameContainer,
  PointsContainer,
  Points,
  Title,
  TipTitle,
  TipSpan,
  WordContainer,
  Letter,
  BlankSquare,
  LetterContainer,
  LetterFrase,
  Form,
  FormInput,
  WrongLettersContainer,
} from "./styles"

import GameButton from "../layout/Button"

interface GameInterface {
  verifyLetter: (letter: string) => void
  pickedWord: string
  pickedCategory: string
  letters: string[]
  guessedLetters: string[]
  wrongLetters: string[]
  guesses: number
  score: number
}

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}: GameInterface) => {
  console.log(wrongLetters)

  const [letter, setLetter] = useState("")
  const letterInputRef = useRef<HTMLInputElement>(null)

  interface Event {
    preventDefault: () => void
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter("")

    if (null !== letterInputRef.current) {
      letterInputRef.current.focus()
    }
  }

  return (
    <GameContainer>
      <PointsContainer>
        <Points>Pontuação: {score}</Points>
      </PointsContainer>
      <Title>Adivinhe a palavra:</Title>
      <TipTitle>
        Dica sobre a palavra: <TipSpan>{pickedCategory}</TipSpan>
      </TipTitle>
      <p>Você ainda tem {guesses} tentativas.</p>
      <WordContainer>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <Letter key={i}>{letter}</Letter>
          ) : (
            <BlankSquare key={i} />
          )
        )}
      </WordContainer>
      <LetterContainer>
        <LetterFrase>Tente adivinhar uma letra da palavra:</LetterFrase>
      </LetterContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="letter"
          maxLength={1}
          required
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}
        />
        <GameButton text={"Jogar!"}></GameButton>
      </Form>
      <WrongLettersContainer>
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </WrongLettersContainer>
    </GameContainer>
  )
}

export default Game
