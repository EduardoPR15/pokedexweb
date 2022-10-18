import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserName } from '../store/slices/userName.slice'
import { setUserGender } from '../store/slices/userGender.slice';
import { setUserStyle } from '../store/slices/userStyle.slice';
import getRandom from '../customHooks/getRandom'

const Home = () => {
const userGender = useSelector(state => state.userGender)
const userStyle = useSelector(state => state.userStyle)
const dispatch = useDispatch()
const navigate = useNavigate()
const randomProfesor = getRandom()
//console.log(randomProfesor);
//let profdatas = ''
const [profe, setprofe] = useState(1)
useEffect(() => {
  setprofe(randomProfesor)
}, [])
console.log(profe);
const randomProfImg = `./Profesor/${profe}.png`
const handleClickHome = e =>{
  
  e.preventDefault()
  dispatch (setUserName(e.target.name.value.trim()))
  console.log(e.target.name.value)
  //console.log('play');
  navigate('/pokedex')

}
const selectMale = () =>{
  dispatch(setUserGender('Male'))
}
const selectFemale = () =>{
  dispatch(setUserGender('Female'))
}
const selectedStyle = e =>{
  dispatch(setUserStyle(e.target.id))
}
//console.log(userGender)
//console.log(userStyle);
function profesorPokemon(profe) {
if (profe === 1) {
  let profData = ['Oak','Profesor']
  return profData
}
if (profe === 2) {
  let profData = ['Elm','Profesor']
  return profData
}
if (profe === 3) {
  let profData = ['Abedul','Profesor']
  return profData
}
if (profe === 4) {
  let profData = ['Serbal','Profesor']
  return profData
}
if (profe === 5) {
  let profData = ['Encina','Profesora']
  return profData
}
if (profe === 6) {
  let profData = ['Cipres','Profesor']
  return profData
}
if (profe === 7) {
  let profData = ['Kukui','Profesor']
  return profData
}
if (profe === 8) {
  let profData = ['Magnolia','Profesora']
  return profData
}

}

const profdatas =[(profesorPokemon(profe))]
console.log(profdatas[0][0]);
  return (
    <div>
      <div className="trainergender">
        <div className="profesor">
          <img src={randomProfImg} alt="" />
        </div>
        <div className="textbox1">
        <p>Hola!, esta es la pokedex nacional</p>
        <p>Me llamo {profdatas[0][0]} y soy {profdatas[0][1]} Pokemon</p>
        
        <div className="trainerMale">
          <div className="maleImg"></div>
          <div className="btnTrainer"><span>Entrenador </span><p><i class='bx bx-left-arrow'></i></p></div>
            <button onClick={selectMale}>entrenador <p> flecha </p> </button>
        </div>
        <div className="trainerFemale">
          <div className="femaleImg"></div>
            <h2>entrenadora<button onClick={selectFemale}>click</button> </h2>
        </div>
        </div>
        </div>

 {/* elegir hombre o mujer */}

        {
          userGender === 'Female' ?
        

        <div className="trainerFimgs"><h1>elige tu estilo</h1>
          <div className="TrainerStyles">
            <div className="cardTrainer">
              <div className="femaleIMG"><img src="/Trainers/XYF.png" alt="" /></div>
              <div className="btndiv"><button id='XYF' onClick={selectedStyle}> XY</button></div>
            </div>

            <div className="cardTrainer">
              <div className="femaleIMG"><img src="/Trainers/EF.png" alt="" /></div>
              <div className="btndiv"><button id='EF' onClick={selectedStyle}> Esmeralda</button></div>
            </div>

            <div className="cardTrainer">  
              <div className="femaleIMG"><img src="/Trainers/RF.png" alt="" /></div>  <div className="btndiv">
              <button id='RF' onClick={selectedStyle}> Rojo</button></div>
            </div>  
        
          </div>
        </div>
: userGender === 'Male' ?
        <div className="trainerMimg"><h1>elige tu estilo</h1>
          <div className="TrainerStyles">
            <div className="cardTrainer">
              <div className="femaleIMG"><img src="/Trainers/RM.png" alt="" /></div>
              <div className="btndiv"><button id='RM' onClick={selectedStyle} >Rojo</button></div>
            </div>
            <div className="cardTrainer">
            <div className="femaleIMG"><img src="/Trainers/XYM.png" alt="" /></div>
            <div className="btndiv"><button id='XYM' onClick={selectedStyle} >XY</button></div>
            </div>
            <div className="cardTrainer">
            <div className="femaleIMG"><img src="/Trainers/EM.png" alt="" /></div>
            <div className="btndiv"><button id='EM' onClick={selectedStyle} >Esmeralda</button>
            </div>
        </div></div>
              
      </div>
      : <div> </div>
}
      
            <h1>POKEDEX</h1>
            <h2>Hola ingresa tu nombte</h2>
            <form onSubmit={handleClickHome}>
            <input id='name' type="text" />
            <button>play</button>
            </form>
    </div> 

  )
}

export default Home