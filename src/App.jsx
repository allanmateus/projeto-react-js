import { useState } from 'react'
import './App.css'
import { Link, BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'

function App() {
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()
  return (
    <div className='App'>
        <Router>
            <Navbar/>
            <Routes>
              <Container customClass = 'min-height'>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/contact" element={<Contact/>}/>
                <Route path= "/company" element={<Company/>}/>
                <Route path= "/newproject" element={<NewProject/>}/>
              </Container>
            </Routes>
        </Router>
    </div>
  )
}

export default App
