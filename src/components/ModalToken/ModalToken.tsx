import React from "react";
import { CardInfo } from "../../App";
import "./ModalToken.css";

interface TokenProps {
  data: CardInfo | null;
  close: () => void;
  position: number;
}

export const ModalToken: React.FC<TokenProps> = ({ data, close, position }) => {
  return (
    <>
      <div className="overlay" onClick={close}></div>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ top: `${position}px` }}>
          <img src={data?.image} alt={data?.name} />
          <h2>Some details {data?.id}</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          varius est, nec facilisis nisi eleifend quis. Ut tincidunt, turpis ut
          venenatis dapibus, metus arcu feugiat elit, id consectetur justo magna
          non metus.
        </p>
          <div className="buttons">
            <button className="button-red" onClick={close}>Deposit</button>
            <button className="button-green" onClick={close}>Withdraw</button>
          </div>
      </div>
    </>
    
    
  );
};
