
import './App.css'
import CartTab from './components/CartTab'
import Header from './components/Header'
import Layout from './components/Layout'
import Details from './pages/Details'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/:slug' element={<Details/>}/>
        
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
