import axios from 'axios';
import { json } from "react-router-dom";
import { MovieType } from '../model/movieType';

async function fetchMovies(): Promise<MovieType[]> {
    try {
        const types = ['movie', 'series', 'episode'];
        const allMovies: MovieType[] = []; // Összes film

        for (const type of types) {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}?s=action&type=${type}&apikey=${import.meta.env.VITE_API_KEY}`);
            const result = response.data;
            if (result.Search) {
                allMovies.push(...result.Search);
            }
        }

        // Véletlenszerű film kiválasztása
        return selectRandomMovies(allMovies);
    } catch (error: any) {
        console.error("Error fetching movies:", error);
        throw json({ message: "Could not fetch events" }, { status: 500 });
    }
}

async function fetchMoviesBySearch(searchTerm: string): Promise<MovieType[]> {
    try {
        const types = ['movie', 'series', 'episode'];
        const allMovies: MovieType[] = [];

        for (const type of types) {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}?s=${searchTerm}&type=${type}&apikey=${import.meta.env.VITE_API_KEY}`);
            const result = response.data;
            if (result.Search) {
                allMovies.push(...result.Search);
            }
        }

        return allMovies;
    } catch (error: any) {
        console.error("Error fetching movies by search:", error);
        throw json({ message: "Could not fetch events" }, { status: 500 });
    }
}

// Véletlenszerű film kiválasztása
const selectRandomMovies = (movieList: MovieType[]) => {
    const shuffled = movieList.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    return selected;
}

export { fetchMovies, fetchMoviesBySearch };
