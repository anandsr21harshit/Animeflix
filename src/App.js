import "./App.css";
import { useEffect } from "react";
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
import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./frontend/context/auth-context";
import RequiresAuth from "./frontend/components/RequiresAuth";


function App() {
  const { token } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/playlist"
          element={
            <RequiresAuth token={token}>
              <Playlist />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/history"
          element={
            <RequiresAuth token={token}>
              <History />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/liked"
          element={
            <RequiresAuth token={token}>
              <Like />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/watchlater"
          element={
            <RequiresAuth token={token}>
              <Watchlater />
            </RequiresAuth>
          }
        ></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/home/:videoID" element={<Stream />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
