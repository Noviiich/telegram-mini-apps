import React from "react";
import { Card } from "../Card/Card";
import "./ContractList.css";
import { CardInfo } from "../../App";

interface ContractListProps {
  openToken: (card: CardInfo) => void;
  data: Array<CardInfo>;
}


export const ContractList: React.FC<ContractListProps> = ({data, openToken}) => {

  return (
    <div className="contract-list">
      {data.map((item) => (
        <Card
          key={item.id}
          card={item}
          open={openToken}
        />
      ))}
    </div>
  );
};
export default ContractList; 