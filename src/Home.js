import { Button } from "semantic-ui-react";
import HomeBanner from "./HomeBanner";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      {" "}
      {theme === "light" && (
        <div className="home-page light">
          <HomeBanner theme={theme} setTheme={setTheme} />
          <div className="home-blogs-section">
            <div>Banner: Light</div>
            <div>First blog</div>
            <div>More blogs</div>
          </div>
        </div>
      )}
      {theme === "dark" && (
        <div className="home-page dark">
          <HomeBanner theme={theme} setTheme={setTheme} />
          <div className="home-blogs-section">
            <div>First blog</div>
            <div>More blogs</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
