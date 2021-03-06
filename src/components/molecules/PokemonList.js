import React from 'react'
import { pokemons } from '../../assets/pokemon'
import { PokemonCard } from '../atoms/PokemonCard'

export const PokemonList = () => {
  return (
    <div className='m-list-pokemon'>
      {
        pokemons.map((pokemon, index) => <PokemonCard key={pokemon.number} image={ pokemon.image } name={ pokemon.name } position={ index }/>)
      }
    </div>
  )
}
