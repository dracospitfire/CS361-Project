import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {

  const resetDatabase = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "resetdatabase";
      const response = await axios.post(URL);

      if (response.status === 200) {
        alert(response.data.message);
        
      }
    } catch (err) {
      if (err.response) {
        // Backend Responses (300, 400, 404, 406, 500)
        alert(err.response.data.error);
      } else {
        // No Response (Network error or CORS issue)
        alert("No response from server. Network error or CORS issue.");
      }
    }
  };

  return (
  <>
    <header className="head-nav">
      <div className="logo">
        <Link to="/" className="rest-tool" onClick={resetDatabase}>
          <img src="./pokecenter.png" alt="PokeCyberpunk City Logo" width="50" height="55"/>
          <span className="rest-tool-text">Reset Database</span>
        </Link>
      </div>
      <nav className="internal-nav">
        <Link to="/homepage">Home</Link>
        |
        <Link to="/useraccount">Account</Link>
        |
        <Link to="/startgame">Game</Link>
        |
        <Link to="/gamenews">News</Link>
        |
        <Link to="/companyblog">Blog</Link>
      </nav>
    </header>
  </>
  );
};

export default NavBar;
