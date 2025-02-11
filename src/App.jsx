import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <div>

        <div className="header">
          <h2 className="logo">Jumy</h2>
          <nav className="navbar">
            <a href="#">Acceuil</a>
            <a href="#">A propos</a>
            <a href="#">services</a>
            <a href="#">contact</a>
            <a href="#" className="btn">devis gratuit</a>
          </nav>
        </div>

        <div className="banner">
          <div className="container">
            <span>- Jumael Kamga -</span>
            <h2 className="title">Developpeur Front-End & <br /> UI/UX Designer</h2>
            <div className="btn">
              <a href="tel:237679454785">Voir mon CV</a>
            </div>
          </div>
        </div>

        </div>
    </>
  )
}

export default App
