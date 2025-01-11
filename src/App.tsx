import './App.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Header } from './components/Header/Header';
import { ContractList } from "./components/ContractList/ContractList";

WebApp.ready();

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://noviiich.github.io/telegram-mini-apps/tonconnect-manifest.json">
      <div className="app">
        <h1>My App with React UI</h1>
        <button className="connect">Connect Wallet</button>
        <ContractList />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
