import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/Game";
import HomePage from "./pages/Home"
import AccountPage from "./pages/Account"
import NewsPage from "./pages/News"
import BlogPage from "./pages/Blog"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/useraccount" element={<AccountPage />} />
      <Route path="/startgame" element={<StartGame />} />
      <Route path="/gamenews" element={<NewsPage />} />
      <Route path="/companyblog" element={<BlogPage />} />
    </Routes>
  );
};

export default App;
