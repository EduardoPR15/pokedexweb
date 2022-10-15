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
const typesleng = pokemon?.types.length
console.log(typesleng);

const classType = `bg-${pokemon?.types[0].type.name}`
function bgclas (length){
  if (typesleng === 2) {
  let classType2 = `-${pokemon?.types[1].type.name}`
  let classTyp3 = classType + classType2
  return classTyp3
}else
return classType
}
const pokeBG = bgclas(typesleng)
console.log(bgclas(typesleng))

  return (
    <div className="principal">
        <div className="bgcard">
            <div className={pokeBG}>
                <div className="pokeName">
                  <span>{pokemon?.name}</span>
                    <div className="pokeIMG">
                      <img src={pokemon?.sprites.other.home.front_default} alt="" />
                    </div>
                    <div className="pokeInfo">
                      <span>tipo </span>
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