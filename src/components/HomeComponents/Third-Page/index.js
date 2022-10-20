import React from 'react'
import Cadastro from "../../../img/cadastro.png"
import Calculadora from "../../../img/calculator.png"
import Torneio from "../../../img/torneio.png"
import './style.css'

function Third_page() {
  return (
    <section class="third-page">
            <div class="third-title">PRINCIPAIS FUNCIONALIDADES</div>
            <div class="functions">
                <div class="registrate">
                    <h2>CADASTRO E CONTROLES<br/>DE MEMBRO</h2>
                    <img src={Cadastro} alt=""/>
                </div>
                <div class="tournament">
                    <h2>CONTROLE E AGENDAMENTO<br/>DE TORNEIOS</h2>
                    <img src={Calculadora} alt=""/>
                </div>
                <div class="calculate">
                    <h2>REGULAGEM, SWISS MANAGER<br/>E CALCULO DE RATE AUTOMÁTICO</h2>
                    <img src={Torneio} alt=""/>
                </div>
            </div>
        </section>
  )
}

export default Third_page