import React from 'react'
import MeuRate from './MeuRate'
import LastComp from './LastComp'
import NextComp from './NextComp'
import triangulo from '../../../img/triangulo.svg'
import './style.css'

function PerfilBody() {
  return (
    <div class="bodyPRF">
      <img class='triangulo1' src={triangulo}/>
      <img class='triangulo2' src={triangulo}/>
      <MeuRate/>
      <LastComp/>
      <NextComp/>
    </div>
    
  )
}

export default PerfilBody