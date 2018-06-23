import React from "react";
import "./Card.css";

const Card = props => (
  <div
    role="img"
    aria-label="Card"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`Card${props.shake ? " shake" : ""}`}
  />
);

export default Card;
