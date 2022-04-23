import "./App.css";
import NavBar from "./frontend/components/NavBar/NavBar";
import {
  LandingPage,
  HomePage,
  Stream,
  Login,
  History,
  Playlist,
  Like,
  Watchlater,
} from "./frontend/pages";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./frontend/context/auth-context";

function App() {
  const { token } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/liked" element={<Like />}></Route>
        <Route path="/watchlater" element={<Watchlater />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/home/:videoID" element={<Stream />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
