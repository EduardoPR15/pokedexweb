import React from 'react'
import '../styles/Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserName } from '../store/slices/userName.slice'
import { setUserGender } from '../store/slices/userGender.slice';
import { setUserStyle } from '../store/slices/userStyle.slice';

const Home = () => {
const userGender = useSelector(state => state.userGender)
const userStyle = useSelector(state => state.userStyle)
const dispatch = useDispatch()
const navigate = useNavigate()
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
  return (
    <div>
      <div className="trainergender">
        <h1>que eres</h1>
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
            
            <footer><h2>ola q ase</h2></footer>
    </div> 

  )
}

export default Home