import React from "react";
import "./Card.css";

interface CardProps {
  id: number;
  name: string;
  image: string;
  onDeposit: () => void;
  onWithdraw: () => void;
}

export const Card: React.FC<CardProps> = ({ name, image, onDeposit, onWithdraw }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="buttons">
        <button onClick={onDeposit}>Deposit</button>
        <button onClick={onWithdraw}>Withdraw</button>
      </div>
    </div>
  );
};
