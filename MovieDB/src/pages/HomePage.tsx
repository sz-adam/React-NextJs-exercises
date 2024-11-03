import { Suspense } from 'react';
import { fetchMovies } from '../services/apiCall';
import { Await, useRouteLoaderData } from 'react-router-dom';
import Card from '../components/Card';

// loader
export async function loader() {
  return fetchMovies();
}

const HomePage = () => {
  const movies = useRouteLoaderData("home");
  console.log(movies)

  return (
    <div>
      <Suspense fallback={<p className='text-3xl font-bold mt-1'>Loading movies...</p>}>
        <Await resolve={movies}>
          {(loadedMovies: any) => (
            <div className="flex flex-wrap gap-4 justify-center">
              {Array.isArray(loadedMovies) && loadedMovies.length > 0 ? (
                loadedMovies.map((movie: any) => (
                  <Card key={movie.imdbID} movie={movie} />
                ))
              ) : (
                <p className='text-3xl font-bold mt-1'>No movies found.</p>
              )}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default HomePage;
