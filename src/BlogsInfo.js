import { useParams } from "react-router-dom";
import backendCards from "./backendCards";
import backendBlogBody from "./backendBlogBody";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const BlogsInfo = ({ theme, setTheme }) => {
  const { id } = useParams();

  return (
    <div className="blog-info-page">
      <nav className="blog-home-nav">
        <Link to="/">Word Hoard</Link>
      </nav>

      <div className="blog-section">
        <h1>{backendCards[id - 1].title}</h1>

        <img src={backendCards[id - 1].image} alt={backendCards[id - 1].alt} />
        <h4>by {backendCards[id - 1].author}</h4>

        <p className="blog-info-blog-body">{backendBlogBody[id - 1].body}</p>
      </div>
    </div>
  );
};
export default BlogsInfo;
