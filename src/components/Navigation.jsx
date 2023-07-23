import { NavLink } from "react-router-dom";
const items = [
  { name: "Home", to: "/", exact: true },
  { name: "About Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Posts", to: "/posts" },

];
const Navigation = ({ location }) => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to} exact={item.exact || false}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
