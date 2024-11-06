import { useLoaderData } from 'react-router-dom';
import { MovieDetailsType } from '../model/movieType';

const DetailsPage = () => {
  const movie = useLoaderData() as MovieDetailsType;

  return (
    <div>
      <h1>{movie.Title}</h1>   
    </div>
  );
};

export default DetailsPage;
