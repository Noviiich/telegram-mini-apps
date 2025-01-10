import './App.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Header } from './components/Header/Header';

WebApp.ready();

function App() {

  return (
    <>
    <TonConnectUIProvider manifestUrl="https://noviiich.github.io/telegram-mini-apps/tonconnect-manifest.json">
    <div className="app">
      <Header />
    </div>
    </TonConnectUIProvider>
    </>
  )
}

export default App
