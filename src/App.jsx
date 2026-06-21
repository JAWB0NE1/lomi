import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Mp from './components/Mp'
import Min from './components/Min'
import Cu from './components/Cu'
import Mmi from './components/Mmi'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero/>} ></Route>
      <Route path='/mp' element={<Mp/>} ></Route>
      <Route path='/min' element={<Min/>} ></Route>
      <Route path='/cu' element={<Cu/>} ></Route>
      <Route path='/mmi' element={<Mmi/>} ></Route>
    </Routes>
  )
}
