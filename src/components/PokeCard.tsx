import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { Pokemon } from '../services/api';

interface PokeCardProps {
    pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: PokeCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
            <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
            <Text style={styles.text}><b>Altura:</b> {(pokemon.height * 10)} cm</Text>
            <Text style={styles.text}><b>Peso:</b> {(pokemon.weight / 10)} kg</Text>
            <Text style={styles.text}><b>Tipos:</b> {pokemon.types.map(t => t.type.name).join(', ')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
    }
});