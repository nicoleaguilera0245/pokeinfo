import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
    height: number;
    weight: number;
}

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
    try {
        const response = await api.get<Pokemon>(`pokemon/${name.toLowerCase()}`);
        return response.data;
    } catch (error) {
        throw new Error('Pokémon não encontrado. Verifique o nome e tente novamente.');
    }
};
