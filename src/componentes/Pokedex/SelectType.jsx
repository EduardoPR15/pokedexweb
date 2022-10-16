import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setURLtype}) => {

    const [typesPoke, settypesPoke]= useState()
    useEffect(() => {
      const URL = 'https://pokeapi.co/api/v2/type'
      axios.get(URL)
      .then( res => settypesPoke(res.data.results))
      .catch(err => console.log(err))
    }, [])
    

const change = e =>{
    setURLtype(e.target.value);
    //console.log(e.target.value);

}
  return (
    <div>
        <select onChange={change}>
            <option value="All">All</option>
            
            {
                typesPoke?.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }

        </select>
    </div>
  )
}


export default SelectType