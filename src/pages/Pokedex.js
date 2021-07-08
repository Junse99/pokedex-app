import React from 'react'
import { FooterPokedex } from '../components/organisms/FooterPokedex'
import { HeaderPokedex } from '../components/organisms/HeaderPokedex'
import { MainPokedex } from '../components/organisms/MainPokedex'

const Pokedex = () => {
  return (
    <div className='p-container'>

        <HeaderPokedex />
        <MainPokedex />
        <FooterPokedex />
 
    </div>
  )
}

export default Pokedex;
