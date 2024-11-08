import React, { createContext, useContext, useState } from 'react';

type FavoritesContextType = {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    // ID hozzáadása 
    const addFavorite = (id: string) => {
        setFavorites((prev) => [...prev, id]);
    };

    // ID eltávolítása 
    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((favoriteId) => favoriteId !== id));
    };

    // Ellenőrzés, hogy szerepel-e a kedvencek között
    const isFavorite = (id: string) => {
        return favorites.includes(id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = (): FavoritesContextType => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};
