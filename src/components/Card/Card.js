import React from "react"
import "./Card.css"

const Card = ({id, image, alt}) => {
  return (
    <article className="shakira-card" id={id}>
      <img src={image} alt={alt} className="shakira-image hidden"/>
    </article>
  )
}

export default Card
