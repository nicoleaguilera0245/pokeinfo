import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getPokemonByName, Pokemon } from '../services/api';
import PokeCard from '../components/PokeCard';

export default function HomeScreen() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const handleSearch = async () => {
        try {
            const data = await getPokemonByName(pokemonName);
            setPokemon(data);
        } catch (error) {
            console.error(error);
            setPokemon(null);
        }
    };

    return (
        <View>
            <Text style={styles.title}>PokéInfo</Text>
            
            <TextInput
            placeholder="Digite o nome do Pokémon"
            value={pokemonName}
            onChangeText={setPokemonName}
            style={styles.input}
            />
            <Button title="Buscar" onPress={handleSearch} color="#ffd400" />
            {pokemon && <PokeCard pokemon={pokemon} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    }
});
