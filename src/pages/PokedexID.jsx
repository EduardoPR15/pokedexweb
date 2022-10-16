import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InputSearch from '../componentes/Pokedex/InputSearch'
import PokeError404 from '../componentes/PokedexID/PokeError404'

const PokedexID = () => {
  const userStyle = useSelector(state => state.userStyle)
  const trainerImgage = `/Trainers/${userStyle}.png`
  const userName = useSelector(state => state.userName)

const {id}  = useParams()

const [pokemonID, setPokemonID] = useState()
const [pokeError, setPokeError] = useState(false)

useEffect(() => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
  axios.get(URL)
    .then(res => setPokemonID(res.data))
    .catch(err => {
      console.log(err)
      setPokeError(true)
    })

}, [])

//console.log(pokemonID)
  
if(pokeError){
  return <PokeError404/>
}

return (
    <div>
      <InputSearch/>
      <h2> nombre del pokemon</h2>
      <div className='avatar'>
        <div className="trainerStyleOn">
        <img src={trainerImgage} alt="" />
        
        </div>
        <div className="IDpokeSprite">
          <img src={pokemonID?.sprites.front_default} alt="" />
        </div>
        <div className="avatarName"> <p>{userName}</p></div>
      </div>

      <div className="IDprincipal">
        <div className="IDeffect">
          <div className="IDbg">
            <div className="IDpokeName">
              <h3>ID {id} {pokemonID?.name} </h3>
              <div className="IDpokeIMG">
                  <img src={pokemonID?.sprites.other["official-artwork"].front_default} alt="" />
              </div>
              <div className="IDpokeinfo">
                <div className="IDpokeTypes">
                {
                        pokemonID?.types.map(type => (
                          <li key={type.slot}>{type.type.name}</li>
                        ))
                      }
                </div>
                <div className="IDpokeStats">
                {
                        pokemonID?.stats.map(stat =>(
                          <li key={stat.name}>
                           <span>{stat.stat.name}</span> <span>{stat.base_stat}</span>
                           </li>
                        ))
                      }
                </div>
                <div className="IDpokeGames">
                  {
                    pokemonID?.game_indices.map(game =>(
                      <li> {game.version.name}</li>
                    ))
                  }
                </div>
                lo que sea necesario
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokedexID