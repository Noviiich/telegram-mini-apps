import React from "react";
import { Card } from "../Card/Card";

export const ContractList: React.FC = () => {
    const contracts = [
        { id: 1, name: "Contract #1", image: '/static/1.jpg' },
        { id: 2, name: "Contract #2", image: "/static/2.jpg" },
        { id: 3, name: "Contract #3", image: "/static/3.jpg" }
      ];

  const handleDeposit = (id: number) => {
    console.log(`Deposit to contract ${id}`);
  };

  const handleWithdraw = (id: number) => {
    console.log(`Withdraw from contract ${id}`);
  };

  return (
    <div className="contract-list">
      {contracts.map((contract) => (
        <Card
          key={contract.id}
          id={contract.id}
          name={contract.name}
          image={contract.image}
          onDeposit={() => handleDeposit(contract.id)}
          onWithdraw={() => handleWithdraw(contract.id)}
        />
      ))}
    </div>
  );
};
export default ContractList; 