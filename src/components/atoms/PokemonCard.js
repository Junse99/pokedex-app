import React, { useContext } from 'react'
import { PokemonContext } from '../../services/pokemonContext'

export const PokemonCard = ({ name, image, position }) => {

  const { setPokemon } = useContext( PokemonContext )

  const handleSelected = ( pos ) => {
    setPokemon({
      active: pos
    })
  }

  return (
    <div className='a-card-pokemon' onClick={() => handleSelected( position )}>
      <img 
        alt={`Imágen de ${name}`} 
        src={ image } 
        className='a-card-pokemon__image'
      />
    </div>
  )
}
