import { Link } from "react-router-dom";
const NotFoundedPage = () => {
  return (
    <div>
      <p>404</p>
      <p>صفحه مورد نظر پیدا نشد</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFoundedPage;
