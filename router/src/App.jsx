import './index.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Red from './Components/Red.jsx';
import Home from './Components/Home.jsx';
import Blue from './Components/Blue.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';



export default function App() {


  return (
    <>
      <div>
        <div id="container">
          <NavBar />

          <div id="main-section">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Blue" element={<Blue />} />
              <Route path="/Red" element={<Red />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

