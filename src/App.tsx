import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { CardInfo } from './pages/CardInfo';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:id" element={<CardInfo />} />
    </Routes>
  );
}

export default App;
