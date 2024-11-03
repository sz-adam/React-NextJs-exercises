import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { fetchMovies } from '../services/ApiCall';
import { MovieType } from '../model/movieType';

// loader
export async function loader() {
  return fetchMovies();
}

const HomePage = () => {
  const movies = useRouteLoaderData("home") as Promise<MovieType[]>; 
  console.log(movies)

  return (
    <div>
      <Suspense fallback={<p className='text-3xl font-bold mt-1'>Loading movies...</p>}>
        <Await resolve={movies}>
          {(loadedMovies: MovieType[]) => ( 
            <div className="flex flex-wrap gap-4 justify-center">
              {Array.isArray(loadedMovies) && loadedMovies.length > 0 ? (
                loadedMovies.map((movie: MovieType) => ( 
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
