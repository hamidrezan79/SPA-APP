import { Link, useParams } from "react-router-dom";
const Blog = () => {
  const id = useParams().id;
  //   console.log(useParams().id);
  return (
    <div>
      <h2>Blog Detaile : {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>Go to Next Page</Link>
    </div>
  );
};

export default Blog;
