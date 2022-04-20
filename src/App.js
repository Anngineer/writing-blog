// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import BlogsInfo from "./BlogsInfo";
import ScrollToTop from "./ScrollToTop";
import AuthorPage from "./AuthorPage";
import ArchivePage from "./ArchivePage";

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
    <BrowserRouter>
      <ScrollToTop>
        <>
          {theme === "light" && (
            <div className="App light">
              <Routes>
                <Route
                  path="/"
                  element={<Home theme={theme} setTheme={setTheme} />}
                />
                <Route
                  path="/archive"
                  element={<ArchivePage theme={theme} setTheme={setTheme} />}
                ></Route>
                <Route
                  path="/author"
                  element={<AuthorPage theme={theme} setTheme={setTheme} />}
                ></Route>

                <Route path="/blogs/:id" element={<BlogsInfo />}></Route>
              </Routes>
            </div>
          )}
          {theme === "dark" && (
            <div className="App dark">
              <Routes>
                <Route
                  path="/"
                  element={<Home theme={theme} setTheme={setTheme} />}
                />
                <Route
                  path="/archive"
                  element={<ArchivePage theme={theme} setTheme={setTheme} />}
                ></Route>
                <Route
                  path="/author"
                  element={<AuthorPage theme={theme} setTheme={setTheme} />}
                ></Route>
                <Route
                  path="/blogs/:id"
                  element={<BlogsInfo theme={theme} setTheme={setTheme} />}
                ></Route>
              </Routes>
            </div>
          )}
        </>
        {theme === "light" && (
          <div className="footer light">
            <p>
              Webpage designed and developed by{" "}
              <a href={"https://github.com/Anngineer"}>Anngineer</a>.
            </p>
          </div>
        )}
        {theme === "dark" && (
          <div className="footer dark">
            <div className="footer-line"></div>
            <p>
              Webpage designed and developed by{" "}
              <a href={"https://github.com/Anngineer"}>Anngineer</a>.
            </p>
          </div>
        )}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
