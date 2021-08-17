import React, { useState, useEffect } from "react"
import Card from "../Card/Card"
import "./Board.css"
import shakiraOne from "../../assets/shakira1.jpeg"
import shakiraTwo from "../../assets/shakira2.jpeg"
import shakiraThree from "../../assets/shakira3.jpeg"
import shakiraFour from "../../assets/shakira4.jpeg"
import shakiraFive from "../../assets/shakira5.jpeg"
import shakiraSix from "../../assets/shakira6.jpeg"


const Board = () => {
  const [cards, setCards] = useState([
    {id: 1, image: shakiraOne},
    {id: 1, image: shakiraOne},
    {id: 2, image: shakiraTwo},
    {id: 2, image: shakiraTwo},
    {id: 3, image: shakiraThree},
    {id: 3, image: shakiraThree},
    {id: 4, image: shakiraFour},
    {id: 4, image: shakiraFour},
    {id: 5, image: shakiraFive},
    {id: 5, image: shakiraFive},
    {id: 6, image: shakiraSix},
    {id: 6, image: shakiraSix}
  ])
  //refactor this to start with one of each image, then use spread operator to double the array?

  useEffect(() => {
    console.log(cards)
  }, [cards])

  const handleClick = (event) => {
    shuffle(cards)
  }

  const shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      const j = Math.floor(Math.random() * (array.length));
      [array[i], array[j]] = [array[j], array[i]];
      //instead of mutating the array, try a forEach and create a new array
    }
    console.log(array, "array")
    setCards(array)
  }

  const allCards = (cards) => {
    const makeCards = cards.map((card, index) => {
      return (
        <Card
        key = {index}
        id = {card.id}
        image = {card.image}
        />
      )
    })
    return makeCards
  }

  return (
    <>
      <section>{allCards(cards)}</section>
      <button onClick={(event) => handleClick(event)}>New Game</button>
    </>
  )
}

export default Board
