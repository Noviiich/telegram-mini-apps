import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Header } from "../../components/Header/Header";
import ContractList from "../../components/ContractList/ContractList";

function Home() {
    return (
        <TonConnectUIProvider manifestUrl="https://noviiich.github.io/telegram-mini-apps/tonconnect-manifest.json">
          <div className="app">
            <Header />
            <div>
              <h1 className="title">Tokenized Capital</h1>
            </div>
            <ContractList />
          </div>
        </TonConnectUIProvider>
      
    );
  }
  
  export default Home;