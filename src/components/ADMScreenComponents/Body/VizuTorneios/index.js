import React from 'react'
import './style.css'
import IMG from "../../../../img/VZback.jpg"

function VizuTorneio() {
  return (
    <div class="VZtorneio">
      <img src={IMG}/>
      <a href="#" class="VZbtn">Visualizar Torneio</a>  
    </div>
  )
}

export default VizuTorneio