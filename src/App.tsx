// React
import { useCallback, useEffect, useState } from "react"

// Components
import HomeStart from "./components/HomeStart"
import Game from "./components/Game"
import GameOver from "./components/GameOver"

// data
import { wordsList } from "./data/word"

// CSS
import "./App.css"

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "gameOver" },
]

const guessesStart = 3

interface WordsInterface {
  carro: string[]
  fruta: string[]
  corpo: string[]
  computador: string[]
  programação: string[]
  alimento: string[]
}

interface ArrayStringInterface {
  type: string[]
}

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedCategory, setPickedCategory] = useState("")
  const [pickedWord, setPickedWord] = useState("")
  const [letters, setLetters] = useState([""])

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]

    // pick a random word
    const getWord = (words as any)[category][
      Math.floor(Math.random() * (words as any)[category].length)
    ]
    const word = getWord.toLowerCase()

    return { word, category }
  }, [words])

  // start the game
  // clear all letters
  const startGame = useCallback(() => {
    clearLettersStates()

    // pick word and category
    const { word, category } = pickWordAndCategory()

    // create an array of letters
    const wordLetters = word.split("")

    // fill states
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  // verify letter input
  const verifyLetter = (letter: string) => {
    const normalizedLetter = letter.toLocaleLowerCase()

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // check if guesses are over
  useEffect(() => {
    if (guesses === 0) {
      // reset all guesses
      clearLettersStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100))

      // restart game with a new word
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  // restart game
  const retry = () => {
    setScore(0)
    setGuesses(guessesStart)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <HomeStart startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "gameOver" && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App
