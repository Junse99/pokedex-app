import React from 'react'

export const PokemonTitle = ({ name }) => {
  return (
    <div className='a-image-pokemon__container'>
      <h1 className='a-image-pokemon__container--title'>{ name.toUpperCase() }</h1>
    </div>
  )
}
