import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
  <>
    <header className="head-nav">
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
