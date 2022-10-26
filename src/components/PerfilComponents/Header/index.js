import React from 'react'
import Logo from '../../../img/logo.svg'
import './style.css'

function prfHeader()  {
  return (
    <header>
        <nav class="navegationPRF">
                <a href="/"><img src={Logo} alt="logo"/></a>
            <ul>
                <li><a href="#">Usuario ADM</a>
                  <ul>
                    <li><a href='/Rate'>Classificação</a></li>
                    <li><a href='#'>Sair</a></li>
                  </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default prfHeader