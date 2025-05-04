import CSSwrapper from "../components/CSSwrapper";
import { useNavigate } from "react-router-dom";
import PokeballThrow from "../animations/PokeballThrow";
import Navbar from "../components/Navigation/NavBar";

function BlogPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <CSSwrapper className="blogpage" />
      <PokeballThrow />
      <Navbar />
      <button onClick={() => navigate("/homepage")}>Home</button>
    </>
  );
}

export default BlogPage;
