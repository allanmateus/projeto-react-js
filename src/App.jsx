import './App.css'
import { Link, BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'

function App() {
   return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Container customClass = 'min-height'>
            <Routes>
              <Route path= "/" element={<Home/>}/>
              <Route path= "/contact" element={<Contact/>}/>
              <Route path= "/company" element={<Company/>}/>
              <Route path= "/projects" element={<Projects/>}/>
            </Routes>
        </Container>
        <Footer/> 
      </Router>
    </div>
  )
}

export default App
