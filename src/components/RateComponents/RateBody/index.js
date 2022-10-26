import React from 'react'
import RateBody1 from '../RateBody/RateBody1'
import RateBody2 from '../RateBody/RateBody2'
import triangulo from '../../../img/triangulo.svg'
import './style.css'

function rateBody() {
  return (
    <div class="bodyRate">
      <img class='triangulo1' src={triangulo}/>
      <img class='triangulo2' src={triangulo}/>
      <RateBody1/>
      <RateBody2/>
    </div>
    
  )
}

export default rateBody