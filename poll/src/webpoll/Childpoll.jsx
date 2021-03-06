
import React from "react"
import "./webpoll.css"

const Childpoll = ({ count, title, onClickHandler }) => {
  return (
    <div className="child">
      <span className="span">{count}</span>
      <h2>{title}</h2>
      <button onClick={onClickHandler}>Vote</button>
    </div>
  )
}

export default Childpoll