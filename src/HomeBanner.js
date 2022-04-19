import { Button, Icon } from "semantic-ui-react";
const HomeBanner = ({ theme, setTheme }) => {
  const handleThemeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      {theme === "light" && (
        <div className="home-banner light">
          <h1>Word &nbsp;Hoard</h1>
          <div className="lower-banner">
            <div className="home-link-list">
              <a href={"https://www.google.com/"}>FANTASY</a>
              <a href={"https://www.google.com/"}>SCI FI</a>
              <a href={"https://www.google.com/"}>NONFICTION</a>
              <a href={"https://www.google.com/"}>ARCHIVE</a>
              <a href={"https://www.google.com/"}>AUTHOR</a>

              <button onClick={() => handleThemeButton()}>
                <Icon name="moon" />
              </button>
            </div>
            <div className="banner-underline light"></div>
          </div>
        </div>
      )}
      {theme === "dark" && (
        <div className="home-banner dark">
          <h1>Word &nbsp;Hoard</h1>

          <div className="lower-banner">
            <div className="home-link-list">
              <a href={"https://www.google.com/"}>_fantasy</a>
              <a href={"https://www.google.com/"}>_sci fi</a>
              <a href={"https://www.google.com/"}>_nonfiction</a>
              <a href={"https://www.google.com/"}>_archive</a>
              <a href={"https://www.google.com/"}>_author</a>

              <button onClick={() => handleThemeButton()}>
                <Icon name="sun" />
              </button>
            </div>
            <div className="banner-underline dark"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default HomeBanner;
