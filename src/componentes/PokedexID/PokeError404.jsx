import React from 'react'
import { Link } from 'react-router-dom'

const PokeError404 = () => {
  return (
    <>
    <div>PokeError404\
        <div className="errorIMG">
            <img src="./error2.png" alt="" />
        </div>
        <Link to ='/pokedex'><button>atras</button></Link>
        
    </div>
    </>
  )
}

export default PokeError404