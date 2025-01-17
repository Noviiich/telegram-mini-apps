import React from "react";
import { Card } from "../Card/Card";
import "./ContractList.css";
import { contracts } from "../../data/data";

export const ContractList: React.FC = ({}) => {
  return (
    <div className="contract-list">
      {contracts.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
};
export default ContractList; 