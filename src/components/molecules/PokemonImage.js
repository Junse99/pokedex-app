import React from 'react'
import { PokemonTitle } from '../atoms/PokemonTitle'
import imagen2 from '../../assets/pokedex.png'

export const PokemonImage = ({ name='Default', image, icon }) => {


  return (
    <section className='m-image-pokemon__container'>

      <PokemonTitle 
        name={ name }
      />
      
      <img 
        alt={`pokemon ${name}`} 
        src={ image }
        className='m-image-pokemon__img'
      />
    </section>
  )
}
