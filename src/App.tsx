import './App.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Header } from './components/Header/Header';
import { ContractList } from "./components/ContractList/ContractList";
import { ModalToken } from './components/ModalToken/ModalToken';
import { useState } from 'react';

WebApp.ready();

export interface CardInfo {
  id: number;
  name: string;
  image: string;
}

function App() {
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);
  const contracts: CardInfo[] = [
    { id: 1, name: "Contract #1", image: '/static/1.jpg' },
    { id: 2, name: "Contract #2", image: "/static/2.jpg" },
    { id: 3, name: "Contract #3", image: "/static/3.jpg" },
    { id: 4, name: "Contract #4", image: '/static/1.jpg' },
    { id: 5, name: "Contract #5", image: "/static/2.jpg" },
    { id: 6, name: "Contract #6", image: "/static/3.jpg" },
    { id: 7, name: "Contract #7", image: '/static/1.jpg' },
    { id: 8, name: "Contract #8", image: "/static/2.jpg" },
    { id: 9, name: "Contract #9", image: "/static/3.jpg" },
    { id: 10, name: "Contract #10", image: "/static/3.jpg" }
  ];

  const handleClickCard = (card: CardInfo): void => {
    setSelectedCard(card);
    console.log(selectedCard)
  }

  return (
    <TonConnectUIProvider manifestUrl="https://noviiich.github.io/telegram-mini-apps/tonconnect-manifest.json">
      <div className="app">
        {selectedCard && <ModalToken data={selectedCard} close={() => setSelectedCard(null)}/>}
        <Header />
        <div>
          <h1 className="title">Tokenized Capital</h1>
        </div>
        <ContractList 
          data={contracts}
          openToken={handleClickCard}
        />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
