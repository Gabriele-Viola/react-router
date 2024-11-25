import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Ricette from './pages/Ricette'
import Home from './pages/Home'
import About from './pages/About'
import DefaultLayout from './Components/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/ricette' element={<Ricette />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
