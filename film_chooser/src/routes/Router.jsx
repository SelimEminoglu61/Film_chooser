import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import FilmPage from "../pages/FilmPage/FilmPage";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/filmlist/:id", element: <FilmPage /> },
  ]);
  return routes;
};

export default Router;
