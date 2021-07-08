import React, { useState } from 'react'
import { FooterPokedex } from '../components/organisms/FooterPokedex'
import { HeaderPokedex } from '../components/organisms/HeaderPokedex'
import { MainPokedex } from '../components/organisms/MainPokedex'
import { PokemonContext } from '../services/pokemonContext'

const Pokedex = () => {

  const [ pokemon, setPokemon ] = useState({ active: 0 })

  return (
    <PokemonContext.Provider value={{
      pokemon, setPokemon
    }}>
      <div className='p-container'>
        <HeaderPokedex />
        <MainPokedex />
        <FooterPokedex />
      </div>
    </PokemonContext.Provider>
  )
}

export default Pokedex;
