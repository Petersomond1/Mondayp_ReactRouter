import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Red from "./components/Red"
import Blue from "./components/Blue"
import Home from "./components/Home"

function App() {
  

  return (
    
      <div id="container">
  
      <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
    <Routes>
    <Route path="/home" element={<h1>Home, Blue, Red</h1>} />
    <Route path="/blue" element={<h1>Blue</h1>}/>
    <Route path="/red" element={<h1>Red</h1>}/>
   </Routes>
</div>
   </div>
   
  )
}

export default App
