import './App.css'
import WebApp from '@twa-dev/sdk'

WebApp.ready();

function App() {
  return (
    <>
      <div className="container">
        <h1>Manage Your Tokens</h1>
        <p className="info">Quickly deposit or withdraw your tokens.</p>
        <div className="buttons">
            <button className="button deposit">Deposit</button>
            <button className="button withdraw">Withdraw</button>
        </div>
    </div>
    </>
  )
}

export default App
