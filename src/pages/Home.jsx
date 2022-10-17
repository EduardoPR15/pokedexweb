import React from 'react'
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
console.log(randomProfesor);
const randomProfImg = `./Profesor/${randomProfesor}.png`
const handleClickHome = e =>{
  
  e.preventDefault()
  dispatch (setUserName(e.target.name.value.trim()))
  console.log(e.target.name.value)
  console.log('play');
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
console.log(userGender)
console.log(userStyle);
function profesorPokemon(prof) {
if (randomProfesor === 1) {
  let profData = ['Oak','Profesor']
  return profData
}
if (randomProfesor === 2) {
  let profData = ['Elm','Profesor']
  return profData
}
if (randomProfesor === 3) {
  let profData = ['Abedul','Profesor']
  return profData
}
if (randomProfesor === 4) {
  let profData = ['Serbal','Profesor']
  return profData
}
if (randomProfesor === 5) {
  let profData = ['Encina','Profesora']
  return profData
}
if (randomProfesor === 6) {
  let profData = ['Cipres','Profesor']
  return profData
}
if (randomProfesor === 7) {
  let profData = ['Kukui','Profesor']
  return profData
}
if (randomProfesor === 8) {
  let profData = ['Magnolia','Profesora']
  return profData
}

}
const profdatas =[(profesorPokemon(randomProfesor))]
console.log(profdatas[0][0]);
  return (
    <div>
      <div className="trainergender">
        <p>Hola!, esta es la pokedex nacional</p>
        <p>Me llamo {profdatas[0][0]} y soy {profdatas[0][1]} Profesor Pokemon</p>
        <div className="profesor">
          <img src={randomProfImg} alt="" />
        </div>
        <div className="trainerMale">
          <div className="maleImg"></div>
            <h2>entrenador <button onClick={selectMale}>click</button></h2>
        </div>
        <div className="trainerFemale">
          <div className="femaleImg"></div>
            <h2>entrenadora<button onClick={selectFemale}>click</button> </h2>
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