import "./App.css";
import NavBar from "./frontend/components/NavBar/NavBar";
import LandingPage from "./frontend/pages/LandingPage/LandingPage";
import HomePage from "./frontend/pages/Home/HomePage";
import Stream from "./frontend/pages/Stream/Stream";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/home/:videoID" element={<Stream />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
