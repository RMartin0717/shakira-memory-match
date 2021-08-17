import React from "react"
import "./Card.css"

const Card = ({id, num, checkCard, image, alt}) => {
  return (
    <article className="shakira-card" id={id} num={num} onClick={checkCard}>
      <img src={image} alt={alt} className="shakira-image hidden"/>
    </article>
  )
}

export default Card
