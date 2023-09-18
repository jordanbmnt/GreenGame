import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Instructions from "./Instructions/Instructions";
import NavBar from "./NavBar/NavBar";
import GameBoard from "./Game/GameBoard";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<GameBoard width={600} height={600} />} />
          <Route path='/instructions' element={<Instructions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
