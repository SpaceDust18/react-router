import { Link } from "react-router-dom";

export default function NavBar({}) {
    
return (
    <div id="navbar">
          <Link to="/Home" id='purple'>Home</Link>
          <Link to="/Blue" id='blue'>Blue</Link>
          <Link to="/Red" id='red'>Red</Link>
        </div>
)
}