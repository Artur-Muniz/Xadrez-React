import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register";
import ADMScreen from "./pages/ADMScreen"

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ADMScreen" element={<ADMScreen />} />
      </Routes>
    </Router>
  );
};

export default App;