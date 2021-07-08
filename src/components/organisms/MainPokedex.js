import React, { useContext } from 'react'
import { pokemons } from '../../assets/pokemon'
import { PokemonContext } from '../../services/pokemonContext'
import { PokemonImage } from '../molecules/PokemonImage'
import { PokemonInfo } from '../molecules/PokemonInfo'

export const MainPokedex = () => {

  const { pokemon:active } = useContext( PokemonContext )
  
  const pokemon = pokemons[ active.active ]


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
