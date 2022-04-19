import { Button } from "semantic-ui-react";
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
              <a href={"https://www.google.com/"}>fantasy</a>
              <a href={"https://www.google.com/"}>sci fi</a>
              <a href={"https://www.google.com/"}>nonfiction</a>
              <Button color="black" basic onClick={() => handleThemeButton()}>
                Dark
              </Button>
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
              <a href={"https://www.google.com/"}>fantasy</a>
              <a href={"https://www.google.com/"}>sci fi</a>
              <a href={"https://www.google.com/"}>nonfiction</a>
              <Button color="pink" basic onClick={() => handleThemeButton()}>
                Light
              </Button>
            </div>
            <div className="banner-underline dark"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default HomeBanner;
