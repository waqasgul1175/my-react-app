// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'   // Yeh line bhool gaye the!
import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Textform from './components/TextForm.jsx'  
import About from './components/about.jsx'

export default function App() {
  return (
    
    <BrowserRouter>
      <div className="container">
        <Navbar title="Website of Waqas" aboutText="About Us" />  
       <div className="container my-4">
        <Textform headings="The text to analyze " />
       </div>
      </div>
     
      <About />
    </BrowserRouter>
  )
}
