import { Link } from 'react-router-dom';
import axios from "axios";

const Navbar = () => {

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
    <header>
      <div>
      <Link to="/" className="rest-tool" onClick={resetDatabase}>
          <img src="/pokecenter.png" alt="PokeCyberpunk City Logo" width="110" height="100"/>
          <span className="rest-tool-text">Reset Database</span>
      </Link>
      </div>
      <h1>Nuevo Yue Development Database</h1>
      <nav>
        <ul>
          <li><Link to="/">Nuevo Yue Home</Link></li>
          <li><Link to="/poketrainers">Trainers Information</Link></li>
          <li><Link to="/pokemongyms">Pokemon Gyms Information</Link></li>
          <li><Link to="/districts">Districts Information</Link></li>
          <li><Link to="/florafaunas">Flora & Faunas Information</Link></li>
          <li><Link to="/utilitycompanies">Utility Companies Information</Link></li>
          <li><Link to="/zones">Zones Information</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
