import CSSwrapper from "../components/CSSwrapper";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import PokeballThrow from "../animations/PokeballThrow";
import Navbar from "../components/Navigation/NavBar";

function HomePage() {
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);

  const [ gymLeaderNames, setGymLeaderNames ] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [formData, setFormData] = useState({
    gymName            : '',
    gymLeaderID        : '',
    lowLevelRange      : '',
    highLevelRange     : '',
    typeSpecialization : '',
    numberOfTrainers   : '',
    badgePrize         : '',
    districtID         : '',
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Create a new Pokemon Gym object from the formData
    const newPokemonGym = {
      gymName            : formData.gymName            || '',
      gymLeaderID        : formData.gymLeaderID        || null,
      typeSpecialization : formData.typeSpecialization || null,
      numberOfTrainers   : formData.numberOfTrainers   || '',
      lowLevelRange      : formData.lowLevelRange      || '',
      highLevelRange     : formData.highLevelRange     || '',
      badgePrize         : formData.badgePrize         || '',
      districtID         : formData.districtID         || '',
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "pokemongyms";
      const response = await axios.post(URL, newPokemonGym);

      if (response.status === 201) {
        alert(response.data.message);
        // Reset the form fields
        resetFormFields();
        navigate("/pokemongyms/table")
      }
    } catch (err) {
      if (err.response) {
        // Backend Responses (300, 400, 404, 406, 500)
        alert(err.response.data.error);
        navigate("/pokemongyms/add", { state: { pokemonGym: newPokemonGym } });
      } else {
        // No Response (Network error or CORS issue)
        alert("No response from server. Network error or CORS issue.");
      }
    }
  };

  const resetFormFields = () => {
    setFormData({
      gymName            : '',
      gymLeaderID        : '',
      lowLevelRange      : '',
      highLevelRange     : '',
      typeSpecialization : '',
      numberOfTrainers   : '',
      badgePrize         : '',
      districtID         : '',
    });
  };

  const handleInputChange = (event) => {
    const { name, type, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
        [name]: name  === "districtID"  ? value === '' ? null : Number(value): 
                name  === "gymLeaderID" ? value === '' ? null : Number(value):
                type  === "number"      ? value === '' ? null : Number(value):
                value === ''            ?                null :
                value,
    }));
  };

  return (
    <>
      <CSSwrapper className="homepage" />
      <PokeballThrow />
      <Navbar />
      <h1>Pokémon Professor</h1>
      <main>
        <h2>Welcome to the Pokémon Professor Simulator</h2>
        <p>
          You’re stepping into the lab as a Pokémon Professor. Your mission? To study Pokémon in the lab,
          document traits, log trainer submissions, and build the most detailed Pokédex the world has ever seen. Each day,
          you’ll receive one unique Pokémon, provided by trainers out in the field who are impacted by factors like location,
          time of day, and weather conditions. Each Pokémon is your research subject and will give you an opportunity to
          analyze, record, and share findings with the global professor network.
        </p>
        <button id="open-signup" onClick={() => setShowSignup(true)}>Signup</button>
        <button onClick={() => navigate("/")}>Login</button>
      </main>
      <div id="signup-form" className={`signup-slide ${showSignup ? "visible" : "hidden"}`}>
        <h2>Signup</h2>
        <button type="button" onClick={() => setShowSignup(false)}>Cancel</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              name="userFirstName"
              value={formData.userFirstName || '' }
              onChange={handleInputChange}
              placeholder="First"
              required
            />
            <input
              type="text"
              name="userLastName"
              value={formData.userLastName || '' }
              onChange={handleInputChange}
              placeholder="Last"
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.lowLevelRange || '' }
              onChange={handleInputChange}
              min="13"
              max="90"
              step="1"
              placeholder="13"
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              value={formData.email || '' }
              onChange={handleInputChange}
              placeholder="user@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address || '' }
              onChange={handleInputChange}
              placeholder="42 Wallaby Way"
              required
            />
            <input
              type="text"
              name="apt"
              value={formData.apt || '' }
              onChange={handleInputChange}
              placeholder="APT"
            />
          </div>
          <div>
            <label htmlFor="userName">City, State, Zip:</label>
            <input
              type="text"
              name="userName"
              value={formData.userName || '' }
              onChange={handleInputChange}
              placeholder="Sydney"
              required
            />
            <select
              name="state"
              onChange={handleInputChange}
              value={formData.typeSpecialization || '' }
              >
              <option value=''>State</option>
              <option value="California">CA</option>
              <option value="Navada">NV</option>
            </select>
            <input
              type="number"
              name="zipcode"
              value={formData.userName || '' }
              onChange={handleInputChange}
              placeholder="12345"
              required
            />
          </div>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              name="userName"
              value={formData.userName || '' }
              onChange={handleInputChange}
              placeholder="NeoTheOne"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              value={formData.password || '' }
              onChange={handleInputChange}
              placeholder="**************"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <article>
          <p>Nuevo Yue sits on the coastal edge of North America. In the midst of a growing climate crisis, after the destruction of Yue by way of rising tidal waves and erosion, the population migrated further inland to a territory that had been devastated by once in millennia wildfires. As much of the infrastructure had been destroyed, a group of technically inclined city planners, sociologists, and Pokemon trainers came together to initiate new regional planning efforts. Before rebuilding the region, they identified the need for a comprehensive database to guide development efforts.</p>
          <p>Nuevo Yue is being developed to house a projected population of 500,000 people over the next decade. This database will serve as a critical tool for tracking ongoing projects, identifying potential flaws, and addressing regional inequities to ensure fair and sustainable growth. More than a city, Nuevo Yue will be a living experiment in creating harmony between technology, nature, and human ambition. The database is the backbone of this vision, enabling informed decision-making to create a future-ready city that respects its past, learns from its challenges, and embraces the potential of data and Pokémon partnerships to forge a sustainable tomorrow. The database will act as a centralized repository for tracking key aspects of Nuevo Yue’s development. It will monitor Pokémon trainers’ activities, map out districts with unique themes, oversee the operations of Pokémon gyms, and document the intricate interplay between urban Zones, utilities, and natural ecosystems. Designed to track critical development projects across 10 districts, each accommodating up to 50,000 residents and featuring distinct themes like residential, commercial, and industrial Zones. The system will also record the activities of over 100 Pokémon trainers managing gyms and their battles. Additionally, it will track up to 1,000 utility partnerships and manage data on over 200 types of flora and fauna, ensuring harmony between the city’s technological growth and its natural environment. The database will be integrated into a website in order to allow the population to see progress, design, and to provide for public and open information. With the integration between Pokémon training, and city infrastructure information, the database and website will provide ample details which will assist stakeholders in resolving issues.</p>
      </article>
      <aside>
        <a href="https://www.facebook.com/"> Facebook </a>
        |
        <a href="https://www.instagram.com/"> Instagram</a>
        |
        <a href="https://www.youtube.com/"> Youtube </a>
        |
        <a href="https://x.com/"> X </a>
        |
        <a href="https://www.tiktok.com/"> TikTok </a>
      </aside>
      <footer>
        &copy; 2025 Austin Flores
        <a href="https://github.com/dracospitfire/">
          <span className="github">
            GitHub: dracospitfire
          </span>
        </a>
      </footer>
    </>
  );
}

export default HomePage;
