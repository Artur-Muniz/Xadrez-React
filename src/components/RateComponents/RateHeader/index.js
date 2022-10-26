import React from 'react'
import Logo from '../../../img/logo.svg'
import './style.css'

function rateHeader()  {
  return (
    <header>
        <nav class="navegationRT">
                <a href="/"><img src={Logo} alt="logo"/></a>
            <ul>
                <li><a href="#">Usuario ADM</a>
                  <ul>
                    <li><a href='/Perfil'>Perfil</a></li>
                    <li><a href='/'>Sair</a></li>
                  </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default rateHeader