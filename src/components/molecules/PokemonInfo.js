import React from 'react'
import { PokemonDescription } from '../atoms/PokemonDescription'

export const PokemonInfo = ({ pokemon }) => {

  return (
    <section className='m-info-pokemon__container'>
      <div className='m-info-pokemon__container--description'>
        <PokemonDescription title='No.' description={pokemon['number']}/>
        <PokemonDescription title='Level' description={pokemon['height']}/>
        <PokemonDescription title='Type' description={pokemon['category']}/>
        <PokemonDescription title='Hability' description={pokemon['hability']}/>
        <PokemonDescription title='Height' description={`${pokemon['height']} m`}/>
        <PokemonDescription title='Weight' description={`${pokemon['weight']} Kg`}/>
      </div>
    </section>
  )
}
