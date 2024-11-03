import axios from 'axios';
import { json } from "react-router-dom";

async function fetchMovies(): Promise<any[]> {
    try {
        const types = ['movie', 'series', 'episode'];
        const allMovies: any[] = []; // Összes film
      
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

// Véletlenszerű film kiválasztása
const selectRandomMovies = (movieList: any[]) => {   
    const shuffled = movieList.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    return selected;
}

export { fetchMovies };
