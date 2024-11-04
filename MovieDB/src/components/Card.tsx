import React from 'react';
import { MovieType } from '../model/movieType';
import { FaEye } from "react-icons/fa";

type Props = {
    movie: MovieType;
};

const Card: React.FC<Props> = ({ movie }) => {

    return (
        <div className=" rounded overflow-hidden shadow-lg m-4 flex flex-col">
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
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-7 rounded-full flex items-center  gap-2">
                    View
                    <FaEye />
                </button>

            </div>
        </div>
    );
};

export default Card;
