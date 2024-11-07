import { useLoaderData } from 'react-router-dom';
import { MovieDetailsType } from '../model/movieType';
import DetailsCard from '../components/MovieDetails/DetailsCard';

const DetailsPage = () => {
  const movie = useLoaderData() as MovieDetailsType;

  return (
    <DetailsCard detailsMovie={movie} />
  );
};

export default DetailsPage;
