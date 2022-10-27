import React from 'react'
import './style.css'
import Logo from "../../../img/logo.svg"

function Header () {
  return (
    <header>
        <nav class="navegation">
                <a href="/"><img src={Logo} alt="logo"/></a>
            <ul>
                <li><a href="/LOGIN">INICIAR SESSÃO</a></li>
                <li><a href="/Register">CADASTRE-SE</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header