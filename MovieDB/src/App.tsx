import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import Root from "./pages/Root";
import { fetchMovieDetails, fetchMovies } from "./services/ApiCall";
import { FavoritesProvider } from "./context/FavoritesContext";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: "home",
        element: <HomePage />,
        loader: fetchMovies
      },
      {
        path: '/details/:id',
        element: <DetailsPage />,
        loader: fetchMovieDetails
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
          
      },
    ],
  },
]);


function App() {

  return <FavoritesProvider> {/* Biztosítja a kedvencek contextet */}
    <RouterProvider router={route} />
  </FavoritesProvider>
}

export default App
