// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import BlogsInfo from "./BlogsInfo";
import ScrollToTop from "./ScrollToTop";

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
                {/* <Route path="/archive" element={<ArchivePage />}></Route> */}
                {/* <Route path="/author" element={<AuthorPage />}></Route> */}

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
                {/* <Route path="/archive" element={<ArchivePage />}></Route> */}
                {/* <Route path="/author" element={<AuthorPage />}></Route> */}
                <Route
                  path="/blogs/:id"
                  element={<BlogsInfo theme={theme} setTheme={setTheme} />}
                ></Route>
              </Routes>
            </div>
          )}
        </>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
