import {TonConnectButton} from "@tonconnect/ui-react";
import './header.scss'

export const Header = () => {
    return (
      <>
        <div className="wallet-container">
          <TonConnectButton />
        </div>
        <header>
          <h1 className="title">Tokenized Capital</h1>
        </header>
      </>
    );
  };