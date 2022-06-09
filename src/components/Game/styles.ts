import styled from "styled-components"

export const GameContainer = styled.div`
  width: auto;
`
export const PointsContainer = styled.p``
export const Points = styled.span`
  font-weight: bold;
`
export const Title = styled.h1`
  font-size: 2.5em;

  @media (max-width: 900px) {
    display: none;
  }
`
export const TipTitle = styled.h3``
export const TipSpan = styled.span`
  color: #ecfa00;
`
export const WordContainer = styled.div`
  max-width: 700px;
  margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #ecfa00;
  display: flex;

  @media (max-width: 900px) {
    max-width: 350px;
    padding: 0.5em;
    border: 10px solid #ecfa00;
    margin-bottom: .5em;
  }
`
export const Letter = styled.span`
  font-size: 55px;
  line-height: 1.5;
  border: 3px solid #000;
  width: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;

    @media (max-width: 900px) {
    font-size: 45px;
  }
`
export const BlankSquare = styled.span`
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  width: 100px;
  height: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;

  @media (max-width: 900px) {
    height: 69px;
  }
`
export const LetterContainer = styled.div``
export const LetterFrase = styled.p`
  margin-bottom: 1.2em;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FormInput = styled.input`
  height: 50px;
  width: 50px;
  font-size: 2em;
  text-align: center;
  margin-right: 1em;
`
export const WrongLettersContainer = styled.div` `