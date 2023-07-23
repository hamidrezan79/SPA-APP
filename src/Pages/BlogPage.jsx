import { Link } from "react-router-dom";
const items = [
  { name: "Blogs -1", to: "/blogs/1" },
  { name: "Blogs -2", to: "/blogs/2" },
  { name: "Blogs -3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <div>
      <h2>Blog Page</h2>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BlogPage;
