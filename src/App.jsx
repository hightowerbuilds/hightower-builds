import WebDev from './pages/WebDev'
import Painting from './pages/Painting'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/webdev" element={<WebDev />} />
    <Route path="/painting" element={<Painting />}/>
  </ Routes>
  )
}

export default App
