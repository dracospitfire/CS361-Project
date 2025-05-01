import CSSwrapper from "../components/CSSwrapper";
import { useNavigate } from "react-router-dom";
import PokeballThrow from "../animations/PokeballThrow";
import Navbar from "../components/Navigation/NavBar";

function AccountPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <CSSwrapper className="accountpage" />
      <PokeballThrow />
      <Navbar />
      <button onClick={() => navigate("/accountpage")}>Home</button>
    </>
  );
}

export default AccountPage;
