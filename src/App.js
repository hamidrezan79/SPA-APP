import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout/Layuot";
import routes from "./route";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
