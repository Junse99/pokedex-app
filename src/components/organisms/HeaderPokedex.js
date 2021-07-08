import React from 'react'
import pokedexLogo from '../../assets/pokedex.png'
import pokebola from '../../assets/pokebola.png'

export const HeaderPokedex = () => {
  return (
    <header className='o-header'>
      <img 
        src={ pokebola }
        alt='logo pokedex'
        className='o-header__pokebola'
      />
      <img 
        src={ pokedexLogo }
        alt='logo pokedex'
        className='o-header__image'
      />
    </header>
  )
}
