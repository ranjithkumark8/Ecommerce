import "./App.css";
import { TopBar } from "./components/TopBar/TopBar";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Router } from "./Router/Router";
function App() {
  return (
    <div className="App">
      {/* <TopBar />
      <NavBar />
      <Home /> */}
      <TopBar />
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
