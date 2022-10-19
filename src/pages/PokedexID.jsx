import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InputSearch from '../componentes/Pokedex/InputSearch'
import PokeError404 from '../componentes/PokedexID/PokeError404'
import '../styles/PokemonCard.css'
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

console.log(pokemonID)
const classType = `tipeContainer bg-${pokemonID?.types[0].type.name}`
function bgclas (length){
  if (typesleng === 2) {
  let classType2 = `-${pokemonID?.types[1].type.name}`
  let classTyp3 = classType + classType2
  return classTyp3
}else
return classType

}
const progresStyle = {
  width: (pokemonID?.stats[0].base_stat ),
  color: 'red'
}
const progresStyle1 = {
  width: (pokemonID?.stats[1].base_stat),
  color: 'red'
}
const progresStyle2 = {
  width: (pokemonID?.stats[2].base_stat),
  color: 'red'
}
const progresStyle3 = {
  width: (pokemonID?.stats[3].base_stat),
  color: 'red'
}
const progresStyle4 = {
  width: (pokemonID?.stats[4].base_stat),
  color: 'red'
}
const progresStyle5 = {
  width: (pokemonID?.stats[5].base_stat ),
  color: 'red'
}
if(pokeError){
  return <PokeError404/>
}

return (
    <div>
      <InputSearch/>
      
      <div className='avatar'>
        <div className="trainerStyleOn">
        <img src={trainerImgage} alt="" />
        </div>
        <div className="avatarName"> <p>{userName}</p></div>
      </div>
 <div className="IDpokeSprite">
          <img src={pokemonID?.sprites.front_default} alt="" />
        </div>
      <div className="IDprincipal">
        <div className="IDeffect">
          <div className="IDbg">
            
              <div className="IDpokeIMG">
                  <img src={pokemonID?.sprites.other["official-artwork"].front_default} alt="" />
              </div>
              <div className="IDpokeName">
               <h3>#{pokemonID?.id} {pokemonID?.name} </h3>
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
                
                      <span className={`IDstats ${classType}C`}>{pokemonID?.stats[0].stat.name}</span> <div className="progresLine"> <div style={progresStyle} className={` ValueStat ${classType}Cs`}></div><span>{pokemonID?.stats[0].base_stat}</span></div> 
                      <span className={`IDstats ${classType}C`}>{pokemonID?.stats[1].stat.name}</span> <div className="progresLine"> <div style={progresStyle1} className={` ValueStat ${classType}Cs`}></div><span>{pokemonID?.stats[1].base_stat}</span></div> 
                      <span className={`IDstats ${classType}C`}>{pokemonID?.stats[2].stat.name}</span> <div className="progresLine"> <div style={progresStyle2} className={` ValueStat ${classType}Cs`}></div><span>{pokemonID?.stats[2].base_stat}</span></div> 
                      <span className={`IDstats ${classType}C`}>{pokemonID?.stats[5].stat.name}</span> <div className="progresLine"> <div style={progresStyle5} className={` ValueStat ${classType}Cs`}></div><span>{pokemonID?.stats[5].base_stat}</span></div>
                      <span className={`IDstats ${classType}C`}>{pokemonID?.stats[3].stat.name}</span> <div className="progresLine"> <div style={progresStyle3} className={` ValueStat ${classType}Cs`}></div><span>{pokemonID?.stats[3].base_stat}</span></div> 
                      <span className={`IDstats ${classType}C`}>{pokemonID?.stats[4].stat.name}</span> <div className="progresLine"> <div style={progresStyle4} className={` ValueStat ${classType}Cs`}></div><span>{pokemonID?.stats[4].base_stat}</span></div>
                {/* {
                        pokemonID?.stats.map(stat =>(
                          <li key={stat.name}>
                           <span>{stat.stat.name}</span> <span>{stat.base_stat}</span>
                           </li>
                        ))
                      } */}
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
  )
}

export default PokedexID