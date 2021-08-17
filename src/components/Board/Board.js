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
  const [cards] = useState([
    {id: 1, image: shakiraOne, alt: "one"},
    {id: 1, image: shakiraOne, alt: "one"},
    {id: 2, image: shakiraTwo, alt: "two"},
    {id: 2, image: shakiraTwo, alt: "two"},
    {id: 3, image: shakiraThree, alt: "three"},
    {id: 3, image: shakiraThree, alt: "three"},
    {id: 4, image: shakiraFour, alt: "four"},
    {id: 4, image: shakiraFour, alt: "four"},
    {id: 5, image: shakiraFive, alt: "five"},
    {id: 5, image: shakiraFive, alt: "five"},
    {id: 6, image: shakiraSix, alt: "six"},
    {id: 6, image: shakiraSix, alt: "six"}
  ])
  const [shuffledCards, setShuffledCards] = useState([])
  //refactor this to start with one of each image, then use spread operator to double the array?

  useEffect(() => {
    shuffle(cards)
  }, [cards])

  const handleClick = (event) => {
    window.location.reload()
  }

  const shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      const j = Math.floor(Math.random() * (array.length));
      [array[i], array[j]] = [array[j], array[i]];
      //instead of mutating the array, try a forEach and create a new array
    }
    console.log(array)
    setShuffledCards(array)
  }

  const allCards = (data) => {
    const makeCards = shuffledCards.map((card, index) => {
      return (
        <Card
        key = {index}
        id = {card.id}
        image = {card.image}
        alt = {card.alt}
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
