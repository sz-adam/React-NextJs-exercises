import React, { useEffect } from 'react'
import { MovieDetailsType } from '../../model/movieType';
import { useNavigate } from 'react-router-dom';
import DetailsAdditionalInfo from './DetailsAdditionalInfo';
import { FaRegHeart } from "react-icons/fa";

type Props = {
  detailsMovie: MovieDetailsType
}

const DetailsCard: React.FC<Props> = ({ detailsMovie }) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(".."); // Visszavisz az előző oldalra
  };

  const AdditionalInfo = [
    { title: 'Actors', value: detailsMovie.Actors },
    { title: 'Director', value: detailsMovie.Director },
    { title: 'Box Office', value: detailsMovie.BoxOffice },
    { title: 'Country', value: detailsMovie.Country }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-8">
      {/* Background kép */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${detailsMovie.Poster})` }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col items-center">
        {/* Movie Poster */}
        <div className="flex flex-col md:flex-row items-center w-full md:justify-between">          <img
          src={detailsMovie.Poster}
          alt={detailsMovie.Title}
          className="w-60 rounded-lg shadow-lg mb-4"
        />
          {/* Movie Title */}
          <div className="flex-col w-full ">
            <h1 className="text-3xl font-bold text-center mb-2">
              {detailsMovie.Title}
            </h1>

            {/* Movie Details */}
            <p className="text-gray-400 text-center mb-2">
              {detailsMovie.Year} | {detailsMovie.Genre} | {detailsMovie.Runtime}
            </p>
            <p className="text-yellow-400 text-center font-semibold mb-6">
              IMDb Rating: {detailsMovie.imdbRating} / 10
            </p>
          </div>
        </div>

        {/* Plot */}
        <div className="bg-gray-700 bg-opacity-80 p-4 rounded-lg w-full mb-6">
          <h2 className="text-xl font-semibold mb-2">Plot</h2>
          <p className="text-gray-300">{detailsMovie.Plot}</p>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {AdditionalInfo.map((detail, index) => (
            <DetailsAdditionalInfo key={index} title={detail.title} value={detail.value} />
          ))}
        </div>

        {/* Ratings */}
        <div className="mt-6 w-full">
          <h2 className="text-xl font-semibold mb-2">Ratings</h2>
          <div className="flex flex-col space-y-2">
            {detailsMovie.Ratings.map((rating, index) => (
              <p key={index} className="text-gray-300">
                <span className="font-semibold">{rating.Source}:</span>{" "}
                {rating.Value}
              </p>
            ))}
          </div>
        </div>

        {/* Button */}

        <div className="flex flex-col md:flex-row items-center mt-2">
          <button className="flex items-center px-6 py-2 mx-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300  md:w-auto text-lg mb-3 md:mb-0">
            Add Favorites <FaRegHeart className='ml-3' />
          </button>

          {/**Back Button */}
          <button
            onClick={handleBackClick}
            className="bg-white text-center w-48 rounded-full h-10 relative text-black text-xl font-semibold group overflow-hidden "
            type="button"
          >
            <div
              className="bg-green-400 rounded-full h-10 w-full flex items-center justify-center absolute top-0 left-0 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"
            >

            </div>
            <span className="relative z-20">Go Back</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default DetailsCard