import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/" element={<StartGame />} />
    </Routes>
  );
};

export default App;
