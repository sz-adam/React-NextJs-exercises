import { Suspense, useState } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { fetchMovies, fetchMoviesBySearch } from '../services/ApiCall';
import { MovieType } from '../model/movieType';
import Search from '../components/Search';

// loader
export async function loader() {
  return fetchMovies();
}

const HomePage = () => {
  const movies = useRouteLoaderData("home") as Promise<MovieType[]>;
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (searchTerm: string) => {
    setLoading(true);
    if (searchTerm) {
      try {
        const fetchedMovies = await fetchMoviesBySearch(searchTerm);
        setFilteredMovies(fetchedMovies);
      } catch (error) {
        console.error("Error searching movies:", error);
        setFilteredMovies([]);
      }
    } else {
      setFilteredMovies([]);
    }
    setLoading(false);
  };
  return (
    <div>
      <div className='flex justify-center mt-4'>
        <Search onSearch={handleSearch} />
      </div>
      <Suspense fallback={<p className='text-3xl font-bold mt-1'>Loading movies...</p>}>
        <Await resolve={movies}>
          {(loadedMovies: MovieType[]) => (
            <div className="flex flex-wrap gap-4 justify-center">
              {loading ? (  // betöltési üzenet
                <p className='text-3xl font-bold mt-1'>Loading search results...</p>
              ) : (
                <>
                    {/* Ha van keresési eredmény, akkor azt jelenítjük meg, egyébként az alapértelmezett betöltött filmeket */}
                  {(filteredMovies.length > 0 ? filteredMovies : loadedMovies).map((movie: MovieType) => (
                    <Card key={movie.imdbID} movie={movie} />
                  ))}                 
                </>
              )}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default HomePage;
