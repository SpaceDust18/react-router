import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './Components/Red.jsx';
import Home from './Components/Home.jsx';
import Blue from './Components/Blue.jsx';

export default function App() {


  return (
    <>
      <div id="container">

        <div id="navbar">
          <Link to="/Home">Home</Link>
          <Link to="/Blue">Blue</Link>
          <Link to="/Red">Red</Link>
        </div>

        <div id="main-section">
          <Routes>

            <Route path="/Home" element={<Home />} />
            <Route path="/Blue" element={<Blue />} />
            <Route path="/Red" element={<Red />} />

          </Routes>
        </div>
      </div>
    </>
  )
}

