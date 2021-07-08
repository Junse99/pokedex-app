import React from 'react'

export const PokemonCard = ({ name, image }) => {

  return (
    <div className='a-card-pokemon'>
      <img 
        alt={`Imágen de ${name}`} 
        src={ image } 
        className='a-card-pokemon__image'
      />
    </div>
  )
}
