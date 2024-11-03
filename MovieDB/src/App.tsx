import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import Root from "./pages/Root";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,

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
