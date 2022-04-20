import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Banner = ({ theme, setTheme }) => {
  const handleThemeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const handleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
  };
  return (
    <>
      {theme === "light" && (
        <div className="banner light">
          <h1>Word &nbsp;Hoard</h1>
          <div className="lower-banner">
            <div className="small-link-list">
              <div className="visible-nav-bar">
                <button
                  className="drop-down-button"
                  onClick={() => handleDropDown()}
                >
                  <Icon name="bars"></Icon>
                </button>
                <button
                  className="theme-button"
                  onClick={() => handleThemeButton()}
                >
                  <Icon name="moon" />
                </button>
              </div>
            </div>

            <div className="home-link-list">
              <Link to="/">HOARD</Link>
              <Link to="/author">AUTHOR</Link>
              <Link to="/archive">ARCHIVE</Link>

              <button
                className="theme-button"
                onClick={() => handleThemeButton()}
              >
                <Icon name="moon" />
              </button>
            </div>
            <div className="banner-underline light"></div>

            {dropDownVisible && (
              <div className="small-home-link-list">
                <Link to="/">HOARD</Link>
                <Link to="/author">AUTHOR</Link>
                <Link to="/archive">ARCHIVE</Link>
              </div>
            )}
          </div>
        </div>
      )}
      {theme === "dark" && (
        <div className="banner dark">
          <h1>Word &nbsp;Hoard</h1>

          <div className="lower-banner">
            {/* Narrow width screen */}
            <div className="small-link-list">
              <div className="visible-nav-bar">
                <button
                  className="drop-down-button"
                  onClick={() => handleDropDown()}
                >
                  <Icon name="bars"></Icon>
                </button>
                <button
                  className="theme-button"
                  onClick={() => handleThemeButton()}
                >
                  <Icon name="sun" />
                </button>
              </div>
            </div>
            {/* Wider Width Screen */}
            <div className="home-link-list">
              <Link to="/">_hoard</Link>
              <Link to="/author">_author</Link>
              <Link to="/archive">_archive</Link>
              <button
                className="theme-button"
                onClick={() => handleThemeButton()}
              >
                <Icon name="sun" />
              </button>
            </div>

            {/* --------------------------- */}
            <div className="banner-underline dark"></div>
            {dropDownVisible && (
              <div className="small-home-link-list">
                <Link to="/">_hoard</Link>
                <Link to="/author">_author</Link>
                <Link to="/archive">_archive</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Banner;
