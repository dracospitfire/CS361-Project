import CSSwrapper from "../components/CSSwrapper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PokeballThrow from "../animations/PokeballThrow";
import NavBar from "../components/Navigation/NavBar";
import NewsUpdates from "../components/Updates/NewsUpdates";
import SocialBar from "../components/Navigation/SocialBar";

function LoginPage() {
  const navigate = useNavigate();
  const [showUpdates, setShowUpdates] = useState(false);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <CSSwrapper className="homepage" />
      <PokeballThrow />
      <NavBar />
      <main>
        <h1>Pokémon Professor</h1>
        <button className="updates" onClick={() => setShowUpdates(true)}>Updates</button>
        <section className="options">
          <button className="username">Username:</button>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text"
          />
        </section>
        <section className="options">
          <button className="password" onClick={() => navigate("/startgame")}>Password:</button>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text"
          />
        </section>
        <button className="login" onClick={() => navigate("/startgame")}>Login</button>
        <article className={`shadow ${showUpdates ? "visible" : "hidden"}`}>
          <div className={`updates-slide ${showUpdates ? "visible" : "hidden"}`}>
            <NewsUpdates cancelForm={() => setShowUpdates(false)} />
          </div>
        </article>
      </main>
      <SocialBar />
    </>
  );
}

export default LoginPage;
