import Banner from "./Banner";

const AuthorPage = ({ theme, setTheme }) => {
  return (
    <div className="author-page">
      <Banner theme={theme} setTheme={setTheme} />
      <div className="author-body">
        <h1>Author Information</h1>
        <div>Image on the left</div>
        <div>Info on the right</div>
      </div>
    </div>
  );
};
export default AuthorPage;
