import Banner from "./Banner";

const ArchivePage = ({ theme, setTheme }) => {
  return (
    <div className="archive-page">
      <Banner theme={theme} setTheme={setTheme} />
      <div className="archive-body">
        <h1>Archive</h1>
        <div>list of blogs</div>
      </div>
    </div>
  );
};
export default ArchivePage;
