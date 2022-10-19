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
const [Show, setShow] = useState('')
const [Unshow, setUnshow] = useState('')
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
  setShow('TrainerShowM')
  setUnshow('FUnshow')
}
const selectFemale = () =>{
  dispatch(setUserGender('Female'))
  setShow('TrainerShowF')
  setUnshow('MUnshow')
}
const selectedStyle = e =>{
  dispatch(setUserStyle(e.target.id))
}
//console.log(userGender)
//console.log(userStyle);
function profesorPokemon(profe) {
if (profe === 1) {
  let profData = ['Oak','PROFESOR']
  return profData
}
if (profe === 2) {
  let profData = ['Elm','PROFESOR']
  return profData
}
if (profe === 3) {
  let profData = ['Abedul','PROFESOR']
  return profData
}
if (profe === 4) {
  let profData = ['Serbal','PROFESOR']
  return profData
}
if (profe === 5) {
  let profData = ['Encina','PROFESORA']
  return profData
}
if (profe === 6) {
  let profData = ['Cipres','PROFESOR']
  return profData
}
if (profe === 7) {
  let profData = ['Kukui','PROFESOR']
  return profData
}
if (profe === 8) {
  let profData = ['Magnolia','PROFESORA']
  return profData
}

}

const profdatas =[(profesorPokemon(profe))]
console.log(profdatas[0][0]);
  return (
    <div>
      <div className="trainergender">
        <div className="textbox1">
          <div className="profesor">
          <img src={randomProfImg} alt="" />
        </div>
          <div className="text1">
        <p>Hola!, esta es la pokedex nacional.</p>
        <p>Me llamo {profdatas[0][0]} Pero la gente me llama </p> <span>{profdatas[0][1]} POKEMON</span>
        <p className='gender' >Dime, eres un chico o una chica</p>
        </div>
        <div className="trainerMale">
          <div className="maleImg"></div>
          <div onClick={selectMale} className="btnTrainer"><p><i className='bx bxs-right-arrow'></i></p><span>CHICO </span></div>
        </div>
        <div className="trainerFemale">
          <div className="femaleImg"></div>
          <div onClick={selectFemale} className="btnTrainer"><p><i className='bx bxs-right-arrow'></i></p><span>CHICA</span></div>
        </div>
        </div>
        </div>

 {/* elegir hombre o mujer */}

        {
          userGender === 'Female' ?
        

        <div className={`TrainerIMGFemale ${Show} ${Unshow}`}><h1>elige tu estilo</h1>
          <div className="TrainerStyles">
            <div className="cardTrainer">
              <div className="Trainer1IMG"><img src="/Trainers/XYF.png" alt="" /></div>
              <div className="btndiv"><button id='XYF' onClick={selectedStyle}> XY</button></div>
            </div>

            <div className="cardTrainer">
              <div className="Trainer1IMG"><img src="/Trainers/EF.png" alt="" /></div>
              <div className="btndiv"><button id='EF' onClick={selectedStyle}> Esmeralda</button></div>
            </div>

            <div className="cardTrainer">  
              <div className="Trainer1IMG"><img src="/Trainers/RF.png" alt="" /></div>  <div className="btndiv">
              <button id='RF' onClick={selectedStyle}> Rojo</button></div>
            </div>  
        
          </div>
        </div>
: userGender === 'Male' ?
        <div className={`TrainerIMGMale ${Show} ${Unshow}`}><h1>elige tu estilo</h1>
          <div className="TrainerStyles">
            <div className="cardTrainer">
              <div className="Trainer1IMG"><img src="/Trainers/RM.png" alt="" /></div>
              <div className="btndiv"><button id='RM' onClick={selectedStyle} >Rojo</button></div>
            </div>
            <div className="cardTrainer">
            <div className="Trainer1IMG"><img src="/Trainers/XYM.png" alt="" /></div>
            <div className="btndiv"><button id='XYM' onClick={selectedStyle} >XY</button></div>
            </div>
            <div className="cardTrainer">
            <div className="Trainer1IMG"><img src="/Trainers/EM.png" alt="" /></div>
            <div className="btndiv"><button id='EM' onClick={selectedStyle} >Esmeralda</button>
            </div>
        </div></div>
              
      </div>
      : <div> </div>
}
      <div className="formDiv">
            <h2>Hola ingresa tu nombte</h2>
            {/* <img src="/rotom2.png" alt="" /> */}
            <form onSubmit={handleClickHome}>
            <input id='name' type="text" />
             {/* <div className="btnrotom"><img src="/rotom1.png" alt="" /></div>  */}
            <button>play</button>
            </form>
      </div>
    </div> 

  )
}

export default Home