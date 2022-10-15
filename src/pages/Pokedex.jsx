import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/Pokedex.css'

const Pokedex = () => {
  const userStyle = useSelector(state => state.userStyle)
  const userGender = useSelector(state => state.userGender)
const [pokemon,setpokemon]= useState()
const userName = useSelector(state => state.userName)
const trainerImgage = `/Trainers/${userStyle}.png`
useEffect(() => {
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  axios.get(URL)
  .then(res => setpokemon(res.data.reult))
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
      <div className="pokedeGrid"><h1>aqui van los pokemon</h1></div>

    </div>
  )
}

export default Pokedex