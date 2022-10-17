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

//console.log(pokemon?.stats[0].base_stat)
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
                      <span className='HPstat'>{pokemon?.stats[0].stat.name}</span> <span className='HPvalue'>{pokemon?.stats[0].base_stat}</span>
                      <span className='ATstat'>{pokemon?.stats[1].stat.name}</span> <span className='ATvalue'>{pokemon?.stats[1].base_stat}</span>
                      <span className='DFstat'>{pokemon?.stats[2].stat.name}</span> <span className='DFvalue'>{pokemon?.stats[2].base_stat}</span>
                      <span className='SPstat'>{pokemon?.stats[5].stat.name}</span> <span className='SPvalue'>{pokemon?.stats[5].base_stat}</span>
                      <span className='SATstat'>{pokemon?.stats[3].stat.name}</span> <span className='SATvalue'>{pokemon?.stats[3].base_stat}</span>
                      <span className='SDFstat'>{pokemon?.stats[4].stat.name}</span> <span className='SDFvalue'>{pokemon?.stats[4].base_stat}</span>
                      {/* <p>{pokemon?.stats[0]}</p>
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
                      } */}

                    </div>
               
        </div>
    </div>
  )
}

export default PokemonCard