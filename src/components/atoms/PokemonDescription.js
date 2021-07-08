import React from 'react'

export const PokemonDescription = ({ title, description }) => {
  return (
    <div className='a-description-pokemon__container'>
      <h3>{ title.toUpperCase() }</h3>
      <p>{ description.toString().toUpperCase() }</p>
    </div>
  )
}
