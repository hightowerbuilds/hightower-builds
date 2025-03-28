import WebDev from './pages/WebDev/WebDev'
import Store from './pages/Clothing/Store'
import HomePage from './pages/HomePage/HomePage'
import Contact from './pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Photography from './pages/Photography/Photography'

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/webdev" element={<WebDev />} />
      <Route path="/store" element={<Store />} />
      <Route path='/photography' element={<Photography />} />
    </ Routes>
  
  )
}

export default App
