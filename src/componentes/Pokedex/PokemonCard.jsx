import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {

const [pokemon, setPokemon] = useState()
const navigate = useNavigate()

useEffect(() => {
  axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err =>console.log(err))

}, [])

//console.log(pokemon)
const typesleng = pokemon?.types.length
//console.log(typesleng);

const classType = `bg-${pokemon?.types[0].type.name}`
function bgclas (length){
  if (typesleng === 2) {
  let classType2 = `-${pokemon?.types[1].type.name}`
  let classTyp3 = 'tipeContainer '+ classType + classType2
  return classTyp3
}else
return classType

}
const pokeBG = bgclas(typesleng)
//console.log(bgclas(typesleng))
const moveTo = () =>{
  //console.log('ola');
  navigate(`/pokedex/${pokemon.id}`)
}
  return (
    <div onClick={moveTo} className="principal">
        <div className="bgcard">
            <div className= {pokeBG}>
                <div className="pokeName">
                  <span>{pokemon?.name}</span>
                    <div className="pokeIMG">
                      <img src={pokemon?.sprites.other.home.front_default} alt="" />
                    </div>
                </div>   
                </div>        
                    <div className="pokeInfo">
                      {
                        pokemon?.types.map(type => (
                          <div className="divname">
                          <li key={type.slot}>{type.type.name}</li>
                          </div>
                        ))
                      }

                    </div>
                    <div className="pokeStats">
                      
                      {
                        pokemon?.stats.map(stat =>(
                              <div className="divgrid">
                              <div className="statname">
                           <span>{stat.stat.name}</span>
                            </div>
                            <div className="statevalue">
                           <span>{stat.base_stat}</span>
                           </div>
                           </div>
                          
                           
                        ))
                      }

                    </div>
               
        </div>
    </div>
  )
}

export default PokemonCard