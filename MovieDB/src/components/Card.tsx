import React from 'react';
import { MovieType } from '../model/movieType';
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

type Props = {
    movie: MovieType;
};

const Card: React.FC<Props> = ({ movie }) => {
    const { isFavorite } = useFavorites();
    const favoriteStatus = isFavorite(movie.imdbID);

    const navigate = useNavigate();
    const handleViewClick = () => {
        navigate(`/details/${movie.imdbID}`);
    };  


    return (
        <div className={`rounded-2xl w-96 overflow-hidden shadow-xl m-4 flex flex-col ${favoriteStatus ? 'bg-slate-400' : 'bg-white'}`}>
            <img className="w-full h-5/6 object-cover transition-transform duration-300 hover:scale-105" src={movie.Poster} alt={movie.Title} />
            <div className="p-6 ">
                <div className="font-bold text-lg ">{movie.Title}</div>
                <p className="text-gray-700 text-base">{movie.Year}</p>
                <div className=" pt-5 text-center">
                    <p className="bg-gray-300 text-gray-800 py-1 px-2 rounded-full inline-block text-center font-semibold ">
                        #  {movie.Type}
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-auto mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-7 rounded-full flex items-center  gap-2"
                    onClick={handleViewClick}
                >
                    View
                    <FaEye />
                </button>

            </div>
        </div>
    );
};

export default Card;
