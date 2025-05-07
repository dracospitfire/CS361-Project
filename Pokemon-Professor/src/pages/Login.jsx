import CSSwrapper from "../components/CSSwrapper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PokeballThrow from "../animations/PokeballThrow";
import NavBar from "../components/Navigation/NavBar";
import FormSignUp from "../components/Signup/SignupForm";
import SocialBar from "../components/Navigation/SocialBar";

function LoginPage() {
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <>
      <CSSwrapper className="homepage" />
      <PokeballThrow />
      <NavBar />
      <main>
        <section className="options">
          <button className="login" onClick={() => navigate("/login")}>Login</button>
          <button className="updates" onClick={() => setShowNews(true)}>Updates</button>
        </section>
        {/* {showSignup && (
          <article className="background"> */}
            <div id="signup-form" className={`signup-slide ${showSignup ? "visible" : "hidden"}`}>
              <FormSignUp cancelForm={() => setShowSignup(false)} />
            </div>
          {/* </article>
        )} */}
      </main>
      <SocialBar />
    </>
  );
}

export default LoginPage;
