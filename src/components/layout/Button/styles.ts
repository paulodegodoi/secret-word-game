import styled from "styled-components"

export const Button = styled.button`
  width: 250px;
  height: 50px;
  background: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  border: 2px solid #fff;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #A15A;
  }

  @media (max-width: 900px) {
    transform: scale(0.8);
  } 
`