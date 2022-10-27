import React from 'react'
import Logo from '../../../img/logo.svg'
import './style.css'

function Header()  {
  return (
    <header>
        <nav class="navegationADM">
                <a href="/"><img src={Logo} alt="logo"/></a>
            <ul>
                <li><a href="#">Usuario ADM</a>
                  <ul>
                    <li><a href='/Perfil'>Perfil</a></li>
                    <li><a href='/Rate'>Classificação</a></li>
                    <li><a href='/'>Sair</a></li>
                  </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header