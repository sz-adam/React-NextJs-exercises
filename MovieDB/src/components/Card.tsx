import React from 'react';

type Movie = {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
};

type Props = {
    movie: Movie; 
};

const Card: React.FC<Props> = ({ movie }) => {
    return (
        <></>
    );
};

export default Card;
