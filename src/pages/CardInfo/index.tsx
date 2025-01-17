import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contracts } from "../../data/data";
import MyButton from "../../components/ui/Button/MyButton";
import "./index.css"

export const CardInfo: React.FC = ({}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const card = contracts.find((c) => c.id === Number(id));
  return (
    <div className="card-info">
        <div
        className="close"
        onClick={() => navigate(-1)}
        aria-label="Close"
      >
        ✖
      </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <img src={card?.image} alt={card?.name} />
          <h2>Подробности Карточки {card?.id}</h2>
        </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          varius est, nec facilisis nisi eleifend quis. Ut tincidunt, turpis ut
          venenatis dapibus, metus arcu feugiat elit, id consectetur justo magna
          non metus.
        </p>
        <p>
          Donec ac vehicula justo. Curabitur vel mi sed arcu vehicula blandit
          sit amet ut eros. Morbi tincidunt sit amet lectus a tincidunt. Sed
          non quam sed justo convallis luctus.
        </p>
          <div className="buttons">
            <MyButton label="Deposit" variant="green"/>
            <MyButton label="Withdraw" variant="danger"/>
          </div>
      </div>
  );
};