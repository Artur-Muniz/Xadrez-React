import React from 'react'
import './style.css'
import Logo from "../../../img/logo.svg"
import Tabuleiro from "../../../img/tabuleiroFundo.png"

function Banner() {
  return (
    <div class="banner"><div class="homeBanner"><img src={Tabuleiro}/></div>
            <section class="home">
                <div class="home-img"><img src={Logo}/></div>
                <div class="home-text">
                    <h1 class="title">CHECKMATE</h1>
                    <p>A SOLUÇÃO PARA O GERENCIAMENTO DAS SUAS PARTIDAS DE XADREZ.</p>
                    <a href="/ADMScreen" class="home-btn">Experimente</a>
                </div>
            </section>
        </div>
  )
}

export default Banner