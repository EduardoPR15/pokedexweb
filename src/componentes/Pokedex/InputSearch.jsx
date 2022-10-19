import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

const navigate = useNavigate()



const submit = e => {
    e.preventDefault()
console.log(e.target.search.value)
navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
//navigate(`/pokedex`)
}


  return (
    <div className='searchDiv'>
        <form onSubmit={submit}>
            <input id='search' type="text" />
            <button className='btnicon'>.</button>
        </form>
    </div>
  )
}

export default InputSearch