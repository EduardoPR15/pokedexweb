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
    <h2>the pokedex</h2>
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>} />
            <Route path='/pokedex/:id' element={<PokedexID/>} />
          </Route>    

      </Routes>
      </div>
    </div>
  )
}

export default App
