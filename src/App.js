import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import AboutMonster from './AboutMonster';



function App() {

  return (
    <div>
      <Router>
        <nav>
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>  
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/:title" element={<AboutMonster/>}/>
        </Routes>

      </Router>
    </div>
  )

}

export default App;