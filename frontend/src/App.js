import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Navbar/>
      </nav>
    </Router>
  );
}

export default App;
