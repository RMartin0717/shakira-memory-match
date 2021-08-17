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
    {id: 1, num: "one", image: shakiraOne, alt: "one"},
    {id: 2, num: "one", image: shakiraOne, alt: "one"},
    {id: 3, num: "two", image: shakiraTwo, alt: "two"},
    {id: 4, num: "two", image: shakiraTwo, alt: "two"},
    {id: 5, num: "three", image: shakiraThree, alt: "three"},
    {id: 6, num: "three", image: shakiraThree, alt: "three"},
    {id: 7 , num: "four", image: shakiraFour, alt: "four"},
    {id: 8, num: "four", image: shakiraFour, alt: "four"},
    {id: 9, num: "five", image: shakiraFive, alt: "five"},
    {id: 10, num: "five", image: shakiraFive, alt: "five"},
    {id: 11, num: "six", image: shakiraSix, alt: "six"},
    {id: 12, num: "six", image: shakiraSix, alt: "six"}
  ])
  //refactor this to start with one of each image, then use spread operator to double the array?
  const [shuffledCards, setShuffledCards] = useState([])
  const [currentCard, setCurrentCard] = useState('')
  const [matchCount, setMatchCount] = useState(0)
  const [win, setWin] = useState(false)

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
    setShuffledCards(array)
  }

  const checkCard = (card) => {
    if (!currentCard) {
      setCurrentCard(card)
    }
    if (currentCard === card) {
      return
    }
    if (currentCard !== card && currentCard.num === card.num && matchCount < 5) {
      setMatchCount(matchCount + 1)
      setCurrentCard('')
    }
    if (currentCard !== card && currentCard.num === card.num && matchCount >= 5) {
      setWin(true)
    }
    if (currentCard && currentCard !== card && currentCard.num !== card.num) {
      setCurrentCard('')
    }
  }


  const allCards = (data) => {
    const makeCards = shuffledCards.map((card, index) => {
      return (
        <Card
        key = {index}
        id = {card.id}
        num = {card.num}
        image = {card.image}
        alt = {card.alt}
        selectCard = {() => checkCard(card)}
        />
      )
    })
    return makeCards
  }

  return (
    <>
      {win &&
      <h3>Winner!</h3>
      }
      <section>{allCards(cards)}</section>
      <button onClick={(event) => handleClick(event)}>New Game</button>
    </>
  )
}

export default Board
