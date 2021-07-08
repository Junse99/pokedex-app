import React from 'react'
import { pokemons } from '../../assets/pokemon'
import { PokemonImage } from '../molecules/PokemonImage'
import { PokemonInfo } from '../molecules/PokemonInfo'

export const MainPokedex = () => {

  const pokemon = pokemons[3]

  return (
    <main className='o-main'>
      <div className='o-main__container'>
        <PokemonImage 
          name={ pokemon.name }
          image={ pokemon.image }
        />
        <PokemonInfo pokemon={ pokemon }/>
      </div>
    </main>
  )
}
