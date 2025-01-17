import React from "react";
import "./Card.css";
import MyButton from "../ui/Button/MyButton";
import { useNavigate } from "react-router-dom";


interface CardProps {
  id: number;
  name: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({id, name, image}) => {
  const navigate = useNavigate();
  const openCard = () => navigate(`/card/${id}`);
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <MyButton label="Detail" onClick={openCard}/>
    </div>
  );
};
