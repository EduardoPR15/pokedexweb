import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/Pokedex.css'
import PokemonCard from '../componentes/Pokedex/PokemonCard'

const Pokedex = () => {
  const userStyle = useSelector(state => state.userStyle)
  const userGender = useSelector(state => state.userGender)
const [pokemon,setpokemon]= useState()
const userName = useSelector(state => state.userName)
const trainerImgage = `/Trainers/${userStyle}.png`

const limit4 = 4
const limit8 = 8
const limit12 = 12
const limit16 =16
const limit20 = 20
const limitAll =100

useEffect(() => {
const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limitAll}&offset=0`
  axios.get(URL)
  .then(res => setpokemon(res.data.results))
  .catch(err => console.log(err))
}, [])

console.log(pokemon)


  return (
    <div className='PokedexContainer'>
      <article> 
      <h1>pokedex nacional de la generacion 1 hasta la 8</h1>
      <h2>y algunos conocidos de la 9na generacion</h2>
      <p>Hola </p>{ userGender === 'Male'? <span>Entrenador</span>  : <span>Entrenadora</span> } <p>{userName}</p></article>
      <div className='avatar'>
        <div className="trainerStyleOn">
        <img src={trainerImgage} alt="" /><p>{userName}</p>
        </div>
      </div>
      <main className="pokedeGrid1" >
      <div className="pokedeGrid">
        <div className="pokemonCard">
          {
            pokemon?.map(pokemonSingular => (
              <PokemonCard 
              key={pokemonSingular.url} 
              url={pokemonSingular.url}
              />
            ))
          }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Pokedex