import React from "react"
import "./Card.css"

const Card = ({id, image}) => {
  return (
    <article className="shakira-card" id={id}>
      <img src={image} className="shakira-image hidden"/>
    </article>
  )
}

export default Card
