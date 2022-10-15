import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserName } from '../store/slices/userName.slice'

const Home = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const handleClickHome = e =>{
  e.preventDefault()
  dispatch (setUserName(e.target.name.value.trim()))
 console.log(e.target.name.value)
navigate('/pokedex')
 
}


  return (
    <div>
      <div className="trainergender">
        <h1>que eres</h1>
        <h2>entrenador</h2> <h2>entrenadora</h2>
        <div className="trainerFimgs"><h1>elige tu estilo</h1><h2>imagenes de entrenadoras</h2></div>
        <div className="trainerMimg"><h1>elige tu estilo</h1><h2>imagenes de entrenadores</h2></div>
      </div>
            <h1>POKEDEX</h1>
            <h2>Hola ingresa tu nombte</h2>
            <form onSubmit={handleClickHome} >
            <input id='name' type="text" />
            <button>play</button>
            </form>
    </div> 

  )
}

export default Home