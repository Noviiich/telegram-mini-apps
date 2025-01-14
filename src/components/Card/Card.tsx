import React from "react";
import "./Card.css";
import { CardInfo } from "../../App";

interface CardProps {
  card: CardInfo;
  open: (card: CardInfo) => void
}

export const Card: React.FC<CardProps> = ({ card, open}) => {
  return (
    <div className="card">
      <img src={card?.image} alt={card?.name} />
      <h3>{card?.name}</h3>
      <button onClick={() => open(card)}>Detail</button>
    </div>
  );
};
