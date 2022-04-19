// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("blogTheme")
      ? localStorage.getItem("blogTheme")
      : "dark"
  );
  return (
    <>
      {theme === "light" && (
        <div className="App light">
          <Home theme={theme} setTheme={setTheme} />
        </div>
      )}
      {theme === "dark" && (
        <div className="App dark">
          <Home theme={theme} setTheme={setTheme} />
        </div>
      )}
    </>
  );
}

export default App;
