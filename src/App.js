import React from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import "./Style/main.css";

import Card1 from "../src/Assets/card1.png";
import Card2 from "../src/Assets/card2.png";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app-hero">
         <div className="app-hero-inner">
            <h1 className="main-heading">the gift of happiness</h1>
            <p className="para">show your grattitude with one of our gift sets, large and small, specially designed to spread joy to someone you love</p>
            <button className="btn">Shop now</button>
         </div>
      </div>
      <div className="app-cards">
          <Card img={Card1} />
          <Card img={Card2} />
      </div>
    </div>
  )
}

export default App
