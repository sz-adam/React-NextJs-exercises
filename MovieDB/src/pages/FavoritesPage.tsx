import { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { MovieType } from '../model/movieType';
import { fetchFavorites } from '../services/ApiCall';
import Card from '../components/Card';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFavoriteMovies = async () => {
      try {
        const response = await fetchFavorites(favorites);
        setFavoriteMovies(response);
      } catch (error) {
        console.error("Failed to load favorite movies", error);
      }
      setLoading(false);
    };

    loadFavoriteMovies();
  }, [favorites]);

  if (loading) {
    return <p className="text-center text-slate-600 font-bold text-3xl mt-2">Loading your favorite movies...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center mt-2">Your Favorite Movies</h1>
      {favoriteMovies.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {favoriteMovies.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 font-bold text-3xl">You have no favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
