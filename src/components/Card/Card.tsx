import React from "react";

interface CardProps {
  id: number;
  name: string;
  image: string;
  onDeposit: () => void;
  onWithdraw: () => void;
}

export const Card: React.FC<CardProps> = ({ id, name, image, onDeposit, onWithdraw }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button onClick={onDeposit}>Deposit</button>
      <button onClick={onWithdraw}>Withdraw</button>
    </div>
  );
};
