import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import Root from "./pages/Root";
import { fetchMovies } from "./services/apiCall";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id:"home",
        element: <HomePage />,
        loader: fetchMovies
      },
      {
        path: "detail/:movieId",
        element: <DetailsPage />,

      },
      {
        path: "favorites",
        element: <FavoritesPage />,

      },
    ],
  },
]);


function App() {

  return <RouterProvider router={route} />;
}

export default App
