import React from "react";
import { CardInfo } from "../../App";
import "./ModalToken.css";

interface TokenProps {
  data: CardInfo | null;
  close: () => void;
}

export const ModalToken: React.FC<TokenProps> = ({ data, close }) => {
  return (
    <>
      <div className="overlay" onClick={close}></div>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
          <img src={data?.image} alt={data?.name} />
          <h2>Подробности Карточки {data?.id}</h2>
          <p>Здесь будет подробная информация о  карточке.</p>
          <div>
            <button onClick={close}>Deposit</button>
            <button onClick={close}>Withdraw</button>
          </div>
      </div>
    </>
    
    
  );
};
