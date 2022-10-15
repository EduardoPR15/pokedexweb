import axios from 'axios'

import React, { useEffect, useState } from 'react'

const PokemonCard = ({url}) => {

const [pokemon, setPokemon] = useState()

useEffect(() => {
  axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err =>console.log(err))

}, [])

console.log(pokemon)


const classType = `bg-${pokemon?.types[0].type.name}`

  return (
    <div className="principal">
        <div className="bgcard">
            <div className={classType}>
                <div className="pokeName">
                  <span>{pokemon?.name}</span>
                    <div className="pokeIMG">
                      <img src={pokemon?.sprites.other.home.front_default} alt="" />
                    </div>
                    <div className="pokeInfo">
                      <span>tipo {pokemon?.types[0].type.name}</span>
                      {
                        pokemon?.types.map(type => (
                          <li>{type.type.name}</li>
                        ))
                      }

                    </div>
                    <div className="pokeStats">
                      <span>estadisticas</span>

                    </div>
                    .
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokemonCard