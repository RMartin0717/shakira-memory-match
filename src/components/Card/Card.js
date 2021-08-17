import React from "react"
import "./Card.css"

const Card = ({id, selectCard, image, alt}) => {
  return (
    <article className="shakira-card" id={id} onClick={selectCard}>
      <img src={image} alt={alt} className="shakira-image hidden"/>
    </article>
  )
}

export default Card
