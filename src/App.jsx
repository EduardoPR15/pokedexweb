import { Navigate, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexID from './pages/PokedexID'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div className="App">      
    <div className="pokeTitle"><img src="/Pokedex.png" alt="" /></div>
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>} />
            <Route path='/pokedex/:id' element={<PokedexID/>} />
          </Route>    

      </Routes>
      </div>
      <footer className='footerPoke'>Intentar poner pokemon fav</footer>
    </div>
  )
}

export default App
