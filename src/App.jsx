import { useState } from 'react'
import './App.css'
//import './components/HelloWorld'
//import HelloWorld from './components/HelloWorld'
//import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  return (
    <>
      <div>
        <h1>Testando eventos</h1>
        <Evento numero={1}/>
        <Evento numero={2}/>
      </div>

      <Form/>
    </>
  )
}

export default App
