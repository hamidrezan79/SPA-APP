import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundedPage from "./Pages/NotFoundedPage";
import BlogPage from "./Pages/BlogPage";
import Blog from "./components/Blog";
import PostPage from "./Pages/PostPage";
const routes = [
  { path: "/blogs/:id", Component: Blog },
  { path: "/about-us", Component: AboutUsPage },
  { path: "/profile", Component: ProfilePage },
  { path: "/blogs", Component: BlogPage },
  { path: "/posts/:id?", Component: PostPage },
  { path: "*", Component: NotFoundedPage },
  { path: "/", Component: HomePage, exact: true },
];

export default routes;
