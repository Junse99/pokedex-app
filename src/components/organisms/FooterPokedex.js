import React from 'react'
import { PokemonList } from '../molecules/PokemonList'

export const FooterPokedex = () => {
  return (
    <footer className='o-footer'>
      <div className='o-footer__container'>

        <h2>OTHERS</h2>
        <PokemonList />

      </div>
    </footer>
  )
}
