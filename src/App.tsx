import './App.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

WebApp.ready();

function App() {
  const handleDeposit = () => {
    const depositAmount = 1000000; // Сумма в нанокоинах (1 TON = 1e9 нанокоинов)
    const walletUrl = `https://t.me/Wallet?start=deposit_ton&amount=${depositAmount}`;
    window.open(walletUrl, '_blank'); // Открыть Telegram Wallet в новом окне
  };

  return (
    <>
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
    <div className="container">
        <h1>Manage Your Tokens</h1>
        <p className="info">Quickly deposit or withdraw your tokens.</p>
        <div className="buttons">
            <button className="button deposit" onClick={handleDeposit}>Deposit</button>
            <button className="button withdraw">Withdraw</button>
        </div>
    </div>
    </TonConnectUIProvider>
    </>
  )
}

export default App
