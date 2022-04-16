import "./App.css";
import NavBar from "./frontend/components/NavBar/NavBar";
import LandingPage from "./frontend/pages/LandingPage/LandingPage";
import HomePage from "./frontend/pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <LandingPage/> */}
      <HomePage/>
    </div>
  );
}

export default App;
